import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const Partners = () => {
 
  return (
    <Layout>
       <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/partner.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">OUR MANUFACTURING PARTNERS</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer imgBgThree positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-md-6 order-md-0 order-0">
                  <div className="imageThumb me-5">
                     <img src="/images/partner-thumb.jpg" alt="" className="imgResponsive" />
                  </div>
               </div> 
               <div className="col-md-6 order-md-1 order-1">
                  <div>    
                     <p>Global Chemicals Corp (GCC) collaborates with leading international producers of natural ingredients and specialty chemicals. Through our extensive network, we deliver cutting-edge technology, products, innovative solutions, and industry expertise. We ensure access to the latest advancements in chemical and natural ingredient solutions. Our strong partnerships allow us to provide premium-quality materials tailored to diverse industry needs.</p>
                     <p>To explore more about our manufacturing partners and the range of products we offer, please click on the links below.</p>
                     <a href="#" className="customBtn01">Contact Team</a>
                  </div>
               </div>              
            </div>
         </div>
      </section>
      <section className="contentContainer imgBgTwo industriesServed positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <h1>Partner with GCC</h1>
                  <p>With decades of expertise and a commitment to continuous improvement, we have established a reputation for delivering top-tier manufacturing solutions.</p>
                  <ul>
                     <li>Forge a strong, long-term partnership that fosters mutual growth and profitability.</li>
                     <li>Utilize GCC’s established business framework to enhance market reach and launch innovative products.</li>
                     <li>Gain seamless access to GCC’s well-integrated North American sales and distribution network.</li>
                     <li>Elevate your brand visibility through collaborative marketing with the trusted GCC Brand.</li>
                     <li>Work with a fully compliant organization—ISO 9001 certified, FDA registered, and cGMP certified—ensuring superior quality standards.</li>
                     <li>Connect with 32+ industries through GCC’s extensive global customer base and distribution channels.</li>
                     <li>Access valuable market intelligence, industry insights, and strategic feedback to drive business success.</li>
                  </ul>
               </div>
               <div className="col-lg-6">
                  <div className="aboutThumbImage text-center"><img src="/images/about-home-image.jpg" alt="" className="borderRadius12 imgResponsive" /></div>
               </div>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 text-center">
                  <h6 className="smallHead">Our Partners</h6>
                  <h1 className="text-center">Our Partners</h1>
                  <p className="highlighted text-center paddingLR200">We represent leading global producers of chemicals, natural & synthetic ingredients, specialty & performance materials .</p>
               </div>
            </div>
            <div className="partnerList certifications">
               <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 flexCol">
                     <a href="#" className="shadowBox partnerListBlocks text-center">
                        <div className="logo-icon"><img src="/images/partners-logo/6-ACIDCHEM-USA-INC.-300x180.png" /></div>
                        <h5>ACIDCHEM [USA] INC.</h5>
                     </a>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 flexCol">
                     <a href="#" className="shadowBox partnerListBlocks text-center">
                        <div className="logo-icon"><img src="/images/partners-logo/R-5.jpeg" /></div>
                        <h5>Agilent Technologies</h5>
                     </a>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 flexCol">
                     <a href="#" className="shadowBox partnerListBlocks text-center">
                        <div className="logo-icon"><img src="/images/partners-logo/7-AJAY-NORTH-AMERICA-LLC.-300x180.png"/></div>
                        <h5>AJAY NORTH AMERICA LLC.</h5>
                     </a>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 flexCol">
                     <a href="#" className="shadowBox partnerListBlocks text-center">
                        <div className="logo-icon"><img src="/images/partners-logo/8-AJINOMOTO-NORTH-AMERICA-INC.-300x180.png"/></div>
                        <h5>AJINOMOTO NORTH AMERICA, INC.</h5>
                     </a>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 flexCol">
                     <a href="#" className="shadowBox partnerListBlocks text-center">
                        <div className="logo-icon"><img src="/images/partners-logo/9-ARCHER-DANIELS-MIDLAND-ADM-300x180.png"/></div>
                        <h5>ACIDCHEM [USA] INC.</h5>
                     </a>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 flexCol">
                     <a href="#" className="shadowBox partnerListBlocks text-center">
                        <div className="logo-icon"><img src="/images/partners-logo/10-ASHTA-CHEMICALS-INC.-300x180.png"/></div>
                        <h5>Agilent Technologies</h5>
                     </a>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 flexCol">
                     <a href="#" className="shadowBox partnerListBlocks text-center">
                        <div className="logo-icon"><img src="/images/partners-logo/aurorium.png" /></div>
                        <h5>AJAY NORTH AMERICA LLC.</h5>
                     </a>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 flexCol">
                     <a href="#" className="shadowBox partnerListBlocks text-center">
                        <div className="logo-icon"><img src="/images/partners-logo/11-AVANTOR-FORMERLY-MALLINCKRODT-300x180.png"/></div>
                        <h5>AJINOMOTO NORTH AMERICA, INC.</h5>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default Partners;
