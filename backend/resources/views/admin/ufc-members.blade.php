@extends('layout.admin-app')

@section('content')
<!--  BEGIN CONTENT PART  -->
<div id="content" class="main-content">
  <div class="container">
    <div class="page-header">
        <div class="page-title">
            <h3>UFC Members</h3>
           
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
    <div class="row">
      <div class="col-lg-12 col-md-12 layout-spacing">
        <div class="statbox widget box box-shadow">
          <div class="widget-header">
            <div class="row">
              <div class="col-xl-6 col-md-6 col-sm-6 col-6">
                <h4>Members Listing</h4>
              </div>
               <div class="col-xl-6 col-md-6 col-sm-6 col-6 text-right mt-4">
                    <a href="{{route('add_members')}}" class="btn btn-success btn-rounded mr-4"><i class="icon-ok position-left"></i> Add New Member</a>                       
                </div>
          </div>
          <div class="widget-content widget-content-area">
            <div class="table-responsive">
              <table id="html5-extension" class="table table-bordered table-hover table-condensed mb-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Logo</th>
                        <th>Name</th>
                        
                        <th>location</th>
                        <th>Type</th>
                        <!-- <th>Description</th> -->
                        <th>Link</th>
                        <th>Status</th>
                        <th class="align-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                  @foreach($ufcMembers as $index=>$userslist)
                    <tr>
                        <td>{{$index+1}}</td>
                        <td><img height="40" src="{{asset($userslist->logo)}}"/></td>
                        <td>{{$userslist->name}}</td>
                        
                        <td>{{$userslist->location}}</td>
                        <td>{{$userslist->category}}</td>
                        <!-- <td>{{$userslist->description}}</td> -->
                        <td><a href="{{$userslist->link}}" target="blank">Link</a></td>
                       <td class="align-center">
                            @if($userslist->status==1)
                                <span class="badge badge-primary">Active</span>
                            @else
                                 <span class="badge badge-danger">Inactive</span>
                            @endif

                        </td>
                        <td>
                            <a href="{{route('edit_members',$userslist->id)}}" class="btn-sm btn-primary mr-1">Edit</a>
                            <!-- <a class="btn-sm btn-danger">Delete</a> -->
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