import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const FlavorAndFragrance = () => {
 
  return (
    <Layout>
    <section className="innerBanner positionRelative">
      <div className="innerBannerImage">
        <div className="bannerOverlay"></div>
        <img src="/images/inner-banner/Flavor-and-Fragrance.png" alt="" />
      </div>
      <div className="innerBannerContent">
        <div className="container">
           <h1 className="text-center">Flavor and Fragrance</h1>
        </div>
      </div>
    </section>
    <section className="contentContainer positionRelative">
      <div className="container">
        <div className="row">
           <div className="col-md-12 order-md-0 order-1">
              <div className="">    
                  <p>The flavor and fragrance industry is witnessing significant growth, driven by increased global consumer demand for natural products. As markets expand overseas, the demand for more authentic, plant-based ingredients continues to fuel industry progress. Additionally, the growing production of processed foods is enhancing the need for flavors to maintain the taste and quality of mass-produced products.</p>
                  <p>Rising affluence in developing nations has further accelerated the demand for fragrance products, as more consumers can purchase fragrance-infused personal care and toiletry items.</p>
                  <p>GCC has been a leading supplier to the flavor and fragrance sector, providing a comprehensive range of ingredients to meet industry needs. Our portfolio includes essential oils, aroma chemicals, and botanical extracts, available in both natural and synthetic forms. We also offer Capric Caprylic Triglyceride and Triacetin, two natural and kosher-certified flavor carriers. On the fragrance side, we feature DiPropylene Glycol and Benzyl Alcohol, both used as fragrance solubilizers.</p>
                  <p>GCC ensures that you have access to the highest-quality materials for your flavor and fragrance formulations.</p>
               </div>
           </div>
           <div className="imageThumbOuter mt-2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="imageThumb">
                        <img src="/images/flavour-and-fragrance-02.jpg" alt="" className="imgResponsive" />
                     </div>
                  </div> 
                  <div className="col-md-4">
                     <div className="imageThumb">
                        <img src="/images/flavour-and-fragrance.png" alt="" className="imgResponsive" />
                    </div>
                  </div>
                  <div className="col-md-4">
                     <div className="imageThumb">
                        <img src="/images/flavour-and-fragrance-03.png" alt="" className="imgResponsive" />
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

export default FlavorAndFragrance;
