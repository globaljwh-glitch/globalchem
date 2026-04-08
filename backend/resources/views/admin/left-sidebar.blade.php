<div class="sidebar-wrapper sidebar-theme">
    <div id="dismiss" class="d-lg-none"><i class="flaticon-cancel-12"></i></div>
    <nav id="sidebar">

        <ul class="navbar-nav theme-brand flex-row  d-none d-lg-flex">
            <li class="nav-item d-flex">
                <a href="index.html" class="navbar-brand">
                    <img src="{{asset('img/gcc-logo-white.png')}}" class="img-fluid" alt="logo">
                </a>

            </li>
            <!-- <li class="nav-item theme-text">
                <a href="index.html" class="nav-link"> Equation </a>
            </li> -->
        </ul>


        <ul class="list-unstyled menu-categories" id="accordionExample">
            <li class="menu">
                <a href="{{route('adminDashboard')}}" aria-expanded="true" class="dropdown-toggle">
                    <div class="">
                        <i class="flaticon-computer-6 ml-3"></i>
                        <span>Dashboard</span>
                    </div>

                    <div>
                        <span class="badge badge-pill badge-secondary mr-2">5</span>
                    </div>
                </a>

            </li>
            <li class="menu">
                <a href="#products" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <div class="">
                        <i class="flaticon-sun"></i>
                        <span>Products </span>
                    </div>
                    <div>
                        <i class="flaticon-right-arrow"></i>
                    </div>
                </a>
                <ul class="collapse submenu list-unstyled" id="products" data-parent="#accordionExample">
                    <li>
                        <a href="{{route('admin.add_product')}}"> Add Product</a>
                    </li>
                    <li>
                        <a href="{{route('admin.all-products') }}"> All Products </a>
                    </li>

                    <!-- <li>
                        <a href="#"> Inactive </a>
                    </li> -->

                </ul>
            </li>
            <li class="menu">
                <a href="#ui-features" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <div class="">
                        <i class="flaticon-elements"></i>
                        <span>Careers</span>
                    </div>
                    <div>
                        <i class="flaticon-right-arrow"></i>
                    </div>
                </a>
                <ul class="collapse submenu list-unstyled" id="ui-features" data-parent="#accordionExample">
                    <li>
                        <a href="{{ route('admin.add_career') }}"> Add Careers</a>
                    </li>
                    <li>
                        <a href="{{ route('admin.all_jobs') }}"> All Careers</a>
                    </li>
                    <li>
                        <a href="{{ route('admin.job_requests') }}"> Career Requests </a>
                    </li>
                    <!--<li>
                        <a href="#"> Inactive Careers </a>
                    </li> -->

                </ul>
            </li>
            <li class="menu">
                <a href="#ui-news" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <div class="">
                        <i class="flaticon-computer-5"></i>
                        <span>News</span>
                    </div>
                    <div>
                        <i class="flaticon-right-arrow"></i>
                    </div>
                </a>
                <ul class="collapse submenu list-unstyled" id="ui-news" data-parent="#accordionExample">
                    <li>
                        <a href="{{route('admin.add_news')}}"> Add News</a>
                    </li>
                    <li>
                        <a href="{{route('admin.ufc_news')}}"> All News</a>
                    </li>
                    <!-- <li>
                        <a href="#"> Active News </a>
                    </li>
                    <li>
                        <a href="#"> Inactive News </a>
                    </li> -->

                </ul>
            </li>

            <li class="menu">
                <a href="#partners" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <div class="">
                        <i class="flaticon-sun"></i>
                        <span>Partners </span>
                    </div>
                    <div>
                        <i class="flaticon-right-arrow"></i>
                    </div>
                </a>
                <ul class="collapse submenu list-unstyled" id="partners" data-parent="#accordionExample">
                    <li>
                        <a href="{{route('admin.add_partner')}}"> Add Partner</a>
                    </li>
                    <li>
                        <a href="{{route('admin.all_partners') }}"> All Partners </a>
                    </li>

                    <!-- <li>
                        <a href="#"> Inactive </a>
                    </li> -->

                </ul>
            </li>

            <li class="menu">
                <a href="#contact-requests" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <div><i class="flaticon-mail-10"></i><span>Contact Requests</span></div>
                    <div><i class="flaticon-right-arrow"></i></div>
                </a>
                <ul class="collapse submenu list-unstyled" id="contact-requests" data-parent="#accordionExample">
                    <li><a href="{{route('admin.all_contactrequests')}}">All Requests</a></li>
                </ul>
            </li>

            <li class="menu">
                <a href="#events" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <div><i class="flaticon-user-circle"></i><span>Events</span></div>
                    <div><i class="flaticon-right-arrow"></i></div>
                </a>
                <ul class="collapse submenu list-unstyled" id="events" data-parent="#accordionExample">
                    <li><a href="{{ route('admin.all_events') }}">All Events</a></li>
                    <li><a href="{{route('admin.add_event') }}">Add Event</a></li>
                </ul>
            </li>

            <li class="menu">
                <a href="#general-settings" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <div><i class="flaticon-settings-1"></i><span>General Settings</span></div>
                    <div><i class="flaticon-right-arrow"></i></div>
                </a>
                <ul class="collapse submenu list-unstyled" id="general-settings" data-parent="#accordionExample">
                    <li><a href="{{route('admin.general_settings')}}">Settings</a></li>
                    <li><a href="{{route('admin.create_settings')}}">Add New</a></li>
                </ul>
            </li>


        </ul>
    </nav>
</div>