import React, { useEffect, useState } from 'react';

import ImageGallery from '../../public/Gallery/ImageGallery'; // adjust the path if needed
import Layout from '../components/Layout';

const Manufacturing = () => {
 
  return (
    <Layout>
    <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/manufacturing.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">Manufacturing</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12 positionRelative">
                  <div className="aboutHomeContent">            
                     <p>In an evolving world where quality and efficiency are paramount, Global Chemicals Corp (GCC) plays a crucial role in delivering essential ingredients and specialty chemicals to industries worldwide. We empower businesses with reliable, high-performance raw materials that enhance product development and operational success. We ensure that companies receive only the best, sourced from trusted global suppliers.</p>
                     <h4 className="textGreen pt-3">What Sets Us Apart</h4>
                     <p>With decades of expertise and a commitment to continuous improvement, we have established a reputation for delivering top-tier manufacturing solutions.</p>
                     <ul>
                        <li><b>Cutting-Edge Facilities</b> – Equipped with the latest technology to produce high-quality ingredients and chemicals with precision and consistency.</li>
                        <li><b>Streamlined Production</b> – Efficient manufacturing processes that maximize output while minimizing waste and resource consumption.</li>
                        <li><b>Stringent Quality Control</b> – Rigorous testing and inspections at every stage of production to ensure safety, purity, and compliance.</li>
                        <li><b>Regulatory Compliance </b> – Adherence to global industry standards, including BRC, FSSC2000, Kosher, and Halal certifications.</li>
                        <li><b>Sustainable Manufacturing</b> – Environmentally responsible operations that reduce carbon footprint and promote eco-friendly production methods.</li>
                        <li><b>Innovation in Formulation</b> – Continuous research and development to enhance product effectiveness and meet evolving industry demands.</li>
                        <li><b>Expert Workforce</b> – A team of skilled professionals dedicated to maintaining excellence in manufacturing and product development.</li>
                     </ul>
                     <p>At GCC, manufacturing is more than a process—it’s our commitment to delivering excellence. With a focus on quality, innovation, and sustainability, we continue to set new benchmarks in chemical manufacturing, providing businesses worldwide with reliable, high-performance solutions.</p>
                  </div>
               </div>
            </div>
            <ImageGallery />
         </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;
