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
    <section className="contentContainer">
      <div className="container">
        <div className="row">
           <div className="col-md-12 order-md-0 order-1">
              <div className="">    
                 <p>The beauty and personal care industry is constantly evolving, with consumers seeking advanced skincare and cosmetic solutions that deliver visible results. As scientific advancements continue to shape the industry, innovative ingredients sourced from across the globe are now more accessible in North America. What was once exclusive to luxury markets is now available at competitive prices, making high-performance formulations a reality for mass-market consumers.</p>
                 <p>At GCC, we work extensively with clients in the anti-aging segment, as well as providing a full suite of ingredients for hair care, skin care, and personal hygiene applications. The personal care industry has expanded beyond traditional cosmetics to include products such as cleansing wipes, skin creams, deodorants, shaving essentials, lip balms, and more. Since 1967, GCC has been a trusted leader in sourcing both commodity ingredients and breakthrough innovations from global manufacturers. Our commitment to sustainability and green chemistry ensures that our customers receive high-quality, eco-conscious solutions. With an unwavering focus on quality, service, and competitive pricing, we provide a seamless experience for product developers, chemists, and procurement teams alike.</p>
                 <p>Get in touch today with our sales team to discover how GCC can support your product development with high-quality, sustainable, and innovative ingredient solutions.</p>
              </div>
           </div>            
        </div>
        <div className="imageThumbOuter mt-2">
           <div className="row">
              <div className="col-md-4">
                 <div className="imageThumb">
                    <img src="/images/zero-waste-beauty-products.jpg" alt="" className="imgResponsive" />
                 </div>
              </div> 
              <div className="col-md-4">
                 <div className="imageThumb">
                    <img src="/images/cosmetic-personal-care-2.jpg" alt="" className="imgResponsive" />
                 </div>
              </div>
              <div className="col-md-4">
                 <div className="imageThumb">
                    <img src="/images/cosmetic-personal-care-3.jpg" alt="" className="imgResponsive" />
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

export default PersonalCareCosmetic;
