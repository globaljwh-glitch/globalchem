<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/test-session', function () {
    session(['check' => 'working']);
    return 'Session set';
});

Route::get('/check-session', function () {
    return session('check', 'not set');
});

Route::get('/', [LoginController::class, 'index'])->name('admin');
Route::post('/login-post', [LoginController::class, 'adminLoginPost'])->name('adminlogin_post');

Route::group(['middleware' => ['admin'], 'prefix' => 'admin'], function () {

    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('adminDashboard');
    Route::get('/logout', [AdminController::class, 'logout'])->name('logout');

    // Start Product Routes
    Route::get('/add-product', [AdminController::class, 'add_product'])->name('admin.add_product');
    Route::post('/save-product', [AdminController::class, 'save_product'])->name('admin.save_product');
    Route::post('/import-product', [AdminController::class, 'import_products'])->name('admin.import_products');
    Route::get('/export-excel', [AdminController::class, 'downloadTemplate'])->name('admin.download-template');
    Route::get('/products', [AdminController::class, 'all_products'])->name('admin.all-products');
    Route::get('/product/edit/{id}', [AdminController::class, 'edit_product'])->name('admin.edit-product');
    Route::post('/product/update/{id}', [AdminController::class, 'update_product'])->name('admin.update-product');
    Route::delete('/product/delete/{id}', [AdminController::class, 'delete_product'])->name('admin.delete-product');
    Route::get('/search-products', [AdminController::class, 'productList'])->name('admin.product-list');

    // End Product Routes


    // Start Career Routes
    Route::get('/add-career', [AdminController::class, 'add_career'])->name('admin.add_career');
    Route::post('add-jobpost', [AdminController::class, 'addJobPost'])->name('admin.addjob_post');
    Route::get('/all-careers', [AdminController::class, 'allJobs'])->name('admin.all_jobs');
    Route::get('/all-careers-requests', [AdminController::class, 'job_requests'])->name('admin.job_requests');
    Route::get('/career/edit/{job_id}', [AdminController::class, 'editJob'])->name('admin.edit_job');
    Route::patch('/career/update/{job_id}', [AdminController::class, 'updateJobDetails'])->name('admin.update_job');
    Route::get('/career/status/{job_id}', [AdminController::class, 'updateJobsStatus'])->name('admin.updateJobs_status');
    Route::get('/career-request/resume/{id}', [AdminController::class, 'show_resume'])->name('admin.show_resume');

    // End Career Routes

    // Route::get('/generate-product-slugs', [AdminController::class, 'generateSlugsForAllProducts'])
    // ->name('admin.generate-product-slugs');

    
// News Routes
Route::get('news', [AdminController::class, 'ufcNews'])->name('admin.ufc_news');
Route::get('news/edit/{news_id}', [AdminController::class, 'editNews'])->name('admin.edit_news');
Route::patch('news/update/{news_id}', [AdminController::class, 'updateNewsDetails'])->name('admin.edit_update_news');
Route::get('add-news', [AdminController::class, 'addNews'])->name('admin.add_news');
Route::post('add-newspost', [AdminController::class, 'addNewsPost'])->name('admin.addnews_post');
Route::get('news/status/{news_id}', [AdminController::class, 'updateNewsStatus'])->name('admin.updateNews_status');

// End News

// Contact routes

Route::get('/all-contact-requests', [AdminController::class, 'all_contactrequests'])->name('admin.all_contactrequests');
Route::get('contact-us/status/{contactUs_id}', [AdminController::class, 'updateContactUsStatus'])->name('admin.contact_us_status');

// End Contact
Route::get('add-event', [AdminController::class, 'add_event'])->name('admin.add_event');
Route::post('add-eventpost', [AdminController::class, 'add_event_post'])->name('admin.addevent_post');
Route::get('all-event', [AdminController::class, 'all_events'])->name('admin.all_events');
Route::get('/event/edit/{id}', [AdminController::class, 'edit_event'])->name('admin.edit_event');
Route::post('/event/update/{id}', [AdminController::class, 'update_event'])->name('admin.update_event');
Route::get('/event/delete/{id}', [AdminController::class, 'delete_event'])->name('admin.delete_event');

// Event Routes

// End Event
// Partner Routes
Route::get('add-partner', [AdminController::class, 'add_partner'])->name('admin.add_partner');
Route::post('add-partnerpost', [AdminController::class, 'add_partner_post'])->name('admin.addpartner_post');
Route::get('all-partners', [AdminController::class, 'all_partners'])->name('admin.all_partners');
Route::get('/partner/edit/{id}', [AdminController::class, 'edit_partner'])->name('admin.edit_partner');
Route::post('/partner/update/{id}', [AdminController::class, 'update_partner'])->name('admin.update_partner');
Route::delete('/partner/delete/{id}', [AdminController::class, 'delete_partner'])->name('admin.delete_partner');
// End Partner

    // Start General-Settings
    
    Route::get('general-settings', [AdminController::class, 'generalSettings'])->name('admin.general_settings');
    Route::post('update-settings', [AdminController::class, 'updateSettings'])->name('admin.update_settings');

    Route::get('create-settings', [AdminController::class, 'createNewSettings'])->name('admin.create_settings');
    Route::post('create-settings-post', [AdminController::class, 'createSettingsPost'])->name('admin.create_settings_post');

    // End General Settings
});

// Example alternate route group (commented)
/*
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    })->name('admin.dashboard');
});
*/
