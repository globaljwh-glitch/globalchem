import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList';
import Career from '../components/Career'; // adjust the path if needed
import Layout from '../components/Layout';

const Careers = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/careers.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">Careers</h1>
            </div>
         </div>
      </section>

<Career/>
      <section className="contentContainer greyBg positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 m-auto">
                  <h1 className="text-center">Why Choose GCC?</h1>
                  <ul className="listing01 listing012Col">
                     <li>Competitive base salaries for industry professionals.</li>
                     <li>A collaborative, team-driven workplace culture.</li>
                     <li>Supportive and well-balanced work environment.</li>
                     <li>Laptop provisions for sales associates.</li>
                     <li>Comprehensive medical, vision, and dental benefits.</li>
                     <li>Opportunities for growth, skills, and earnings.</li>
                     <li>Professional development with paid training programs.</li>
                     <li>Transportation allowance to support commuting needs.</li>
                  </ul>
               </div>
            </div>
         </div>
      </section> 
    </Layout>
  );
};

export default Careers;
