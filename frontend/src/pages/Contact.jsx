import React, { useEffect, useState } from 'react';

import Contacts from '../components/Contacts'; // adjust the path if needed
import Layout from '../components/Layout';

const Contact = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/contact-us.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">Contact US</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer imgBgOne positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-lg-10 m-auto">
                  <div className="row">
                     <div className="col-lg-6 col-md-6 positionRelative order-md-0 order-1">
                        <div className="contactInfo mt-4">
                           <h3>Global Chemicals Corp. </h3>
                           <p>Please review our contact information shown below. GCC is committed to providing first class service and response no matter what your inquiry may be. Our entire team takes pride in our industry leading response time. Thank you!</p>
                           <div className="contactInfo mt-4">
                              <p><span className="icons"><i className="fa-solid fa-location-dot"></i></span><span className="detail">3 Skiles Ave, POB 6961, Piscataway, NJ 08854</span><span className="clearfix"></span></p>
                           </div>
                           <div className="socialInfo mt-4">
                              <h3 >Follow Us</h3>
                              <ul>
                                 <li><i className="fa-brands fa-linkedin"></i></li>
                                 <li><svg className="svg-inline--fa fa-square-x-twitter" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="square-x-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path></svg></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-6 positionRelative order-md-1 order-0">
                        <div className="contactImage imageThumb positionRelative">
                           <img src="images/about-home-image.jpg" alt="" className=" imgResponsive" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-lg-9 m-auto">
                  <h1 className="text-center">CONTACT US</h1>         
                  <p className="text-center paddingLR150">We are grateful for the opportunity to show you why Global Chemical Corporation is the superior choice for your business.</p>
               </div>
            </div>
            <Contacts />
         </div>
      </section>
    </Layout>
  );
};

export default Contact;
