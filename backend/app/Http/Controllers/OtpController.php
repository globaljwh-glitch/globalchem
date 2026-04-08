<?php use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;

public function sendOtp(Request $request)
{
    $email = $request->input('email');
    $otp = rand(100000, 999999);
    Cache::put('otp_' . $email, $otp, now()->addMinutes(5));

    Mail::raw("Your OTP is: $otp", function ($message) use ($email) {
        $message->to($email)->subject("Your OTP Code");
    });

    return response()->json(['message' => 'OTP sent']);
}

public function verifyOtp(Request $request)
{
    $email = $request->input('email');
    $otp = $request->input('otp');
    $stored = Cache::get('otp_' . $email);

    if ($stored && $stored == $otp) {
        return response()->json(['verified' => true]);
    }

    return response()->json(['verified' => false], 422);
}
