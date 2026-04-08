@extends('layouts.admin-app')

@section('content')
<!--  BEGIN CONTENT PART  -->
<div id="content" class="main-content">
    <div class="container">
        <div class="page-header">
            <div class="page-title">
                <h3>Jobs</h3>
               
            </div>
        </div>
        
        <div class="row">
            
        
            <div class="col-lg-12 col-md-12 layout-spacing">
                <div class="statbox widget box box-shadow">
                    <div class="widget-header">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Jobs Listing</h4>
                            </div>                       
                        </div>
                    </div>
                     @if(session('error')) 
              <div class="error alert alert-danger alert-dismissable">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Error : </strong>   {{ session('error') }}
              </div>
            @endif
            @if(session('success')) 
              <div class="error alert alert-success alert-dismissable">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                {!! session('success') !!}
              </div>
            @endif

                    <div class="widget-content widget-content-area">
                        <div class="table-responsive">
                            <table id="html5-extension" class="table table-bordered table-hover table-condensed mb-4">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Department</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th class="align-center">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                     @foreach($joblist as $index=>$job)
                                    <tr>
                                        <td>{{$index+1}}</td>
                                        <td>{{ucfirst($job->title)}}</td>
                                       <td>{{ucfirst($job->department)}}</td>
                                      
                                        <td>{{ Carbon\Carbon::parse($job->updated_at)->format('Y-m-d') }}</td>
                                       <td class="align-center">
                                            @if($job->status==1)
                                                <span class="badge badge-info">Active</span>
                                            @else
                                                 <span class="badge badge-danger">In-Active</span>
                                            @endif

                                        </td>

                                        <td class="text-center">
                                            <ul class="table-controls">

                                                <li><a href="{{route('admin.edit_job',$job->id)}}"  data-toggle="tooltip" data-placement="top" title="Edit"><i class="flaticon-fill-tick text-primary fs-20"></i></a></li>
                                                @if($job->status==1)
                                                    <li>
                                                        <a href="{{route('admin.updateJobs_status',$job->id)}}" data-toggle="tooltip" data-placement="top" title="Mark as inactive">
                                                            <i class="flaticon-close-fill text-danger fs-20"></i>
                                                        </a>
                                                    </li>
                                                @else
                                                     <li>
                                                        <a href="{{route('admin.updateJobs_status',$job->id)}}" data-toggle="tooltip" data-placement="top" title="Mark as active">
                                                            <i class="flaticon-close-fill text-info fs-20"></i>
                                                        </a>
                                                    </li>
                                                @endif    
                                            </ul>
                                        </td>
                                    </tr>
                                   @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>                    
        
            
        </div>
    </div>
</div>


@endsection