<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobRequest extends Model
{

    protected $table = 'job_requests';

    protected $fillable = ['name', 'email', 'subject', 'phone', 'job_id', 'job_resume', 'status'];

    public function career()
    {
        return $this->belongsTo(Career::class, 'job_id');
    }


}
