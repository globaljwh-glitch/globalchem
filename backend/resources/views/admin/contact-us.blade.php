@extends('layouts.admin-app')

@section('content')
    <!--  BEGIN CONTENT PART  -->
    <div id="content" class="main-content">
        <div class="container">
            <div class="page-header">
                <div class="page-title">
                    <h3>Contact us</h3>

                </div>
            </div>

            <div class="row">


                <div class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox widget box box-shadow">
                        <div class="widget-header">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Contact us Listing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="widget-content widget-content-area">
                            <div class="table-responsive">
                                <table id="html5-extension" class="table table-bordered table-hover table-condensed mb-4">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Company Name</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Country</th>
                                            <th>Zip Code</th>
                                            <th>Application Use</th>
                                            <th>Interests</th>
                                            <th>Final Application</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th class="align-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($contactlist as $index => $contact)
                                            <tr>
                                                <td>{{ $index + 1 }}</td>
                                                <td>{{ ucfirst($contact->first_name) }} {{ ucfirst($contact->last_name) }}</td>
                                                <td>{{ $contact->email }}</td>
                                                <td>{{ $contact->phone }}</td>
                                                <td>{{ ucfirst($contact->company) }}</td>
                                                <td>{{ ucfirst($contact->address) }}</td>
                                                <td>{{ ucfirst($contact->city) }}</td>
                                                <td>{{ ucfirst($contact->state) }}</td>
                                                <td>{{ ucfirst($contact->country) }}</td>
                                                <td>{{ $contact->zipcode }}</td>
                                                <td>{{ $contact->application }}</td>
                                                <td>{{ $contact->interests }}</td>
                                                <td>{{ $contact->final_app }}</td>
                                                <td>{{ \Carbon\Carbon::parse($contact->created_at)->format('Y-m-d') }}</td>
                                                <td class="align-center">
                                                    @if($contact->status == 1)
                                                        <span class="badge badge-primary">Active</span>
                                                    @else
                                                        <span class="badge badge-info">In-Active</span>
                                                    @endif
                                                </td>
                                                <td class="text-center">
                                                    <ul class="table-controls">
                                                        <li>
                                                            @if($contact->status == 1)
                                                                <a href="{{ route('admin.contact_us_status' , $contact->id) }}"
                                                                    data-toggle="tooltip" data-placement="top"
                                                                    title="Mark as Inactive">
                                                                    <i class="flaticon-close-fill text-danger fs-20"></i>
                                                                </a>
                                                            @else
                                                                <a href="{{ route('admin.contact_us_status' , $contact->id) }}"
                                                                    data-toggle="tooltip" data-placement="top"
                                                                    title="Mark as Active">
                                                                    <i class="flaticon-close-fill text-info fs-20"></i>
                                                                </a>
                                                            @endif
                                                        </li>
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