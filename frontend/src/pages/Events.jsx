import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';
import Event from '../components/Event';
import Fevent from '../components/Fevent';

const Events = () => {

   return (
      <Layout>
         <section className="innerBanner positionRelative">
            <div className="innerBannerImage">
               <div className="bannerOverlay"></div>
               <img src="/images/inner-banner/events.png" alt="" />
            </div>
            <div className="innerBannerContent">
               <div className="container">
                  <h1 className="text-center">Events</h1>
               </div>
            </div>
         </section>
         {/* <section class="contentContainer greyBg positionRelative">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12 m-auto">
                     <h1>FUTURE EVENTS</h1>
                     <p>Industry events present a valuable opportunity to connect with key executives from GCC, a global leader in chemicals and specialty solutions. These events provide an ideal platform to gain insight into our expertise, explore collaboration opportunities, and learn how our innovative solutions can enhance your business operations. Whether you're looking to build partnerships, expand your professional network, or stay informed on the latest industry advancements, engaging with our team at these gatherings is a great way to start. We look forward to meeting you and talking about how we can work together!</p>
                     <div class="eventTable mt-5">
                        <div class="upcoimgEventList">

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}
         <Fevent />
         <Event />
         <section className="contentContainer greyBg positionRelative">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 m-auto">
                     <h1 className="text-center">Message from current Employees</h1>
                     <p className="text-center">At GCC, we cultivate a workplace culture where employees are more than just team members—they are part of a supportive and dynamic family. Our success is driven by collaboration, dedication, and a shared commitment to delivering exceptional service and high-quality products. Every individual at GCC plays a key role in our mission, contributing to an environment where innovation, professional growth, and teamwork flourish. With a strong sense of community and a passion for excellence, GCC is more than just a workplace—it’s a place to build a fulfilling career. Meet our team and hear firsthand what it’s like to be part of the GCC family!</p>
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   );
};

export default Events;
