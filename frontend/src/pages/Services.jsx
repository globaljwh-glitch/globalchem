import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const Services = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/partner.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">OUR SERVICES</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">           
                  <p>GCC collaborates with third-party facilities that have been physically pre-audited and hold BRC, FSSC22000, Kosher, and Halal certifications, alongside the processes, capabilities, and services developed to better serve our customers. We strive to maintain an environmentally friendly business model while designing as “green” a footprint as possible. As a full range “value-added services” provider,  we are confident we can be your supplier of choice based on our extensive product portfolio, Quality Care Group, proactive global sourcing programs, and extensive cross-industry experience. Please review some of our unique services outlined below and contact our Sales Team to discuss how GCC can partner with your company to improve your bottom line and increase your industry awareness.</p>
               </div>
            </div>
            <div className="industries">
               <div className="row">
                  <div className="col-lg-12 flexCol">
                     <div className="shadowBox industriesBlock">
                        <div className="row">
                           <div className="col-lg-4 col-md-6 flexCol">
                              <div className="industriesThumb d-flex"><img src="images/global-sourcing.jpg" className="imgResponsive" /></div>
                           </div>
                           <div className="col-lg-8 col-md-6 flexCol">
                              <div className="industriesBlockContent industriesBlockContentRight">
                                 <h3>Global Sourcing</h3>
                                 <p>Throughout our history, GCC has established enduring partnerships with the world's foremost producers of premium natural ingredients and chemicals. Our unwavering commitment to quality and innovation ensures that our clients receive access to the latest advancements in chemistry, cutting-edge solutions, and industry-leading technical expertise. By choosing GCC as your partner, you gain more than just a supplier—you gain a strategic ally dedicated to driving your success. With a deep understanding of market trends, regulatory requirements, and evolving industry demands, we provide tailored solutions that give you a competitive edge. Experience the GCC advantage—where excellence, innovation, and expertise converge to shape a stronger, more successful future.</p>
                                 <a href="/global-sourcing" className="customBtn01 mt-0">Learn More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-12 flexCol">
                     <div className="shadowBox industriesBlock">
                        <div className="row">
                           <div className="col-lg-8 col-md-6 flexCol order-md-0 order-1">
                              <div className="industriesBlockContent industriesBlockContentLeft">
                                 <h3>Analytical Lab</h3>
                                 <p>At GCC, quality is our top priority. Our Quality Care Group employs a rigorous approach to ensure that every ingredient we offer meets the highest industry standards. One of the key tools we utilize is independent laboratory testing, which provides an extra layer of verification to guarantee product integrity, safety, and compliance with all regulatory requirements. We take great pride in delivering products and services that consistently meet or exceed current industry specifications with every shipment. Our commitment to quality extends beyond testing—we continuously monitor and improve our processes to uphold the highest standards in the industry. For any questions or inquiries please contact our Quality Control Team. We are always here to help and provide the information you need.</p>
                                 <a href="/analytical-lab" className="customBtn01 mt-0">Learn More</a>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-6 flexCol order-md-1 order-0">
                              <div className="industriesThumb d-flex"><img src="images/Analytical-Lab-300x208.png" className="imgResponsive" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-12 flexCol">
                     <div className="shadowBox industriesBlock">
                        <div className="row">
                           <div className="col-lg-4 col-md-6 flexCol">
                              <div className="industriesThumb d-flex"><img src="images/Customer-Service.png" className="imgResponsive" /></div>
                           </div>
                           <div className="col-lg-8 col-md-6 flexCol">
                              <div className="industriesBlockContent industriesBlockContentRight">
                                 <h3>Customer Service</h3>
                                 <p>Our team of highly trained Customer Service Agents is ready to provide you with personalized, proactive support to ensure your needs are met with efficiency and professionalism. In addition to our dedicated support team, we offer a 24/7 web-based portal that allows you to seamlessly manage and oversee your account at your convenience. Whether you need to track orders, review account details, or access essential information, our user-friendly platform is designed to keep you in control anytime, anywhere. At GCC, we prioritize customer satisfaction by combining expert service with cutting-edge digital tools, ensuring a smooth and hassle-free experience every step of the way. For any assistance, don’t hesitate to reach out to our highly talented team.</p>
                                 <a href="/customer-service" className="customBtn01 mt-0">Learn More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-12 flexCol">
                     <div className="shadowBox industriesBlock">
                        <div className="row">
                           <div className="col-lg-8 col-md-6 flexCol order-md-0 order-1">
                              <div className="industriesBlockContent industriesBlockContentLeft">
                                 <h3>Technical Support & Documentation</h3>
                                 <p>Our Technical Support Team consists of highly trained professionals dedicated to providing exceptional service and expertise. Each of our consultants brings hands-on experience and in-depth knowledge of our diverse product lines, ensuring that you receive the best guidance tailored to your specific needs. Whether you're looking for assistance in selecting the right product for your project or need support with an item you've already purchased, our team is here to help. We are committed to ensuring that you get the most out of our products with expert advice and prompt solutions. For personalized assistance, feel free to reach out to our Technical Support Team. We’re ready to serve you with the highest level of professionalism and care.</p>
                                 <a href="/quality-care/technical-support-documentation/" className="customBtn01 mt-0">Learn More</a>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-6 flexCol order-md-1 order-0">
                              <div className="industriesThumb d-flex"><img src="images/technical-support-documentation.png" className="imgResponsive" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-12 flexCol">
                     <div className="shadowBox industriesBlock">
                        <div className="row">
                           <div className="col-lg-4 col-md-6 flexCol">
                              <div className="industriesThumb d-flex"><img src="images/corporate-headquarters-facility.png" className="imgResponsive" /></div>
                           </div>
                           <div className="col-lg-8 col-md-6 flexCol">
                              <div className="industriesBlockContent industriesBlockContentRight">
                                 <h3>Corporate Headquarters & Facility</h3>
                                 <p>GCC’s corporate headquarters is proudly located in Piscataway, New Jersey, serving as the central hub for our operations and commitment to excellence. Our primary contract facility is a high-tech, 273,000 sq. ft. AIB-certified modern Food Grade building, designed to uphold the highest industry standards. This advanced facility integrates both office and warehouse operations, ensuring seamless coordination between logistics, quality control, and customer support. Equipped with cutting-edge technology and stringent safety protocols, our facility is optimized for efficiency, compliance, and product integrity. From sourcing to storage and distribution, we maintain the highest levels of quality assurance to meet and exceed industry expectations.</p>
                                 <a href="/corporate-headquarters-facility" className="customBtn01 mt-0">Learn More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-12 flexCol">
                     <div className="shadowBox industriesBlock">
                        <div className="row">
                           <div className="col-lg-8 col-md-6 flexCol order-md-0 order-1">
                              <div className="industriesBlockContent industriesBlockContentLeft">
                                 <h3>Regulatory Affairs</h3>
                                 <p>GCC’s Regulatory Affairs department serves as the critical liaison between our company and key regulatory bodies, including the FDA, Environmental Protection Agency (EPA), Federal Trade Commission (FTC), Occupational Safety & Health Administration (OSHA), and Drug Enforcement Administration (DEA).</p>
                                 <a href="/quality-care/regulatory-affairs" className="customBtn01 mt-0">Learn More</a>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-6 flexCol order-md-1 order-0">
                              <div className="industriesThumb d-flex"><img src="images/regulatory-affairs.png" className="imgResponsive" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-12 flexCol">
                     <div className="shadowBox industriesBlock">
                        <div className="row">
                           <div className="col-lg-4 col-md-6 flexCol">
                              <div className="industriesThumb d-flex"><img src="images/quality-control.png" className="imgResponsive" /></div>
                           </div>
                           <div className="col-lg-8 col-md-6 flexCol">
                              <div className="industriesBlockContent industriesBlockContentRight">
                                 <h3>Quality Control</h3>
                                 <p>At GCC, our Quality Control Team upholds the highest industry standards to ensure exceptional product reliability, durability, and compliance with global safety regulations. Through advanced testing protocols, real-time monitoring, and rigorous quality assurance measures, we guarantee that every product meets strict quality, safety, and performance benchmarks. Our cutting-edge analytical methods and precision-driven inspection processes reinforce consistency, efficiency, and excellence. Committed to continuous improvement and innovation, we proactively enhance our quality control systems to exceed customer expectations and industry requirements. At GCC, quality assurance isn’t just a process—it’s the foundation of our long-term success.</p>
                                 <a href="/quality-care/quality-control" className="customBtn01 mt-0">Learn More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default Services;
