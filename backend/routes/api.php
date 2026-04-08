<?php
use App\Models\User;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\CaptchaController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/captcha', [CaptchaController::class, 'generate']);
Route::post('/send-otp', [OtpController::class, 'sendOtp']);
Route::post('/verify-otp', [OtpController::class, 'verifyOtp']);




// Route::get('/products', function () {
//     return Product::all();
// });
Route::get('products', [ApiController::class, 'getAllProducts'])->name('product_requests');
Route::post('/contact-us', [ApiController::class, 'store_contact_us'])->name('store_contact');
Route::post('/verify-contact-otp', [ApiController::class, 'verify_otp_and_save']);
Route::get('/products/{slug}', [ApiController::class, 'show_product'])->name('show_product');
Route::get('careers', [ApiController::class, 'get_all_careers'])->name('careers');
Route::get('/careers/{slug}', [ApiController::class, 'getCareerById']);
Route::post('/apply-career', [ApiController::class, 'applyCareer']);
Route::get('/product-search', [ApiController::class, 'search']);
Route::get('/events', [ApiController::class, 'getEvents']);
Route::get('/events/{id}', [ApiController::class, 'getEvent']);
Route::get('/fevents', [ApiController::class, 'getFuture_Events']);

Route::get('/home-products', [ApiController::class, 'getHomeProducts']);
Route::get('/partners', [ApiController::class, 'getpartners']);




