@extends('layouts.admin-app')

@section('content')
    <!-- BEGIN CONTENT PART -->
    <div id="content" class="main-content">
        <div class="container">
            <div class="page-header">
                <div class="page-title">
                    <h3>Products</h3>
                </div>

            </div>

            {{-- Import Section --}}
            <!-- <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Import Products</h5>
                    <a href="{{ route('admin.download-template') }}" class="btn btn-outline-info"
                        title="Download Excel Format">
                        <i class="fas fa-file-excel fa-lg"></i>
                    </a>
                </div>
                <form method="POST" action="{{ route('admin.import_products') }}" enctype="multipart/form-data">
                    @csrf
                    <div class="card-body">
                        <div class="form-row align-items-center">
                            <div class="form-group col-md-6 mb-0">
                                <input type="file" name="file" class="form-control">
                                @error('file')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="form-group col-md-6 mb-0 text-right">
                                <button type="submit" class="btn btn-primary px-4 py-2 font-weight-bold">
                                    <i class="fas fa-upload mr-1"></i> Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div> -->
            <br>
            <div class="row">

                <div class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox widget box box-shadow">
                        <div class="widget-header">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Product Listing</h4>
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
                            <form method="GET" action="{{ route('admin.all-products') }}" class="mb-3">
                                <div class="form-row">
                                    <div class="col-md-4">
                                        <input type="text" name="search" class="form-control"
                                            placeholder="Search products..." value="{{ request()->get('search') }}">
                                    </div>
                                    <div class="col-md-2">
                                        <button type="submit" class="btn btn-primary">Search</button>
                                    </div>
                                </div>
                            </form>
                             <div class="table-responsive">
                            <table class="table table-bordered table-hover table-condensed mb-4">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Chemical Name</th>
                                        <th>Product Code</th>
                                        <th>Brand Name</th>
                                        <th>CAS Number</th>
                                        <th>Date</th>
                                        <th class="align-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($products as $index => $product)

                                        <tr>

                                            <td>{{  $index + 1  }}</td>

                                            <td>{{ ucfirst($product->chemical_name) }}</td>
                                            <td>{{ $product->product_code }}</td>
                                            <td>{{ $product->brand_name }}</td>
                                            <td>{{ $product->cas_number }}</td>
                                            <td>{{ \Carbon\Carbon::parse($product->created_at)->format('Y-m-d') }}</td>
                                            <td class="text-center">
                                                <ul class="table-controls">
                                                    <li>
                                                        <a href="{{ route('admin.edit-product', encrypt($product->id)) }}"
                                                            data-toggle="tooltip" data-placement="top" title="Edit">
                                                            <i class="fas fa-edit text-primary fs-20"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <form
                                                            action="{{ route('admin.delete-product', encrypt($product->id)) }}"
                                                            method="POST" style="display:inline;">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="btn btn-link p-0 m-0"
                                                                data-toggle="tooltip" data-placement="top" title="Delete"
                                                                onclick="return confirm('Are you sure you want to delete this product?')">
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

                        {{ $products->links('vendor.pagination.bootstrap-4') }}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection