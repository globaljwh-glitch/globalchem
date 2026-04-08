@extends('layouts.admin-app')

@section('content')
    <!--  BEGIN CONTENT PART  -->
    <div id="content" class="main-content">
        <div class="container">
            <div class="page-header">
                <div class="page-title">
                    <h3>Resume for: {{ $job->career->title ?? 'N/A' }}</h3>
                    <a href="{{ url()->previous() }}" class="btn btn-secondary mt-2">Back</a>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox widget box box-shadow">
                        <div class="widget-header">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Candidate Resume Details</h4>
                                </div>
                            </div>
                        </div>

                        <div class="widget-content widget-content-area">
                            <div class="resume-content p-3">
                                {!! $job->job_resume !!}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection