// src/pages/Home.jsx
import Layout from '../components/Layout';

function About() {
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="images/inner-banner/banner-aboutus2.png" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">About Us</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer">
         <div className="container">
            <div className="row">
               <div className="col-md-12 order-md-1 order-1">
                  <div>
                     <p>Global Chemicals Corporation (GCC) is a leading provider of high-quality natural and synthetic ingredients and specialty chemicals. With a strong legacy of innovation and excellence, we have become a trusted global partner in industries such as food and beverage, cosmetic and personal care, pharmaceuticals, and industrial cleaning. Our commitment to quality, reliability, and customer-focused solutions allows us to meet the evolving demands of businesses worldwide, providing cutting-edge ingredients and strategic sourcing to drive success.</p>
                     <div className="floatRightThumb imageThumb mt-4 mb-4">
                     <img src="/images/about-home-image.jpg" alt="" className="imgResponsive" /></div>
                     <h4 className="textGreen pt-4">Mission Statement</h4>
                  <p>Our mission is to set new benchmarks in ingredient and raw material supply by adhering to key principles that drive our success:</p>
                  <ul>
                     <li><b>Unmatched Customer Service</b> – Ensuring timely delivery, competitive pricing, and innovative solutions to support our clients’ success.</li>
                     <li><b>Commitment to Quality &amp; Safety</b> – Maintaining our “Quality Care” team to educate customers, suppliers, and employees on the safe handling, marketing, and application of our products.</li>
                     <li><b>Strict Regulatory Compliance</b> – Adhering to BRC, FSSC 22000, Kosher, and Halal standards while meeting all regulatory requirements to guarantee product integrity.</li>
                     <li><b>Strong Supplier Partnerships</b> – Cultivating ethical, transparent, and mutually beneficial relationships with our global network of trusted suppliers.</li>
                     <li><b>Safety &amp; Sustainability</b> – Prioritizing the well-being of our employees, customers, and the environment by operating our facilities with the highest safety standards while maintaining a commitment to sustainability.</li>
                     <li><b>Continuous Improvement &amp; Innovation</b> – Driving excellence through ongoing quality enhancement, innovation, and expansion of our product offerings.</li>
                  </ul>
                  <p>By upholding these core business principles, GCC stands as the "Supplier of Choice" for businesses needing high-quality ingredients and raw materials. Our dedication to excellence, innovation, and customer satisfaction drives us to deliver reliable solutions customized to evolving industry demands. With a strong global network and unwavering commitment to quality, we are the trusted partner you can count on for all your sourcing needs.</p>
                  </div>
               </div>              
            </div>
         </div>
      </section>
      <section className="contentContainer greyBg" id="our-team">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <h1>Our Team</h1>
                  <p>Global Chemicals Corp(GCC) was established to provide top-tier synthetic and natural ingredients for the food & beverage, cosmetic, personal care, nutritional, and pharmaceutical industries. From the beginning, its business model was built on a strong foundation of people, processes, and products. GCC’s core values—ethical conduct, integrity, diligence, and competitiveness—have shaped its operations, driving continuous innovation, growth, and excellence. With each generation of shareholders, executives, and employees, the company has expanded its reach and capabilities, staying ahead of industry trends and exceeding customer expectations.</p>
               </div>
            </div>
         </div>
      </section>

    </Layout>
  );
}

export default About;
