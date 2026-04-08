import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const SportNutrition = () => {
 
  return (
    <Layout>
    <section className="innerBanner positionRelative">
      <div className="innerBannerImage">
        <div className="bannerOverlay"></div>
        <img src="/images/inner-banner/Sport-Nutrition.png" alt="" />
      </div>
      <div className="innerBannerContent">
        <div className="container">
           <h1 className="text-center">Sport Nutrition</h1>
        </div>
      </div>
    </section>
    <section className="contentContainer positionRelative">
      <div className="container">
        <div className="row">
           <div className="col-md-6 order-md-0 order-1">
              <div className="pe-5">    
                 <p>Sports nutrition plays a crucial role in enhancing physical performance and overall well-being. While athletes such as weightlifters, cyclists, runners, and swimmers have always prioritized a well-balanced diet to support their training, there is now a growing movement among fitness enthusiasts and health-conscious individuals who seek proper nutrition for strength, endurance, and recovery. This shift highlights the increasing demand for high-quality nutritional supplements that cater to both professional athletes and everyday consumers.
                  </p>
                  <p>GCC is at the forefront of this industry, providing an extensive range of premium sports nutrition ingredients. Our product selection includes whey and soy proteins, essential amino acids, caffeine, Caprylic Capric Triglyceride, Coenzyme Q10, Hyaluronic Acid, Natural Fish Oils, Tocotrienols, and a variety of essential vitamins and minerals. With a commitment to quality and innovation, we ensure that our ingredients meet the highest industry standards.
                  </p>
                 
               </div>
           </div>
           <div className="col-md-6 order-md-1 order-0">
              <div className="imageThumb">
                 <img src="/images/sport-nutrition-01.jpg" alt="" className="imgResponsive" />
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
                   <img src="/images/sport-nutrition-02.jpg" alt="" className="imgResponsive" />
                </div>
             </div>
             <div className="col-md-6">
                <div className="">    
                   <p>
                   By collaborating with leading manufacturers, GCC continues to develop ingredient solutions designed for muscle recovery, endurance, hydration, and overall health. Whether you're formulating protein powders, energy drinks, or dietary supplements, we offer the expertise and high-quality ingredients. 
                  </p><p>Contact our Technical Team today to discover how GCC can help enhance your sports nutrition formulations with innovative, science-backed solutions.
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

export default SportNutrition;
