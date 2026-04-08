<?php

namespace App\Http\Controllers;

use App\Models\JobRequest;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Partner;
use App\Models\Career;
use App\Models\Config;
use App\Models\News;
use App\Models\ContactUs;
use App\Models\Event;
use Illuminate\Support\Facades\Session;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ProductsImport;
use App\Exports\ProductFormatExport;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
class AdminController extends Controller
{
    public function dashboard()
    {
        if (!Session::has('admin_id')) {
            return redirect()->route('admin')->with('error', 'Please login first.');
        }

        $total_jobs = Career::count();
        $total_contact = ContactUs::count();
        $total_news = News::count();
        $total_job_request = JobRequest::count();

        return view('admin.dashboard', compact(
            'total_jobs',
            'total_contact',
            'total_news',
            'total_job_request'
        ));
    }


    public function logout()
    {
        Session::flush();
        return redirect()->route('admin')->with('success', 'Logged out successfully.');
    }

    public function all_products(Request $request)
    {

        $products = Product::orderBy('id', 'desc')->get();

        $query = Product::query();

        if ($request->filled('search')) {
            $search = $request->get('search');
            $query->where(function ($q) use ($search) {
                $q->where('chemical_name', 'like', "%{$search}%")
                    ->orWhere('product_code', 'like', "%{$search}%")
                    ->orWhere('brand_name', 'like', "%{$search}%")
                    ->orWhere('cas_number', 'like', "%{$search}%");
            });
        }

        $products = $query->orderBy('chemical_name', 'asc')->paginate(20);

        //$products = Product::orderBy('id', 'desc')->paginate(20);

        return view('admin.all-products', compact('products'));
    }

    public function add_product()
    {
        return view('admin.add-product');
    }
    public function save_product(Request $request)
    {
        $request->validate([
            'chemical_name' => 'required',
            'product_code' => 'required',
            'brand_name' => 'required',
            'cas_number' => 'required',

        ]);

        $slug = Str::limit(Str::slug($request->chemical_name), 50, '');


        $count = Product::where('slug', 'LIKE', "{$slug}%")->count();
        if ($count) {
            $slug .= '-' . ($count + 1);
        }

        $product = new Product();
        $product->chemical_name = $request->chemical_name;
        $product->product_code = $request->product_code;
        $product->brand_name = $request->brand_name;
        $product->cas_number = $request->cas_number;
        $product->appearance = $request->appearance;
        $product->description = $request->description;
        $product->function = $request->function;
        $product->synonyms = $request->synonyms;
        $product->formula = $request->formula;
        $product->storage = $request->storage;


        $product->packages = json_encode($request->packages);
        $product->industries = json_encode($request->industries);
        $product->product_classes = json_encode($request->product_classes);
        $product->other = json_encode($request->other);

        $product->status = 1;
        $product->slug = $slug;

        $product->save();

        return redirect()->back()->with('success', 'Product added successfully!');
    }

