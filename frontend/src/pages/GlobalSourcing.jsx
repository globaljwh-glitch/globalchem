import React, { useEffect, useState } from 'react';
import Contacts from '../components/Contacts'; // adjust the path if needed

import Layout from '../components/Layout';

const GlobalSourcing = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/global-sourcing.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">Global Sourcing</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-md-12 order-md-1 order-1">
                  <div>
                     <div className="floatRightThumb imageThumb mt-2 mb-4"><img src="/images/glpbal-sourcing.jpg" alt="" className="imgResponsive" /></div>
                     <p>GCC has built strong relationships with the world’s leading producers of natural ingredients and chemicals. With decades of industry experience, we have established a reputation for reliability, quality, and exceptional service.</p>
                     <p>Our customers gain access to an extensive global supply network, allowing them to enhance both new and existing product lines. We offer high-quality, cost-effective raw material solutions, whether you require a specific manufacturer or a qualified equivalent that meets specifications. GCC specializes in locating and qualifying approved manufacturers or suitable alternatives to meet your needs.</p>
                     <p>Need help sourcing rare or hard-to-find ingredients? Our global network and industry expertise ensure quick responses and proper documentation for your batch sheets or research requirements. As a cGMP and ISO 9001-certified supplier, we prioritize transparency and full product traceability from origin to delivery. We work closely with trusted partners worldwide to ensure regulatory compliance and maintain the highest quality standards.</p>
                     <p>GCC’s Global Sourcing Team is a valuable asset for both single-item and large-scale multi-item requirements. Free up your resources—let our experienced team efficiently handle your sourcing and procurement needs. With our proactive approach and deep industry knowledge, we help businesses stay ahead of market demands and supply chain challenges. From lab to production, we streamline the process so you can focus on innovation and growth.</p>
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

export default GlobalSourcing;
