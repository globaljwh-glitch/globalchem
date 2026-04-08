import React, { useEffect, useState } from 'react';
import Contacts from '../components/Contacts'; // adjust the path if needed

import Layout from '../components/Layout';

const QualityControl = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/quality-control.jpg" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">QUALITY CONTROL</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-md-12 order-md-1 order-1">
                  <div>
                     <div className="floatLeftThumb imageThumb mt-2 mb-4">
                     <img src="/images/quality-control-02.png" alt="" className="imgResponsive" /></div>
                     <p>GCC’s QA and QC teams are committed to maintaining and enhancing product quality while minimizing errors. Through a structured approach, our QA/QC team fosters a work environment where management and employees continuously strive for excellence, ensuring that every product meets the highest safety and reliability standards. Our comprehensive training, well-defined quality benchmarks, and rigorous testing protocols ensure customer satisfaction.</p>

                     <p>A fundamental aspect of our Quality Control is the implementation of Standard Operating Procedures (SOPs), which serve as a foundation for maintaining consistency in operations and establishing corrective actions for any quality-related concerns. For full transparency, the table of contents of our SOPs is available to customers and suppliers upon request.</p>

                     <p>GCC collaborates with third-party accredited laboratories to conduct extensive product testing upon customer request. Our testing protocols encompass both in-house methods and official compendia standards outlined in USP/NF/FCC monographs. These third-party laboratories are equipped with advanced technology to perform a range of identification and quality tests, including FTIR analysis, color assessment using the Orbeco Hellige Nesslerizer system, wet chemistry techniques, potentiometric titrations, solubility testing, pH and temperature evaluations, kinematic viscosity measurements, moisture content analysis, oxidation-reduction potential assessments, refractive index determinations, microscopic analysis, and titration-based assays. All materials undergo a thorough visual inspection before leaving our facility. FTIR analysis is performed upon request,along with any additional required tests to verify product integrity and consistency. For specialized testing beyond the scope of our third-party laboratory services, we provide additional testing options, subject to customer approval for associated costs.</p>
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

export default QualityControl;
