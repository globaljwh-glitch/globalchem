<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ContactUs;
use App\Models\Event;
use App\Models\Partner;
use App\Models\Career;
use App\Models\JobRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class ApiController extends Controller
{
    public function getAllProducts(Request $request)
    {
        $query = Product::query();


        if ($request->has('search')) {
            $query->where('chemical_name', 'like', '%' . $request->search . '%');
        }

        return $query->paginate(15);
    }

    public function store_contact_us(Request $request)
    {

        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:20',
            'captcha_input' => 'required|string',
            'captcha_token' => 'required|string',
        ]);


        try {
            $original = Crypt::decryptString($request->captcha_token);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Invalid CAPTCHA token.'], 200);
        }

        if (strtoupper($request->captcha_input) !== strtoupper($original)) {
            return response()->json(['success' => false, 'message' => 'CAPTCHA validation failed'], 200);
        }


        $otp = random_int(100000, 999999);


        $cacheKey = 'contact_us_otp_' . $request->email;

        if (empty($request->email)) {
            return response()->json(['success' => false, 'message' => 'Recipient email is missing'], 200);
        }


        Cache::put($cacheKey, [
            'data' => $request->except(['captcha_input', 'captcha_token']),
            'otp' => $otp,
        ], now()->addMinutes(10));

        \Log::info('Sending OTP to: ' . $request->email);


        Mail::send('emails.contact_otp', [
            'first_name' => $request->first_name . $request->last_name,
            'otp' => $otp,
            'duration' => 10
        ], function ($message) use ($request) {
            $message->to($request->email)
                ->subject('Verify Your Email Address to Proceed');
        });


        return response()->json([
            'success' => true,
            'message' => 'OTP has been sent to your email. Please verify to complete submission.',
        ], 200);
    }


    public function verify_otp_and_save(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required|digits:6',
        ]);

        $cacheKey = 'contact_us_otp_' . $request->email;
        $cached = Cache::get($cacheKey);


        if (!$cached) {
            return response()->json(['success' => false, 'message' => 'OTP expired or not found.'], 400);
        }

        if ($cached['otp'] != $request->otp) {
            return response()->json(['success' => false, 'message' => 'Invalid OTP.'], 400);
        }



        $contact = new ContactUs();
        $contact->first_name = $cached['data']['first_name'] ?? null;
        $contact->last_name = $cached['data']['last_name'] ?? null;
        $contact->email = $cached['data']['email'] ?? null;
        $contact->phone = $cached['data']['phone'] ?? null;
        $contact->company = $cached['data']['company'] ?? null;
        $contact->address = $cached['data']['address'] ?? null;
        $contact->city = $cached['data']['city'] ?? null;
        $contact->state = $cached['data']['state'] ?? null;
        $contact->zipcode = $cached['data']['zipcode'] ?? null;
        $contact->country = $cached['data']['country'] ?? null;
        $contact->application = $cached['data']['application'] ?? null;
        $contact->interests = $cached['data']['interests'] ?? null;
        $contact->final_app = $cached['data']['final_app'] ?? null;

        $contact->save();


        Cache::forget($cacheKey);

        try {
            $userEmail = $contact->email;
            $adminEmail = 'jw_hsu@globalchemicalscorp.com';
            $ccEmail = 'binjalpatel@globalchemicalscorp.com';
            $bccEmails = ['piyushthakur@jwhglobal.com', 'gurpalsingh@jwhglobal.com'];

            // Send to user
            Mail::send('emails.contact_user_confirmation', ['contact' => $contact], function ($message) use ($userEmail, $ccEmail) {
                $message->to($userEmail)

                    ->subject('Thank you for contacting us!');
            });

            // Send to admin
            Mail::send('emails.contact_admin_notification', ['contact' => $contact], function ($message) use ($adminEmail, $ccEmail, $bccEmails) {
                $message->to($adminEmail)
                    ->cc($ccEmail)
                    ->bcc($bccEmails) // ← ADD THIS
                    ->subject('New Contact Form Submission');
            });
        } catch (\Exception $e) {
            \Log::error('Mail sending failed: ' . $e->getMessage());
        }



        return response()->json([
            'success' => true,
            'message' => 'Thank you! Your contact request has been submitted successfully.',
            'data' => $contact
        ], 201);
    }


    public function show_product($slug)
    {
        $product = Product::where('slug', $slug)->first();

        if (!$product) {
            return response()->json([
                'status' => false,
                'message' => 'Product not found.'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'product' => $product
        ]);
    }

    public function get_all_careers(Request $request)
    {
        $search = $request->input('search');

        $careersQuery = Career::query();

        if (!empty($search)) {
            $careersQuery->where('title', 'like', "%{$search}%")
                ->orWhere('department', 'like', "%{$search}%");
        }

        $careers = $careersQuery->where('status', 1)->orderBy('id', 'desc')->paginate(7);

        return response()->json($careers);
    }

    public function getCareerById($slug)
    {
        $career = Career::where('slug', $slug)->get();

        if (!$career) {
            return response()->json(['message' => 'Career not found'], 404);
        }

        return response()->json($career);
    }


    public function applyCareer(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'subject' => 'required|string|max:255',
            'resume' => 'required|string',
            'job_id' => 'required|integer|exists:careers,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Save Job Request
        $jobRequest = new JobRequest();
        $jobRequest->name = $request->name;
        $jobRequest->email = $request->email;
        $jobRequest->phone = $request->phone;
        $jobRequest->subject = $request->subject;

        $cleanResume = trim($request->resume); // remove extra spaces
        $cleanResume = preg_replace('/[\r\n]{3,}/', "\n\n", $cleanResume); // remove large empty gaps
        $jobRequest->job_resume = $cleanResume;

        $jobRequest->job_id = $request->job_id;
        $jobRequest->save();

        // --- Mail Logic ---
        try {
            $userEmail = $jobRequest->email;
            $adminEmail = 'jw_hsu@globalchemicalscorp.com';
            $ccEmail = 'binjalpatel@globalchemicalscorp.com';
            $bccEmails = ['piyushthakur@jwhglobal.com', 'gurpalsingh@jwhglobal.com'];



            // Send confirmation email to the applicant
            Mail::send('emails.career_user_confirmation', ['job' => $jobRequest], function ($message) use ($userEmail) {
                $message->to($userEmail)
                    ->subject('Your Job Application Has Been Received');
            });

            // Send notification email to admin
            Mail::send('emails.career_admin_notification', ['job' => $jobRequest], function ($message) use ($adminEmail, $ccEmail, $bccEmails) {
                $message->to($adminEmail)
                    ->cc($ccEmail)
                    ->bcc($bccEmails)
                    ->subject('New Career Application Submitted');
            });

        } catch (\Exception $e) {
            \Log::error('Career mail sending failed: ' . $e->getMessage());
        }

        return response()->json([
            'message' => 'Application submitted successfully',
            'status' => 1
        ], 200);
    }


    public function search(Request $request)
    {
        $q = $request->get('q');

        $products = Product::where('chemical_name', 'LIKE', "%$q%")
            ->orWhere('product_code', 'LIKE', "%$q%")
            ->orWhere('cas_number', 'LIKE', "%$q%")
            ->get();

        return response()->json(['products' => $products]);
    }

    public function getEvents()
    {
        $events = Event::where('type', 'other')->get();
        return response()->json(['events' => $events]);
    }

    public function getEvent($id)
    {
        $event = Event::findOrFail($id);
        return response()->json(['event' => $event]);
    }

    public function getFuture_Events()
    {
        $events = Event::where('type', 'future')->get();
        return response()->json(['events' => $events]);
    }

    public function getHomeProducts()
    {
        $products = Product::inRandomOrder()->take(5)->get();
        return response()->json(['products' => $products]);
    }

    public function getpartners()
    {
        $partners = Partner::orderBy('name', 'asc')->get();
        return response()->json(['partners' => $partners]);
    }







}

