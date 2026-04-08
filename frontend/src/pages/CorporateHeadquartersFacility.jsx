import React, { useEffect, useState } from 'react';
import Contacts from '../components/Contacts'; // adjust the path if needed

import Layout from '../components/Layout';

const CorporateHeadquartersFacility = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/corporate-headquarters-banner.jpg" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">CORPORATE HEADQUARTERS &amp; FACILITY</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-md-12 order-md-1 order-1">
                  <div>
                     <div className="floatLeftThumb imageThumb mt-2 mb-4"><img src="/images/corporate-headquarters-facility-2.png" alt="" className="imgResponsive" /></div>
                     <p>GCC Headquarters – Piscataway, New Jersey</p>
                     <p>Located on nine acres of company-owned property, GCC’s corporate headquarters in Piscataway, New Jersey, is a 120,000 sq. ft. facility designed for efficiency, innovation, and sustainability. This building houses 15,000 sq. ft. of office space, with the remaining 105,000 sq. ft. dedicated to warehouse operations, bulk filling rooms, white rooms, and advanced laboratory spaces. Our temperature and humidity-controlled warehouse is designed for maximum efficiency, featuring 28-ft clear height racking, cross-docked loading areas with 18 bay doors, and material handling equipment. This includes wire-guided turret trucks, order pickers, reach trucks, and a fleet of electric and propane forklifts. Our facility is built to handle large volumes of inbound and outbound shipments, minimizing delays and streamlining distribution. Additionally, with 24/7 high-definition surveillance monitoring, we uphold the highest security and safety standards. </p>
                     <p>As part of our commitment to sustainability, we continuously upgrade our facility to minimize environmental impact. Our next initiative includes the installation of solar panels to reduce dependence on the power grid and enhance energy efficiency.</p>
                     <p>For inquiries about our facility, contact our Operations Team for more details.</p>
                  </div>
               </div>              
            </div>
         </div>
      </section>
      <section className="contentContainer greyBg positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-lg-9 m-auto">
                  <h1 className="text-center">CONTACT US</h1>         
                  <p className="text-center paddingLR150">We are grateful for the opportunity to show you why Global Chemical Corporation is the superior choice for your business.</p>
               </div>
            </div>
            <Contacts />
         </div>
      </section>
    </Layout>
  );
};

export default CorporateHeadquartersFacility;
