@extends('layouts.admin-app')

@section('content')
    <style>
        .multiline-box {
            background: #fdfdfd;
            border: 1px solid #ced4da;
            padding: 10px;
            border-radius: 0.25rem;
            font-family: 'Courier New', Courier, monospace;
            min-height: 120px;
            resize: vertical;
        }

        .multiline-box:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
        }
    </style>
    <div id="content" class="main-content">
        <div class="container mt-4">

            {{-- Page Header --}}
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="mb-0">Manage Partners</h3>
            </div>

            {{-- Alerts --}}
            @if($errors->any())
                <div class="alert alert-danger">
                    <strong>Error:</strong> Please check the form for issues.
                </div>
            @endif

            @if(session('error'))
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{ session('error') }}
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                </div>
            @endif

            @if(session('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {!! session('success') !!}
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                </div>
            @endif

            {{-- Add Product Form --}}
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Add Partner</h5>
                    <button type="submit" class="btn btn-success px-4 py-2 font-weight-bold" form="partnerForm">
                        <i class="fas fa-save mr-1"></i> Save
                    </button>
                </div>
                <form id="partnerForm" method="POST" action="{{ route('admin.addpartner_post') }}" enctype="multipart/form-data">
                    @csrf
                    <div class="card-body">
                        <div class="form-row">

                            <div class="form-group col-md-6 pr-4">
                                <label>Partner Name <span class="text-danger">*</span></label>
                                <input type="text" name="partner_name" class="form-control"
                                    placeholder="Enter partner Name" value="{{ old('partner_name') }}">
                                @error('partner_name')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="form-group col-md-6">
                                <label>Website <span class="text-danger">*</span></label>
                                <input type="text" name="website" class="form-control" placeholder="Enter website link"
                                    value="{{ old('website') }}">
                                @error('website')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="form-group col-md-6 pr-4">
                                <label>Logo <span class="text-danger">*</span></label>
                                <input type="file" name="logo" class="form-control" 
                                    value="{{ old('logo') }}">
                                @error('logo')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>




                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

@endsection