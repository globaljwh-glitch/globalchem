import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const AnimalHealthAndNutrition = () => {
 
  return (
    <Layout>
    <section className="innerBanner positionRelative">
      <div className="innerBannerImage">
        <div className="bannerOverlay"></div>
        <img src="/images/inner-banner/Animal-Health-Nutrition.png" alt="" />
      </div>
      <div className="innerBannerContent">
        <div className="container">
           <h1 className="text-center">Animal Health & Nutrition</h1>
        </div>
      </div>
    </section>
    <section className="contentContainer positionRelative">
      <div className="container">
        <div className="row">
           <div className="col-md-6 order-md-0 order-1">
              <div className="pe-5">    
                 <p>The animal feed and nutrition market is expanding rapidly, driven by the growing global population and increasing concerns about the safety and quality of the world’s food supply. As demand for high-quality animal products rises, so does the need for essential micronutrients that support optimal animal growth, health, and productivity. 
                 </p>
                 
               </div>
           </div>
           <div className="col-md-6 order-md-1 order-0">
              <div className="imageThumb">
                 <img src="/images/Animal-Health-Nutrition-01.jpg" alt="" className="imgResponsive" />
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
                   <img src="/images/Animal-Health-Nutrition-02.jpg" alt="" className="imgResponsive" />
                </div>
             </div>
             <div className="col-md-6">
                <div className="">    
                   <p>At GCC, we offer a comprehensive portfolio of animal health and nutrition solutions. Our commitment to innovation and quality allows us to continuously expand our product offerings, introducing cutting-edge solutions in collaboration with our trusted suppliers.
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

export default AnimalHealthAndNutrition;
