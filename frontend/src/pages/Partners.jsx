import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; 
import Partner from '../components/Partners'; 
import Layout from '../components/Layout';

const Partners = () => {
 
  return (
    <Layout>
       <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/partner.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">OUR MANUFACTURING PARTNERS</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer">
         <div className="container">
            <div className="row">
               <div className="col-md-12 order-md-1 order-1">
                  <div className="text-center">    
                     <p>Global Chemicals Corp (GCC) collaborates with leading international producers of natural ingredients and specialty chemicals. Through our extensive network, we deliver cutting-edge technology, products, innovative solutions, and industry expertise. We ensure access to the latest advancements in chemical and natural ingredient solutions. Our strong partnerships allow us to provide premium-quality materials tailored to diverse industry needs.</p>
                     <p>To explore more about our manufacturing partners and the range of products we offer, please click on the links below.</p>
                     <a href="/quote-request" className="customBtn01">REQUEST A QUOTE</a>
                  </div>
               </div>              
            </div>
         </div>
      </section>
      <section className="contentContainer greyBg">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <h1>Partner with GCC</h1>
                  <p>With decades of expertise and a commitment to continuous improvement, we have established a reputation for delivering top-tier manufacturing solutions.</p>
                  <ul>
                     <li>Forge a strong, long-term partnership that fosters mutual growth and profitability.</li>
                     <li>Utilize GCC’s established business framework to enhance market reach and launch innovative products.</li>
                     <li>Gain seamless access to GCC’s well-integrated North American sales and distribution network.</li>
                     <li>Elevate your brand visibility through collaborative marketing with the trusted GCC Brand.</li>
                     <li>Work with a fully compliant organization—ISO 9001 certified, FDA registered, and cGMP certified—ensuring superior quality standards.</li>
                     <li>Connect with 32+ industries through GCC’s extensive global customer base and distribution channels.</li>
                     <li>Access valuable market intelligence, industry insights, and strategic feedback to drive business success.</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
<Partner/>
    </Layout>
  );
};

export default Partners;
