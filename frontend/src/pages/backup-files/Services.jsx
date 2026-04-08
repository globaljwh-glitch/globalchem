import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const Services = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/partner.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">OUR SERVICES</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer imgBgOne  positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 positionRelative">           
                  <p>GCC collaborates with third-party facilities that have been physically pre-audited and hold BRC, FSSC22000, Kosher, and Halal certifications, alongside the processes, capabilities, and services developed to better serve our customers. We strive to maintain an environmentally friendly business model while designing as “green” a footprint as possible. As a full range “value-added services” provider,  we are confident we can be your supplier of choice based on our extensive product portfolio, Quality Care Group, proactive global sourcing programs, and extensive cross-industry experience. Please review some of our unique services outlined below and contact our Sales Team to discuss how GCC can partner with your company to improve your bottom line and increase your industry awareness.</p>
               </div>
            </div>
            <div className="servicesBlocksOuter">
               <div className="row">
                  <div className="col-lg-4 col-md-6 flexCol">
                     <a href="/global-sourcing" className="servicesBlockContent">
                        <div className="servicesThumb d-flex"><img src="/images/global-sourcing.jpg" className="imgResponsive" /></div>
                        <div className="servicesBlockContentBox">
                           <h4 className="textBlue">Global Sourcing</h4>
                           <p>Throughout our history, GCC has established enduring partnerships with the world's foremost producers of premium natural ingredients and chemicals. Our unwavering commitment to quality and innovation ensures that...</p>
                        </div>
                     </a>
                  </div>
                  <div className="col-lg-4 col-md-6 flexCol">
                     <a href="/analytical-lab" className="servicesBlockContent">
                        <div className="servicesThumb d-flex"><img src="/images/Analytical-Lab-300x208.png" className="imgResponsive" /></div>
                        <div className="servicesBlockContentBox">
                           <h4 className="textBlue">Analytical Lab</h4>
                           <p>At GCC, quality is our top priority. Our Quality Care Group employs a rigorous approach to ensure that every ingredient we offer meets the highest industry standards. One of the key tools we utilize is independent laboratory testing...</p>
                        </div>
                     </a>
                  </div>
                  <div className="col-lg-4 col-md-6 flexCol">
                     <a href="/customer-service" className="servicesBlockContent">
                        <div className="servicesThumb d-flex"><img src="/images/Customer-Service.png" className="imgResponsive" /></div>
                        <div className="servicesBlockContentBox">
                           <h4 className="textBlue">Customer Service</h4>
                           <p>Our team of highly trained Customer Service Agents is ready to provide you with personalized, proactive support to ensure your needs are met with efficiency and professionalism. In addition to our dedicated support team...</p>
                        </div>
                     </a>
                  </div>
                  <div className="col-lg-4 col-md-6 flexCol">
                     <a href="/quality-care/technical-support-documentation/" className="servicesBlockContent">
                        <div className="servicesThumb d-flex"><img src="/images/technical-support-documentation.png" className="imgResponsive" /></div>
                        <div className="servicesBlockContentBox">
                           <h4 className="textBlue">Technical Support & Documentation</h4>
                           <p>Our Technical Support Team consists of highly trained professionals dedicated to providing exceptional service and expertise. Each of our consultants brings hands-on experience and in-depth knowledge...</p> 
                        </div>
                     </a>
                  </div>
                  <div className="col-lg-4 col-md-6 flexCol">
                     <a href="/corporate-headquarters-facility" className="servicesBlockContent">
                        <div className="servicesThumb d-flex"><img src="/images/corporate-headquarters-facility.png" className="imgResponsive" /></div>
                        <div className="servicesBlockContentBox">
                           <h4 className="textBlue">Corporate Headquarters & Facility</h4>
                           <p>GCC’s corporate headquarters is proudly located in Piscataway, New Jersey, serving as the central hub for our operations and commitment to excellence. Our primary contract facility is a high-tech, 273,000 sq. ft. AIB-certified...</p>
                        </div>
                     </a>
                  </div>
                  <div className="col-lg-4 col-md-6 flexCol">
                     <a href="/quality-care/regulatory-affairs" className="servicesBlockContent">
                        <div className="servicesThumb d-flex">
                        <img src="/images/regulatory-affairs.png" className="imgResponsive" />
                        </div>
                        <div className="servicesBlockContentBox">
                           <h4 className="textBlue">Regulatory Affairs</h4>
                           <p>Our Regulatory Affairs department serves as the critical liaison between GCC and key regulatory agencies, including the FDA, Environmental Protection Agency (EPA), Federal Trade Commission (FTC), Occupational Safety & Health...</p>
                        </div>
                     </a>
                  </div> 
                  <div className="col-lg-4 col-md-6 flexCol">
                     <a href="/quality-care/quality-control" className="servicesBlockContent">
                        <div className="servicesThumb d-flex">
                           <img src="/images/quality-control.png" className="imgResponsive" />
                        </div>
                        <div className="servicesBlockContentBox">
                           <h4 className="textBlue">Quality Control</h4>
                           <p>GCC’s Quality Control Team is dedicated to upholding the highest standards of excellence across our products and processes. Through rigorous testing, continuous monitoring, and adherence to best-in-class industry practices...</p>
                        </div>
                    
                  </a>
                  </div>

               </div>
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default Services;