    public function import_products(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,csv,xls',
        ]);

        Excel::import(new ProductsImport, $request->file('file'));

        return redirect()->back()->with('success', 'Products imported successfully.');
    }

    public function downloadTemplate()
    {
        return Excel::download(new ProductFormatExport, 'product_import_template.xlsx');
    }

    public function edit_product($encrypted_id)
    {
        $id = Crypt::decrypt($encrypted_id);
        $product = Product::findOrFail($id);


        $product->packages = $product->packages ? json_decode($product->packages, true) : [];
        $product->industries = $product->industries ? json_decode($product->industries, true) : [];
        $product->product_classes = $product->product_classes ? json_decode($product->product_classes, true) : [];
        $product->other = $product->other ? json_decode($product->other, true) : [];

        return view('admin.edit-product', compact('product'));
    }


    public function update_product(Request $request, $id)
    {


        $request->validate([
            'chemical_name' => 'required',
            'product_code' => 'required',
            'brand_name' => 'required',
            'cas_number' => 'required',

        ]);


        $product = Product::findOrFail($id);


        $data = $request->only([
            'chemical_name',
            'product_code',
            'brand_name',
            'cas_number',
            'appearance',
            'storage',
            'description',
            'function',
            'synonyms',
            'formula'
        ]);


        foreach (['packages', 'industries', 'product_classes', 'other'] as $field) {
            $data[$field] = json_encode($request->input($field));
        }

        //$data['slug'] = Str::slug($request->chemical_name) . '-' . $product->id;

        $product->update($data);

        return redirect()->back()->with('success', 'Product updated successfully!');
    }

    // public function productList(Request $request)
    // {
    //     $query = Product::query();

    //     if ($request->filled('search')) {
    //         $search = $request->get('search');
    //         $query->where(function($q) use ($search) {
    //             $q->where('chemical_name', 'like', "%{$search}%")
    //             ->orWhere('product_code', 'like', "%{$search}%")
    //             ->orWhere('brand_name', 'like', "%{$search}%")
    //             ->orWhere('cas_number', 'like', "%{$search}%");
    //         });
    //     }

    //     $products = $query->orderBy('created_at', 'desc')->paginate(20);

    //     return view('admin.all-products', compact('products'));
    // }



    public function delete_product($encrypted_id)
    {
        $id = Crypt::decrypt($encrypted_id);
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect()->route('admin.all-products')->with('success', 'Product deleted successfully!');
    }

    public function add_career()
    {
        return view('admin.add-job');
    }

    public function addJobPost(Request $request)
    {
        $this->validate($request, [
            'job_title' => 'required',
            'description' => 'required',
            'job_depart' => 'required',
        ]);


        $baseSlug = Str::slug($request->job_title);


        $slug = $baseSlug;
        $count = 1;
        while (Career::where('slug', $slug)->exists()) {
            $slug = $baseSlug . '-' . $count;
            $count++;
        }


        $data = [
            'title' => $request->job_title,
            'slug' => $slug,
            'description' => $request->description,
            'department' => $request->job_depart,
        ];


        $job = Career::create($data);

        $message = "<b>Job submitted successfully</b>";
        return redirect()->back()->with(['success' => $message]);
    }

    public function allJobs(Request $request)
    {
        $filter = [];
        if (!empty($request->status) && ($request->status == '1' || $request->status == '2')) {
            $filter['status'] = $request->status;
        }
        $joblist = Career::where($filter)
            ->orderBy('id', 'DESC')
            ->get();
        return view('admin.jobs', compact('joblist'));
    }

    public function editJob($job_id)
    {
        if (Session::has('admin_id')) {

            $jobdetail = Career::where(['id' => $job_id])->first();
            return view('admin.edit-job', compact('jobdetail', 'job_id'));
        } else {
            return redirect('/dashboard');
        }

    }

    public function updateJobDetails(Request $request, $job_id)
    {
        if (Session::has('admin_id')) {

            $this->validate($request, [
                'job_title' => 'required',
                'description' => 'required',
                'job_depart' => 'required',

            ]);
            $data = array(
                'title' => $request->job_title,
                'description' => $request->description,
                'department' => $request->job_depart,
            );
            $message = "The job you are trying to access is not available";
            if (isset($job_id)) {
                $jobDetail = Career::where(['id' => $job_id])->first();
                if ($jobDetail) {
                    $jobDetail->title = $request->job_title;
                    $jobDetail->description = $request->description;
                    $jobDetail->department = $request->job_depart;
                    if ($jobDetail->save()) {
                        $message = "<b>Job updated successfully</b>";
                        return redirect()->back()->with(['success' => $message]);
                    }
                }
            }
            return redirect()->back()->with(['error' => $message]);

        } else {
            return redirect('/dashboard');
        }

    }


    public function updateJobsStatus($job_id)
    {
        if (Session::has('admin_id')) {

            if (isset($job_id)) {
                $jobsDetail = Career::where(['id' => $job_id])->first();
                if ($jobsDetail) {
                    if ($jobsDetail->status == '1') {
                        $jobsDetail->status = '2';
                    } else {
                        $jobsDetail->status = '1';
                    }

                    if ($jobsDetail->save()) {
                        $message = "<b>Job status updated successfully</b>";
                        return redirect()->back()->with(['success' => $message]);
                    }
                }
            }
            return redirect()->back()->with(['error' => $message]);

        } else {
            return redirect('/dashboard');
        }

    }

    public function generalSettings()
    {
        $config = Config::all();
        return view('admin.settings', compact('config'));
    }
    public function updateSettings(Request $request)
    {
        $this->validate($request, [
            'value.*' => 'required',
        ]);
        //echo "<pre>";print_r($request->all());
        $variable = $request->all();
        foreach ($variable['value'] as $key => $value) {
            // echo $key.'---'.$value;die;
            $config = Config::find($key);
            $config->value = $value;
            $config->save();
        }

        $message = "<b>Configuration updated successfully</b>";
        return redirect()->back()->with(['success' => $message]);
    }
    public function createNewSettings()
    {

        return view('admin.add-settings');
    }
    public function createSettingsPost(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'value' => 'required',
        ]);
        $data = array(
            'name' => $request->name,
            'value' => $request->value
        );
        $job = Config::create($data);
        $message = "<b>Configuration saved successfully</b>";
        return redirect()->back()->with(['success' => $message]);
    }

    // public function generateSlugsForAllProducts()
    // {
    //     $products = Product::all();

    //     foreach ($products as $product) {
    //         $product->slug = Product::generateUniqueSlug($product->chemical_name, $product->id);
    //         $product->save();
    //     }

    //     return 'Slugs generated successfully!';
    // }

    public function addNews()
    {

        return view('admin.add-news');
    }
    public function ufcNews(Request $request)
    {
        $filter = [];
        if (!empty($request->status) && ($request->status == '1' || $request->status == '2')) {
            $filter['status'] = $request->status;
        }
        $newslist = News::where($filter)
            ->orderBy('id', 'DESC')
            ->get();
        return view('admin.news', compact('newslist'));
    }

    public function editNews($news_id)
    {
        if (Session::has('admin_id')) {
            $newsdetail = News::where(['id' => $news_id])->first();
            return view('admin.edit-news', compact('newsdetail', 'news_id'));
        } else {
            return redirect('/dashboard');
        }

    }

    public function updateNewsDetails(Request $request, $news_id)
    {
        if (Session::has('admin_id')) {
            $this->validate($request, [
                'news_title' => 'required',
                'description' => 'required',

            ]);
            $data = array(
                'title' => $request->news_title,
                'description' => $request->description
            );
            $message = "The news you are trying to access is not available";
            if (isset($news_id)) {
                $newsDetail = News::where(['id' => $news_id])->first();
                if ($newsDetail) {
                    $newsDetail->title = $request->news_title;
                    $newsDetail->description = $request->description;
                    if ($newsDetail->save()) {
                        $message = "<b>News updated successfully</b>";
                        return redirect()->back()->with(['success' => $message]);
                    }
                }
            }
            return redirect()->back()->with(['error' => $message]);

        } else {
            return redirect('/dashboard');
        }

    }

    public function addNewsPost(Request $request)
    {
        //echo "<pre>";print_r($request->all());die;
        $this->validate($request, [
            'news_title' => 'required',
            'description' => 'required',

        ]);
        $data = array(
            'title' => $request->news_title,
            'description' => $request->description
        );
        $news = News::create($data);
        $message = "<b>News submitted successfully</b>";
        return redirect()->back()->with(['success' => $message]);

    }


    public function updateNewsStatus($news_id)
    {
        if (Session::has('admin_id')) {

            if (isset($news_id)) {
                $newsDetail = News::where(['id' => $news_id])->first();
                if ($newsDetail) {
                    if ($newsDetail->status == '1') {
                        $newsDetail->status = '2';
                    } else {
                        $newsDetail->status = '1';
                    }

                    if ($newsDetail->save()) {
                        $message = "<b>News status updated successfully</b>";
                        return redirect()->back()->with(['success' => $message]);
                    }
                }
            }
            return redirect()->back()->with(['error' => $message]);

        } else {
            return redirect('/dashboard');
        }

    }

    public function all_contactrequests(Request $request)
    {
        $filter = [];
        if (!empty($request->status) && ($request->status == '1' || $request->status == '2')) {
            $filter['status'] = $request->status;
        }
        $contactlist = ContactUs::where($filter)
            ->orderBy('id', 'DESC')
            ->get();
        return view('admin.contact-us', compact('contactlist'));
    }

    public function updateContactUsStatus($contactUs_id)
    {
        if (Session::has('admin_id')) {

            $contactUsDetail = ContactUs::find($contactUs_id);

            if ($contactUsDetail) {
                $contactUsDetail->status = $contactUsDetail->status == 1 ? 2 : 1;

                if ($contactUsDetail->save()) {
                    $message = "<b>Contact's application status updated successfully.</b>";
                    return redirect()->back()->with(['success' => $message]);
                } else {
                    $errorMessage = "Something went wrong while updating the status.";
                    return redirect()->back()->with(['error' => $errorMessage]);
                }
            } else {
                $errorMessage = "Contact record not found.";
                return redirect()->back()->with(['error' => $errorMessage]);
            }

        } else {
            return redirect('/dashboard');
        }
    }


    public function add_event()
    {
        return view('admin.add_event');
    }

    public function add_event_post(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'event_name' => 'required|string|max:255',
            'from_date' => 'required|date',
            'to_date' => 'required|date|after_or_equal:from_date',
            'location' => 'required|string|max:255',
            'type' => 'required|in:other,future',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        Event::create([
            'event_name' => $request->event_name,
            'date_from' => $request->from_date,
            'date_to' => $request->to_date,
            'location' => $request->location,
            'description' => $request->description,
            'type' => $request->type,
        ]);

        return redirect()->route('admin.all_events')->with('success', 'Event added successfully.');
    }


    public function edit_event($id)
    {
        $event = Event::findOrFail($id);
        return view('admin.edit_event', compact('event'));
    }


    public function update_event(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'event_name' => 'required|string|max:255',
            'from_date' => 'required|date',
            'to_date' => 'required|date|after_or_equal:from_date',
            'location' => 'required|string|max:255',

        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $event = Event::findOrFail($id);
        $event->update([
            'event_name' => $request->event_name,
            'date_from' => $request->from_date,
            'date_to' => $request->to_date,
            'location' => $request->location,
            'description' => $request->description,
        ]);

        return redirect()->route('admin.all_events')->with('success', 'Event updated successfully.');
    }
    public function delete_event($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        return redirect()->route('admin.all_events')->with('success', 'Event deleted successfully.');
    }
    public function all_events()
    {

        $eventList = Event::orderBy('created_at', 'desc')->get();


        return view('admin.all_events', compact('eventList'));
    }

    public function job_requests(Request $request)
    {
        $filter = [];
        if (!empty($request->status) && ($request->status == '1' || $request->status == '2')) {
            $filter['status'] = $request->status;
        }

        $joblist = JobRequest::with('career')
            ->where($filter)
            ->orderBy('id', 'DESC')
            ->get();

        return view('admin.career_request', compact('joblist'));
    }

    public function show_resume($id)
    {
        $job = JobRequest::with('career')->findOrFail($id);

        return view('admin.show_resume', compact('job'));
    }

    public function add_partner()
    {
        return view('admin.add-partner');
    }

    public function all_partners(Request $request)
    {

        $partners = Partner::orderBy('created_at', 'desc')->get();

        return view('admin.all-partners', compact('partners'));
    }



    public function add_partner_post(Request $request)
    {

        $request->validate([
            'partner_name' => 'required|string|max:255|unique:partners,name',
            'website' => 'required|url|max:255|unique:partners,website',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp',
        ]);



        $logoPath = null;
        if ($request->hasFile('logo')) {
            $image = $request->file('logo');
            $filename = time() . '_' . Str::slug($request->partner_name) . '.' . $image->getClientOriginalExtension();
            $destination = public_path('uploads/partners');


            if (!file_exists($destination)) {
                mkdir($destination, 0777, true);
            }

            $image->move($destination, $filename);
            $logoPath = 'uploads/partners/' . $filename;
        }


        $partner = new Partner();
        $partner->name = $request->partner_name;
        $partner->website = $request->website;
        $partner->logo = $logoPath;
        $partner->save();

        return redirect()->back()->with('success', 'Partner added successfully!');
    }

    public function edit_partner(Request $request, $id)
    {
        $encrypted_id = Crypt::decrypt($id);
        $partner = Partner::findOrFail($encrypted_id);
        return view('admin.edit-partner', compact('partner'));
    }

    public function update_partner(Request $request, $id)
    {

        $request->validate([
            'partner_name' => 'required|string|max:255',
            'website' => 'required|url|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        $encrypted_id = Crypt::decrypt($id);
        $partner = Partner::findOrFail($encrypted_id);


        $partner->name = $request->partner_name;
        $partner->website = $request->website;


        if ($request->hasFile('logo')) {

            if ($partner->logo && file_exists(public_path($partner->logo))) {
                unlink(public_path($partner->logo));
            }


            $image = $request->file('logo');
            $filename = time() . '_' . Str::slug($request->partner_name) . '.' . $image->getClientOriginalExtension();
            $destination = public_path('uploads/partners');

            if (!file_exists($destination)) {
                mkdir($destination, 0755, true);
            }

            $image->move($destination, $filename);
            $partner->logo = 'uploads/partners/' . $filename;
        }

        $partner->save();

        return redirect()->back()->with('success', 'Partner updated successfully!');
    }

    public function delete_partner(Request $request, $id)
    {
        $encrypted_id = Crypt::decrypt($id);
        $partner = Partner::findOrFail($encrypted_id);


        if ($partner->logo && file_exists(public_path($partner->logo))) {
            unlink(public_path($partner->logo));
        }


        $partner->delete();

        return redirect()->back()->with('success', 'Partner deleted successfully!');
    }
}
