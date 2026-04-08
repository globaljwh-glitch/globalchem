import React, { useEffect, useState } from 'react';
import Contacts from '../components/Contacts'; // adjust the path if needed

import Layout from '../components/Layout';

const AnalyticalLab = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/lab-banner.jpg" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">ANALYTICAL LAB</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-md-12 order-md-1 order-1">
                  <div>
                     <div className="floatRightThumb imageThumb mt-2 mb-4"><img src="/images/analytical-lab.png" alt="" className="imgResponsive" /></div>
                     <p>At GCC, our advanced In-House Analytical Lab conducts full and partial testing on all materials entering and leaving our facility. Our rigorous testing protocols include both in-house and customer-developed methods, as well as compendial methods outlined by USP, NF, and FCC monographs.</p>
                     <p>Equipped with advanced technology, our lab performs a wide range of analyses, including:</p>
                     <ul>
                        <li>Identification Testing (Including FTIR)</li>
                        <li>Color Analysis (Orbeco Hellige Nesslerizer System)</li>
                        <li>Wet Chemistry Techniques</li>
                        <li>Potentiometric Titrations</li>
                        <li>Solubility Studies</li>
                        <li>pH &amp; Temperature Analysis (Microprocessor-based)</li>
                        <li>Moisture Analysis</li>
                        <li>Oxidation-Reduction Potential Measurement</li>
                        <li>Refractive Index</li>
                        <li>Monograph-Specific Tests</li>
                        <li>Microscopic Examination &amp; Analysis</li>
                     </ul>
                     <p>Every material leaving our facility undergoes visual inspection and FTIR identification, along with any other required tests. For testing beyond our lab’s scope, we utilize trusted third-party laboratories to ensure the highest quality and compliance standards.</p>
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

export default AnalyticalLab;
