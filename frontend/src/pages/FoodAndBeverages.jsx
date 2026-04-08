import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const FoodAndBeverages = () => {
 
  return (
    <Layout>
    <section className="innerBanner positionRelative">
      <div className="innerBannerImage">
        <div className="bannerOverlay"></div>
        <img src="/images/inner-banner/Food-and-Beverage-banner.png" alt="" />
      </div>
      <div className="innerBannerContent">
        <div className="container">
           <h1 className="text-center">Food and Beverage</h1>
        </div>
      </div>
    </section>
    <section className="contentContainer positionRelative">
      <div className="container">
        <div className="row">
           <div className="col-md-12 order-md-0 order-1">
              <div className="">    
                  <p>Consumers today are more conscious than ever about the quality and source of their food. There is a growing demand for healthier, cleaner ingredients, with people actively avoiding trans fats and genetically modified (GMO) products. At the same time, the rising popularity of protein-rich diets and functional foods is reshaping the market, driving innovation in the food and beverage industry. A balanced diet is essential for a healthy lifestyle, and while natural, minimally processed foods are preferred, there is also an increasing need for convenient, flavorful, and safe processed options.</p>
                  <p>GCC understands the evolving food industry and continuously expands its portfolio to offer natural and functional ingredients that meet consumer expectations. While we prioritize sourcing clean-label and plant-based solutions,we also recognize the importance of safe, effective, and high-performance additives in food production. Our extensive product selection includes acidulants, amino acids, antioxidants, emulsifiers, humectants, leavening agents, oils, phosphates, preservatives, sweeteners, whiteners, and vitamins—sourced from top manufacturers worldwide. As a trusted global supplier, GCC is committed to quality, safety, and innovation in the food and beverage sector.</p>
               </div>
           </div>
           <div className="imageThumbOuter mt-2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="imageThumb">
                        <img src="/images/food-and-beverages-02.jpg" alt="" className="imgResponsive" />
                     </div>
                  </div> 
                  <div className="col-md-4">
                     <div className="imageThumb">
                        <img src="/images/food-and-beverages.jpg" alt="" className="imgResponsive" />
                    </div>
                  </div>
                  <div className="col-md-4">
                     <div className="imageThumb">
                        <img src="/images/food-and-beverages-03.jpg" alt="" className="imgResponsive" />
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

export default FoodAndBeverages;
