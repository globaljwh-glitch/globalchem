import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';

const OurTeam = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/banner-team.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">Our Team</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-md-12 order-md-1 order-1">
                  <div>
                     <div className="floatRightThumb imageThumb mt-2 mb-4"><img src="/images/our-team.png" alt="" className="imgResponsive" /></div>
                     <p>Global Chemicals Corporation (GCC) was founded to deliver premium-quality synthetic and natural ingredients for the food and beverage, cosmetic, personal care, nutritional, and pharmaceutical industries. From the outset, our business model has been built on a solid foundation of expert teams, streamlined processes, and superior products. Our core values—ethical practices, integrity, commitment, and competitive excellence—continue to shape our operations and drive ongoing innovation, growth, and industry leadership. Across generations of stakeholders, executives, and team members, we have expanded our capabilities and global presence.</p>

                     <p>Thanks to our steadfast commitment and strategic collaboration with internal teams, certified manufacturing partners, global service providers, and loyal clients, we has evolved into a world-renowned supplier of specialty ingredients.</p>

                     <p>With a strong emphasis on quality assurance, sustainability, and customer-focused innovation, we remain at the forefront of delivering advanced ingredient solutions that address the shifting needs of global industries. By leveraging cutting-edge technology, strict regulatory compliance, and an agile, market-driven approach, GCC guarantees reliable delivery of high-performance ingredients that power success worldwide. As we move forward, our mission remains clear—expand our international reach, nurture impactful partnerships, and raise the bar for ingredient manufacturing excellence.</p>
                  </div>
               </div>              
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default OurTeam;
