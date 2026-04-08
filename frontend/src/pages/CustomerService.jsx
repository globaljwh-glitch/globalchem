import React, { useEffect, useState } from 'react';
import Contacts from '../components/Contacts'; // adjust the path if needed

import Layout from '../components/Layout';

const CustomerService = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/contact-us.jpg" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">CUSTOMER SERVICE</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-md-12 order-md-1 order-1">
                  <div>
                     <div className="floatLeftThumb imageThumb mt-2 mb-4"><img src="/images/customer-service-02.png" alt="" className="imgResponsive" /></div>
                     <p>GCC offers a professional and experienced team of Customer Service Agents ready to provide you with personal and proactive service. Our team is your central point of contact for all matters related to order entry, tracking, and status updates. We will service your order from placement through delivery in order to ensure our goal of “100% customer satisfaction.”  Our commitment goes beyond just processing orders—we focus on building lasting relationships with our customers by delivering exceptional service and personalized solutions.</p>
                     <p>We also offer a 24/7 comprehensive web-based customer service portal called Echempax, allowing customers to manage and oversee their accounts effortlessly. Here, customers can enter orders, check order status, review purchase history and account balances, plus much more. If you wish to register for this service, simply click the ECHEMPAX link below. Our user-friendly platform ensures quick access to critical information, empowering customers to stay informed and in control of their supply chain needs at all times.</p>
                     <p>Our dedicated customer service team works closely with logistics and supply chain experts to ensure on-time delivery and prompt issue resolution. Whether you have an urgent request, require special handling, or need real-time updates, we are committed to providing a seamless experience.</p>
                     <p>Your success is our priority, and we are here to support you every step of the way.</p>
                  </div>
               </div>              
            </div>
         </div>
      </section>
      <section className="contentContainer greyBg positionRelative">
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

export default CustomerService;
