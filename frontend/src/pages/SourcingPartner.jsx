// src/pages/Home.jsx
import Layout from '../components/Layout';

const SourcingPartner = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/sourcing-partner.jpg" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">SUPPLY PARTNER</h1>
            </div>
         </div>
      </section>
      <section className="contentSections contentContainer">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1>Who We Are and What We Do</h1>
                  <p>With a dedicated team of Sourcing at GCC who follow a rigorous supplier evaluation method before approving the manufacturing site and the products which we offer to customers. Thereby enabling us to offer our customers a wide range of specialty ingredients of consistent quality on a long-term supply contract basis. Through our knowledge & network, we also offer strategic services to our customers for sourcing products which are currently not in our offering.</p>
                  <h4 className="text-blue">SEEKING THE RIGHT PARTNERSHIP FOR STRATEGIC GROWTH.</h4>
                  <h5>New Product Introduction</h5>
                  <h5>Training Program</h5>
                  <p><strong>With vendor/supplier’s support and participation, GCC conducts in house training for Management, Sales, Customer Service and Technical Service Teams:</strong></p>
                  <ul className="listing01">
                     <li>Market Knowledge</li>
                     <li>Basic Chemistry</li>
                     <li>Production Process</li>
                     <li>Applications</li>
                     <li>Target Markets</li>
                     <li>Sales Goals</li>
                  </ul>
                  <h5>Support from Vendor/Supplier:</h5>
                  <ul className="listing01">
                     <li>Product Literature and Samples</li>
                     <li>Appropriate Inventory</li>
                     <li>Competitive Price</li>
                  </ul>
                  <h5>Profile Customer by Market:</h5>
                  <ul className="listing01">
                     <li>Generate list of all possible customer leads for sales activity.</li>
                     <li>Participate in a series of on going customer joint calls with supplier.</li>
                     <li>Marketing as key contact during development of new line.</li>
                     <li>On-going training to keep current with industry needs.</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
      <section className="contentSections contentContainer greyBg">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1>Our Strength</h1>
                  <ul className="listing01">
                     <li>Strong  brand recognition and established relationship in the global chemical industry at all levels.</li>
                     <li>Optimal & well managed internal cost structure enabling us to deliver cost effective solutions to our customers.</li>
                     <li>Customized and flexible approach towards offering solutions and services to our customers and suppliers.</li>
                     <li>Systematic sourcing procedure for ensuring consistent supply of consistent performance products.</li>
                     <li>Qualified, experienced and dedicated technical team for offering technical support for new business development & offering solutions.</li>
                     <li>Wide range of specialty ingredients from one source.</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
      <section className="contentSections contentContainer">
   <div className="container containerLarge">
      <div className="row">
         <div className="col-md-12">
            <h1>Sourcing Procedures</h1>
            <p>GCC follows stringent Vendor Qualification Procedures (VQP), Sourcing and Procurement policies and procedures and comply with Global Quality and Safety Standards such as BRC and FSSC22000, U.S. FSMA, FSVP and Preventive Controls for Human and Animal Food and relevant rules and regulations of US FDA,  EPA and other Federal and State regulatory agencies. Our sourcing and procurement procedures ensure that our customers receive the highest quality materials and all required documentation.</p>
            <h5>Supplier Identification</h5>
            <p>Request initial documentation: product safety data sheets, specifications, certificates of analysis, HACCP certificates, FDA registration, ISO, HALAL, Kosher, and more.</p>
            <h5>Audit by Company Personnel or Third Party</h5>
            <p>Purchasing team will schedule a plant visit and audit or request audit results from approved third party certifying body such as SGS, AIB, BRC, NSF, ASQ .</p>
            <h5>Product Quality Testing</h5>
            <ul className="listing01">
               <li>Upon audit completion and acceptance of report, product samples shall be tested.</li>
               <li>Products shall be sent to accredited third party testing laboratory.</li>
               <li>Test results shall be compared against prior certificates of analysis of that product and of products from other vendors.</li>
            </ul>
            <h5>Initial Order Review</h5>
            <ul className="listing01">
               <li>Pallet quantity order up to one load is purchased on trial basis.</li>
               <li>Packaging material thoroughly inspected for rips, tears, defects, mislabeling.</li>
               <li>Pallets / skids inspected for damage, evidence of microbial growth, or discoloration.</li>
            </ul>
            <h5>Supplier Approval</h5>
            <p>Supplier must demonstrate consistent high quality in the product, packaging, shipping time, and customer service for a period no shorter than 6 months to earn full supplier approval</p>
         </div>
      </div>
   </div>
</section>
<section className="contentSections contentContainer greyBg">
   <div className="container containerLarge">
      <div className="row">
         <div className="col-md-12">
            <h1>OUR SUPPLIER NETWORK</h1>
            <p>Global Chemicals Corporation sources specialty ingredients from 15 countries through a well-defined selection process.</p>
            <div class="pt-2"><img alt="" className="imgResponsive" src="/images/map-image-gcc.jpg" /></div>
         </div>
      </div>
   </div>
</section>

</Layout>
  );
};

export default SourcingPartner;
