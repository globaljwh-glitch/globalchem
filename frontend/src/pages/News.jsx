import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const Careers = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/news.jpg" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">NEWS</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer imgBgThree positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-md-9 ms-auto">
                  <img src="images/coming-soon.jpg" alt="" className="" />
               </div>              
            </div>
         </div>
      </section>

    </Layout>
  );
};

export default Careers;
