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
           <div className="col-md-6 order-md-0 order-1">
              <div className="pe-5">    
                 <p>Today, we are far more aware of what kind of food we’re consuming. We don’t want trans fats in our diet, and consumers have made it clear that they don’t want products derived from GMO’s. GCC is also well aware that the consumer’s ongoing interest in protein consumption is driving new opportunities for functional foods and drinks. Part of a healthy lifestyle begins with how we eat. Being all natural is a great direction to go in. But when that’s not possible, there is an ever increasing demand that processed foods be convenient, tasty and safe.</p>
                </div>
           </div>
           <div className="col-md-6 order-md-1 order-0">
              <div className="imageThumb">
                 <img src="/images/food-and-beverages.jpg" alt="" className="imgResponsive" />
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
                   <img src="/images/front-view-refreshing-green-smoothies_23-2148226119.jpg" alt="" className="imgResponsive" />
                </div>
             </div>
             <div className="col-md-6">
                <div className="">    
                    <p>While our portfolio highlights more natural products than ever, we also recognize that there is a need to have safe and efficacious ingredients in our food supply. We offer different acidulants, amino acids, antioxidants, emulsifiers, humectants, leavening agents, oils, phosphates, preservatives, sweeteners, whiteners, and vitamins from a variety of manufacturers around the world. Let GCC be your “one stop source” for your various food and beverage requirements.</p>
                 
                </div>
             </div>                  
          </div>
       </div>
    </section>
    <ProductList />
    </Layout>
  );
};

export default FoodAndBeverages;
