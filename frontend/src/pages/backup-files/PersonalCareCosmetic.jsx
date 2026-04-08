import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const PersonalCareCosmetic = () => {
 
  return (
    <Layout>
    <section className="innerBanner positionRelative">
      <div className="innerBannerImage">
        <div className="bannerOverlay"></div>
        <img src="/images/inner-banner/cosmetic-personal-care-banner.png" alt="" />
      </div>
      <div className="innerBannerContent">
        <div className="container">
           <h1 className="text-center">COSMETIC &amp; PERSONAL CARE</h1>
        </div>
      </div>
    </section>
    <section className="contentContainer positionRelative">
      <div className="container">
        <div className="row">
           <div className="col-md-6 order-md-0 order-1">
              <div className="pe-5">    
                 <p>Despite economic fluctuations, consumer demand for advanced skincare and cosmetic solutions continues to grow, fueled by an aging population seeking the latest innovations. Scientific advancements from around the world are shaping the North American market, making once-exclusive technologies widely accessible through mass-market channels at competitive prices.</p>
                 <p>At GCC, we proudly serve clients in the anti-aging sector while also acting as a one-stop shop for high-quality additives used in hair care and skincare applications. The definition of personal care has expanded beyond traditional cosmetics to include essential hygiene products such as skin creams, cleansing pads, wet wipes, deodorants, eyeliners, shaving creams, lip gloss, lipstick, and lip balms.</p>
              </div>
           </div>
           <div className="col-md-6 order-md-1 order-0">
              <div className="imageThumb">
                 <img src="/images/zero-waste-beauty-products.jpg" alt="" className="imgResponsive" />
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
                   <img src="/images/cosmetic-personal-care-2.jpg" alt="" className="imgResponsive" />
                </div>
             </div>
             <div className="col-md-6">
                <div className="">    
                   <p className="">As a trusted leader in sourcing personal care ingredients, GCC provides a comprehensive range of both commodity and cutting-edge technologies from top global manufacturers. Our commitment to green and sustainable chemistry ensures responsible sourcing and environmentally friendly solutions. With a business model built on quality, service, and competitive pricing, we offer the ideal combination to meet the needs of product developers, chemists, and procurement specialists.</p>
                   <p>For any raw material inquiries, whether listed in our portfolio or not, please reach out to our Sales Team—we're here to assist you!</p>
                   <a href="#" className="customBtn01">Contact Team</a>
                </div>
             </div>                  
          </div>
       </div>
    </section>
    <ProductList />
    </Layout>
  );
};

export default PersonalCareCosmetic;
