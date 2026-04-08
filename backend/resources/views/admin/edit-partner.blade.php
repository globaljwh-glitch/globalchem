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

        .logo-preview {
            max-width: 150px;
            max-height: 150px;
            margin-top: 5px;
        }
    </style>

    <div id="content" class="main-content">
        <div class="container mt-4">

            {{-- Page Header --}}
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="mb-0">Edit Partner</h3>
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

            {{-- Edit Partner Form --}}
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Update Partner</h5>
                    <button type="submit" class="btn btn-primary px-4 py-2 font-weight-bold" form="editpartnerForm">
                        <i class="fas fa-save mr-1"></i> Update
                    </button>
                </div>

                <form id="editpartnerForm" method="POST" action="{{ route('admin.update_partner', encrypt($partner->id)) }}"
                    enctype="multipart/form-data">
                    @csrf
                  

                    <div class="card-body">
                        <div class="form-row">

                            <div class="form-group col-md-6 pr-4">
                                <label>Partner Name <span class="text-danger">*</span></label>
                                <input type="text" name="partner_name" class="form-control" placeholder="Enter partner name"
                                    value="{{ old('partner_name', $partner->name) }}">
                                @error('partner_name')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="form-group col-md-6">
                                <label>Website <span class="text-danger">*</span></label>
                                <input type="text" name="website" class="form-control" placeholder="Enter website link"
                                    value="{{ old('website', $partner->website) }}">
                                @error('website')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="form-group col-md-6 pr-4">
                                <label>Logo</label>
                                <input type="file" name="logo" class="form-control">
                                @error('logo')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror

                                @if($partner->logo)
                                    <div class="mt-2">
                                        <label>Current Logo:</label><br>
                                        <img src="{{ asset($partner->logo) }}" alt="Logo" class="logo-preview img-thumbnail">
                                    </div>
                                @endif
                            </div>

                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
@endsection