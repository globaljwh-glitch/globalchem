<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    use HasFactory;

    protected $table = 'contact_us';
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'company',
        'address',
        'city',
        'state',
        'country',
        'zipcode',
        'application',
        'interests',
        'final_app',
        'status',
        
    ];

}
