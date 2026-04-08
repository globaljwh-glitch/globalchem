@extends('layouts.admin-app')

@section('content')
    <!-- BEGIN CONTENT PART -->
    <div id="content" class="main-content">
        <div class="container">
            <div class="page-header">
                <div class="page-title">
                    <h3>Partners</h3>
                </div>

            </div>

            
            <br>
            <div class="row">

                <div class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox widget box box-shadow">
                        <div class="widget-header">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Partner Listing</h4>
                                </div>
                            </div>
                        </div>

                        @if(session('error'))
                            <div class="alert alert-danger alert-dismissible">
                                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                <strong>Error:</strong> {{ session('error') }}
                            </div>
                        @endif

                        @if(session('success'))
                            <div class="alert alert-success alert-dismissible">
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
                                        <th>Logo</th>
                                        <th>Partner Name</th>
                                        <th>Website</th>
                                        
                                        <th class="align-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($partners as $index => $partner)

                                        <tr>

                                            <td>{{  $index + 1  }}</td>

<td>
    <img src="{{ asset($partner->logo) }}" alt="Partner Logo" style="width: 100px; height: 80px; object-fit: contain; border: 1px solid #ccc; padding: 2px;">
</td>

                                            <td>{{ $partner->name }}</td>
                                             <td>{{ $partner->website }}</td>
                                           
                                           
                                            <td class="text-center">
                                                <ul class="table-controls">
                                                    <li>
                                                        <a href="{{ route('admin.edit_partner', encrypt($partner->id)) }}"
                                                            data-toggle="tooltip" data-placement="top" title="Edit">
                                                            <i class="fas fa-edit text-primary fs-20"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <form
                                                            action="{{ route('admin.delete_partner', encrypt($partner->id)) }}"
                                                            method="POST" style="display:inline;">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="btn btn-link p-0 m-0"
                                                                data-toggle="tooltip" data-placement="top" title="Delete"
                                                                onclick="return confirm('Are you sure you want to delete this Partner?')">
                                                                <i class="flaticon-delete text-danger fs-20"></i>
                                                            </button>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>

                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                        {{-- Pagination --}}
                        <div class="d-flex justify-content-end">

                   

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection