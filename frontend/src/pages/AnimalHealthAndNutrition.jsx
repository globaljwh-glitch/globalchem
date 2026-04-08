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
           <div className="col-md-12 order-md-0 order-1">
              <div className="">    
                  <p>The animal feed and nutrition market is expanding rapidly, driven by the growing global population and increasing concerns about the safety and quality of the world’s food supply. As demand for high-quality animal products rises, so does the need for essential micronutrients that support optimal animal growth, health, and productivity.</p>
                  <p>At GCC, we offer a comprehensive portfolio of animal health and nutrition solutions. Our commitment to innovation and quality allows us to continuously expand our product offerings, introducing cutting-edge solutions in collaboration with our trusted suppliers.</p>
               </div>
           </div>
           <div className="imageThumbOuter mt-2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="imageThumb">
                        <img src="/images/animal-health-and-nutrician-02.jpg" alt="" className="imgResponsive" />
                     </div>
                  </div> 
                  <div className="col-md-4">
                     <div className="imageThumb">
                        <img src="/images/animal-health-and-nutrician.jpg" alt="" className="imgResponsive" />
                    </div>
                  </div>
                  <div className="col-md-4">
                     <div className="imageThumb">
                        <img src="/images/animal-health-and-nutrician-03.jpg" alt="" className="imgResponsive" />
                     </div>
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

export default AnimalHealthAndNutrition;
