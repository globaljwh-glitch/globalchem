import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Partnerslider from '../components/Partnerslider';


function Layout({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const excludedPaths = ['/news', '/partners'];
  const showPartnerSlider = !excludedPaths.includes(location.pathname);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/product-search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <div className="topBar greyBg d-flex">
        <div className="container">
          <div className="d-flex align-items-center justify-content-end">
            <ul className="topInfoList mb-0">
              <li><a href="/careers">Careers</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/samples">Samples</a></li>
              <li><a href="/quote-request">Inquries</a></li>
            </ul>

            <div className="d-flex">
              <div className="container">
                <div className="d-flex align-items-center justify-content-end">
                  {/* ... other links */}
                  <form onSubmit={handleSearch} className="searchSite d-flex">
                    <input
                      type="text"
                      className="search-field"
                      placeholder="Search products..."
                      autoComplete="off"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" id="searchsubmit" className="search-submit">
                      <i className="fa-solid fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Header */}

      <header id="header">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container">
            <a className="navbar-brand" href="/"><img src="/images/logo.png" alt="" className="imgResponsive" /></a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <span className="icon"></span>
                  <a className="nav-link" href="/about">About <i className="fa-solid fa-chevron-down"></i></a>
                  <ul className="subMenu">
                    <li><a href="/our-team">Our team</a></li>
                    <li><a href="/global-network">Global Network</a></li>
                    <li><a href="/certifications">Organizations & Certifications</a></li>
                    <li><a href="/code-of-conduct">Code of conduct</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="/manufacturing">Manufacturing</a></li>
                <li className="nav-item dropdown">
                  <span className="icon"></span>
                  <a className="nav-link" href="/industries">Industries <i className="fa-solid fa-chevron-down"></i></a>
                  <ul className="subMenu">
                    <li><a href="/industries/personal-care-cosmetic">Personal Care Cosmetic</a></li>
                    <li><a href="/industries/food-and-beverages">Food and Beverage</a></li>
                    <li><a href="/industries/pharmaceutical">Pharmaceutical</a></li>
                    <li><a href="/industries/flavor-and-fragrance">Flavor and Fragrance</a></li>
                    <li><a href="/industries/animal-health-nutrition">Animal Health & Nutrition</a></li>
                    <li><a href="/industries/sport-nutrition">Sport Nutrition</a></li>
                    <li><a href="/industries/industrial">Industrial</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="/products">Products</a></li>
                <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                <li className="nav-item dropdown">
                  <span className="icon"></span>
                  <a className="nav-link" href="/quality-care">Quality <i className="fa-solid fa-chevron-down"></i></a>
                  <ul className="subMenu">
                    <li><a href="/quality-care/regulatory-affairs">Regulatory Affairs</a></li>
                    <li><a href="/quality-care/quality-control">Quality Control</a></li>
                    <li><a href="/quality-care/technical-support-documentation/">Technical Support & Documentation</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="/partners">Partners</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      {children}
      {showPartnerSlider && <Partnerslider />}

      {/* Footer */}
      <footer className="blueBg">
        <div>
          <div className="container">
            <div className="footerMenuBlock">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <a className="footerLogo" href="/">
                    <img src="/images/footer-logo.png" alt="Global Chemicals Corp" className="imgResponsive" />
                  </a>
                  <p>
                    Global Leader in the Contract Manufacturing and Supply of Highest Quality Ingredients and Raw Materials
                    to the Food, Cosmetic, Nutritional and Pharmaceutical Markets and Associated Industries. GCC is
                    FDA-Registered, FSSC22000, Kosher & Halal Certified.
                  </p>
                </div>
                <div className="col-lg-2 col-md-4">
                  <ul className="footerMenu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/manufacturing">Manufacturing</a></li>
                    <li><a href="/industries">Industries</a></li>
                    <li><a href="/Code-of-conduc">Quality and Safety</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-4">
                  <ul className="footerMenu">
                    <li><a href="/products">Products</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/our-team">Our team</a></li>
                    <li><a href="/partners">Partners</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-4">
                  <ul className="footerMenu">
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/quote-request">Inquiries</a></li>
                    <li><a href="/samples">Samples</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyRight greyBg">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  © 2025 Global Chemicals Corporation ALL RIGHTS RESERVED
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
