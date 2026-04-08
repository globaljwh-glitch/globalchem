@extends('layout.admin-app')

@section('content')

<!--  BEGIN CONTENT PART  -->
<div id="content" class="main-content">
   <div class="container">
      <div class="page-header">
         <div class="page-title">
            <h3>Jobs</h3>
         </div>
      </div>
      @if($errors->all())
               @foreach ($errors->all() as $error)
                @if($loop->index==0)
                  <div class="alert alert-danger">One or more fields have an error. Please check and try again.</div>
                @endif
              @endforeach
            @endif
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

      <form method="post" action="{{route('edit_update_members',$memberdetail->id)}}" enctype="multipart/form-data">
         @method('PATCH')
         @csrf
         <div class="row">
            <div class="col-lg-12 col-md-12 layout-spacing">
               <div class="statbox widget box box-shadow">
                 <div class="widget-header">
                     <div class="row">
                        <div class="col-xl-6 col-md-6 col-sm-6 col-6">
                           <h4>Update Members</h4>
                        </div>  
                         <div class="col-xl-6 col-md-6 col-sm-6 col-6 text-right mt-4">
                        <a href="{{route('ufc_members')}}" class="btn btn-primary btn-rounded"><i class="icon-pencil position-left"></i>All Members</a>
                        
                    </div>                     
                     </div>
                    

                     <hr/>
                 </div>
                 <div class="widget-content widget-content-area">
                 <div class="row">
                     <div class="col-lg-6 mb-2">
                        <h5>Name</h5>
                        <input type="text" name="name" class="form-control" placeholder="Member Name" value="{{$memberdetail->name}}">
                        @if ($errors->has('name'))
                         <span class="invalid-feedback">
                           <strong>{{ $errors->first('name') }}</strong>
                         </span>
                       @endif
                     </div>
                  
                     
                        <div class="col-lg-6 mb-2">
                           <h5>Description</h5>
                           <textarea class="form-control" name="description" placeholder="Description">{{$memberdetail->description}}</textarea>
                            @if ($errors->has('description'))
                            <span class="invalid-feedback">
                              <strong>{{ $errors->first('description') }}</strong>
                            </span>
                          @endif
                         </div>
                     <div class="col-lg-6 mb-2">
                           <h5>Member type</h5>
                           <select class="form-control" name="member_type">
                              <option value="Manufacturer" {{($memberdetail->category=='Manufacturer')?'selected':''}}>Manufacturer</option>
                                 <option value="Distributor" {{($memberdetail->category=='Distributor')?'selected':''}}>Distributor</option>
                                 <option value="Importer" {{($memberdetail->category=='Importer')?'selected':''}}>Importer</option>
                                 <option value="Retailer" {{($memberdetail->category=='Retailer')?'selected':''}}>Retailer</option>
                                 <option value="Foodservice" {{($memberdetail->category=='Foodservice')?'selected':''}}>Foodservice</option>
                                 <option value="Business Services" {{($memberdetail->category=='Business Services')?'selected':''}}>Business Services</option>
                                 <option value="Representative" {{($memberdetail->category=='Representative')?'selected':''}}>Representative</option>
                           </select>
                            @if ($errors->has('member_type'))
                            <span class="invalid-feedback">
                              <strong>{{ $errors->first('member_type') }}</strong>
                            </span>
                          @endif
                         </div>
                     
                        <div class="col-lg-6 mb-2">
                           <h5>Location</h5>
                           <input type="text" class="form-control" name="location" placeholder="Location" value="{{$memberdetail->location}}" />
                            @if ($errors->has('location'))
                            <span class="invalid-feedback">
                              <strong>{{ $errors->first('location') }}</strong>
                            </span>
                          @endif
                         </div>
                        <div class="col-lg-6 mb-2">
                           <h5>Speciality</h5>
                           <div class="row ml-2" >
                           @foreach($specialities as $key=>$svalue)
                           <div class="form-check col-md-6">
                             <input class="form-check-input" type="checkbox" name="speciality[]" value="{{$key}}" id="Check{{$key}}" {{(in_array($key,$memberdetail->specialities))?'checked':''}}>
                             <label class="form-check-label" for="Check{{$key}}">
                               {{$svalue}}
                             </label>
                           </div>
                           @endforeach
                           </div>
                        </div>
                        <div class="col-lg-6 mb-2">
                           <h5>Link</h5>
                           <input type="text" value="{{$memberdetail->link}}" class="form-control" name="link" placeholder="Link" />
                            @if ($errors->has('link'))
                            <span class="invalid-feedback">
                              <strong>{{ $errors->first('link') }}</strong>
                            </span>
                          @endif
                        </div>
                        
                     </div>
                     <div class="row">
                        <div class="col-md-7 mb-2">
                           <h5>Logo</h5>
                           <input type="file" class="form-control" name="logo"/>
                            @if ($errors->has('logo'))
                            <span class="invalid-feedback">
                              <strong>{{ $errors->first('logo') }}</strong>
                            </span>
                          @endif
                         </div>
                         <div class="col-md-2">
                           <img src="{{asset($memberdetail->logo)}}" height="60">
                        </div>
                        </div>
                        <button type="submit" id="save" class="btn btn-success btn-rounded mr-4"><i class="icon-ok position-left"></i> Update</button>
                 </div>
               </div>
            </div>                    
         </div>
      </form>
   </div>
</div>


@endsection