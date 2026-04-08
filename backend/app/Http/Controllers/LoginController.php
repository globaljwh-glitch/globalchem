<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;


class LoginController extends Controller
{
    public function index()
    {
        return view('admin.login');
    }

    public function adminLoginPost(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

    
        $admin = User::where('email', $request->email)->where('is_admin', 1)->first();

        if ($admin && Hash::check($request->password, $admin->password)) {
        
            Session::put('admin_id', $admin->id);
            Session::put('admin_name', $admin->name);

            return redirect()->route('adminDashboard')->with('success', 'Logged In Successfully!.');
        }

        return back()->with('error', 'Invalid email or password.')->withInput();
    }

    
}
