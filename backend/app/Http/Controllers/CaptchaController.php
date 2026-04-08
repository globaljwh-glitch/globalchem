<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Str;

class CaptchaController extends Controller
{
    public function generate()
    {
        $code = strtoupper(Str::random(5));
        $token = Crypt::encryptString($code);

        // Create image using Intervention
        $img = Image::canvas(120, 40, '#f8f8f8')
            ->text($code, 60, 20, function ($font) {
                $font->file(public_path('fonts/Roboto-Regular.ttf'));
                $font->size(24);
                $font->color('#111');
                $font->align('center');
                $font->valign('center');
            });

        $base64 = (string) $img->encode('data-url');

        return response()->json([
            'image' => $base64,
            'token' => $token
        ]);
    }

    public function submit(Request $request)
    {
        $request->validate([
            'captcha_input' => 'required|string',
            'captcha_token' => 'required|string',
        ]);

        try {
            $original = Crypt::decryptString($request->captcha_token);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Invalid CAPTCHA token.'], 400);
        }

        if (strtoupper($request->captcha_input) !== strtoupper($original)) {
            return response()->json(['error' => 'CAPTCHA validation failed.'], 422);
        }

        return response()->json(['success' => true, 'message' => 'Form submitted successfully!']);
    }
}
