import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const Industrial = () => {
 
  return (
    <Layout>
    <section className="innerBanner positionRelative">
      <div className="innerBannerImage">
        <div className="bannerOverlay"></div>
        <img src="/images/inner-banner/banner5-1.png" alt="" />
      </div>
      <div className="innerBannerContent">
        <div className="container">
           <h1 className="text-center">Industrial</h1>
        </div>
      </div>
    </section>
    <section className="contentContainer">
      <div className="container">
        <div className="row">
            <div className="col-md-12 order-md-0 order-1">
              <div className="">    
                <p>GCC has long been a trusted distributor of USP, NF, and food-grade additives, but as industry demands have evolved, so has our product offering. We now provide high-quality industrial and technical-grade chemicals in bulk, totes, or drums to meet the needs of various industries.</p>
                <p>Our extensive portfolio serves industries such as:</p>
                <ul className="listStyleType03Col">
                  <li>Adhesives</li>
                  <li>Automotive &amp; Transportation</li>
                  <li>Building &amp; Construction</li>
                  <li>Chemical Processing</li>
                  <li>Composites &amp; Plastics</li>
                  <li>Degreasers</li>
                  <li>Electronic</li>
                  <li>Energy</li>
                  <li>Marine</li>
                  <li>Metalworking</li>
                  <li>Mining</li>
                  <li>Nutraceutical</li>
                  <li>Oil Drilling</li>
                  <li>Paint &amp; Coatings</li>
                  <li>Paper</li>
                  <li>Photographic</li>
                  <li>Printing &amp; Ink</li>
                  <li>Resins</li>
                  <li>Soap Manufacturing</li>
                  <li>Sunscreen</li>
                  <li>Textile</li>
                  <li>Veterinary</li>
                  <li>Vitamin</li>
                  <li>Water Treatment</li>
                </ul>
                <p>In some cases, pricing fluctuations have eliminated the cost gap between USP and industrial-grade products.</p>
                <p>Let GCC be your trusted industrial partner. Reach out to our Sales Team today for a custom quote on your industrial chemical requirements.</p>
              </div>
          </div>              
        </div>
        <div className="imageThumbOuter mt-2">
            <div className="row">
               <div className="col-md-4">
                  <div className="imageThumb">
                     <img src="/images/industry-thumb-01.jpg" alt="" className="imgResponsive" />
                  </div>
               </div> 
               <div className="col-md-4">
                  <div className="imageThumb">
                     <img src="/images/industry-thumb-02.jpg" alt="" className="imgResponsive" />
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="imageThumb">
                     <img src="/images/industry-thumb-03.jpg" alt="" className="imgResponsive" />
                  </div>
               </div>               
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
               <ProductList />
            </div>
         </div>
      </div>
    </section>
    </Layout>
  );
};

export default Industrial;
