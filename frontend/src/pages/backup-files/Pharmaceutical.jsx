import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const Pharmaceutical = () => {
 
  return (
    <Layout>
    <section className="innerBanner positionRelative">
      <div className="innerBannerImage">
        <div className="bannerOverlay"></div>
        <img src="/images/inner-banner/Pharmaceutical.png" alt="" />
      </div>
      <div className="innerBannerContent">
        <div className="container">
           <h1 className="text-center">Pharmaceutical</h1>
        </div>
      </div>
    </section>
    <section className="contentContainer positionRelative">
      <div className="container">
        <div className="row">
           <div className="col-md-6 order-md-0 order-1">
              <div className="pe-5">    
                 <p>
                 The healthcare industry is evolving rapidly, with constant advancements in medicine and pharmaceuticals. From the development of new drug formulations to the approval of breakthrough treatments, the demand for innovative and effective solutions continues to rise. As regulatory bodies introduce new guidelines and standards, pharmaceutical businesses must stay ahead by sourcing high-quality raw materials.
                 </p>
                 <p>All of our products and suppliers are qualified to meet current industry standards and are tested under our GCC’s in-house Quality Management System.
                  </p>
               </div>
           </div>
           <div className="col-md-6 order-md-1 order-0">
              <div className="imageThumb">
                 <img src="/images/transparent-plastic-bottles-filled-with-yellow-substance.jpg" alt="" className="imgResponsive" />
              </div>
           </div>               
        </div>
      </div>
    </section>
    <section className="contentContainer greyBg positionRelative">
       <div className="container">
          <div className="row">
             <div className="col-md-6">
                <div className="imageThumb me-5">
                   <img src="/images/worker-filling-container-with-cream-cosmetic.jpg" alt="" className="imgResponsive" />
                </div>
             </div>
             <div className="col-md-6">
                <div className="">    
                   <p>GCC has long been a trusted supplier of pharmaceutical excipients and raw materials, playing a key role in supporting drug formulation and production. Excipients are essential in the manufacturing process, helping to improve powder flowability, enhance stability, and prevent sticking. Our product portfolio includes a wide range of nutritional supplements, minerals, Vitamin C, B-complex vitamins, amino acids, and other essential pharmaceutical-grade ingredients. At GCC, our Quality Management System (QMS) ensures that all materials adhere to strict specifications.
                  </p><a href="#" className="customBtn01">Contact Team</a>
                </div>
             </div>                  
          </div>
       </div>
    </section>
    <ProductList />
    </Layout>
  );
};

export default Pharmaceutical;
