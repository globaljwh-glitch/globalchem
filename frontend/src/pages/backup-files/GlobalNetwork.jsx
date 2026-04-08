import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';

const GlobalNetwork = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/partner.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">GLOBAL NETWORK</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row"> 
               <div className="col-md-12">
                  <div>    
                     <p>At GCC, we have established a strong global presence by partnering with trusted suppliers, service providers, and customers worldwide. We prioritize ensuring product availability in your region with efficient and timely deliveries. For urgent orders, we provide expedited shipping options, including FedEx, UPS Overnight, and Airfreight, to meet time-sensitive demands without delays. Every facility within our network undergoes stringent quality and safety audits by independent organizations, ensuring compliance with the same high standards upheld by our U.S. headquarters.</p>
                     <p>We work closely with businesses to analyze and forecast their essential raw material needs, allowing us to maintain strategic inventory levels at local warehouses for smooth and timely replenishment. By continually investing in advanced infrastructure, skilled personnel, and warehouse management, we’ve positioned ourselves as the preferred partner for reliable supply chain solutions.</p>
                     <p><strong>"With GCC, experience seamless logistics, dependable supply, and complete peace of mind."</strong></p>
                     <div class="pt-4"><img src="/images/map-image-gcc.jpg" alt="" class="imgResponsive" /></div>
                  </div>
               </div>              
            </div>
         </div>
      </section>

    </Layout>
  );
};

export default GlobalNetwork;
