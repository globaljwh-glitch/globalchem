import React, { useEffect, useState } from 'react';
import Contacts from '../components/Contacts'; // adjust the path if needed

import Layout from '../components/Layout';

const RegulatoryAffairs = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/regulatory-affairs.jpg" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">REGULATORY AFFAIRS</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-md-12 order-md-1 order-1">
                  <div>
                     <div className="floatRightThumb imageThumb mt-2 mb-4"><img src="/images/regulatory-affairs-02.png" alt="" className="imgResponsive" /></div>
                     <p>At GCC, we prioritize regulatory compliance to ensure the highest standards of quality, safety, and industry adherence. As a U.S. FDA-registered company, we operate in full compliance with the Food Safety Modernization Act (FSMA) and the FDA’s stringent regulatory requirements. </p>

                     <p>We have established a comprehensive regulatory framework by implementing Standard Operating Procedures (SOPs) in alignment with BRC (British Retail Consortium) standards. These SOPs serve as a risk-based and preventive control system under FSMA guidelines, ensuring that our management and employees adhere to structured, compliance-driven protocols. This approach not only enhances regulatory adherence but also reassures customers who rely on us for safe and compliant product sourcing. </p>

                     <p>We encourage supplier and customer audits to review our SOP table of contents, providing transparency into the preventive control measures and quality assurance systems we have in place. Our regulatory team ensures that FSMA, BRC, and FSSC 22000 compliance is continuously maintained, with a focus on continuous process improvement and industry best practices. Through this structured approach, GCC has implemented a robust documentation system to track compliance-related activities, ensuring that we meet customer expectations.</p>
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

export default RegulatoryAffairs;
