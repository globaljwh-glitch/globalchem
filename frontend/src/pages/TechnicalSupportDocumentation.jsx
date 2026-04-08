import React, { useEffect, useState } from 'react';

import Contacts from '../components/Contacts'; // adjust the path if needed
import Layout from '../components/Layout';

const TechnicalSupportDocumentation = () => {
 
  return (
    <Layout>
      <section className="innerBanner positionRelative">
         <div className="innerBannerImage">
            <div className="bannerOverlay"></div>
            <img src="/images/inner-banner/technical-support-documentation.jpg" alt="" />
         </div>
         <div className="innerBannerContent">
            <div className="container">
               <h1 className="text-center">TECHNICAL SUPPORT & DOCUMENTATION</h1>
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
         <div className="container">
            <div className="row">
               <div className="col-md-6 order-md-0 order-0">
                  <div className="imageThumb me-5">
                     <img src="/images/technical-support-documentation.jpg" alt="" className="imgResponsive" />
                  </div>
               </div> 
               <div className="col-md-6 order-md-1 order-1">
                  <div>    
                     <p>Our expert technical team brings an average of 25 years of experience in handling industry-compliant products, including USP, NF, FCC, and FDA-approved solutions. We assist customers in selecting the most suitable products for their specific applications, recommending optimal usage concentrations, and suggesting alternative solutions to product development challenges. Our dedicated team works closely with you to ensure that your needs are met with precision and efficiency. If you require support, our specialists are available to provide immediate assistance. Additionally, we offer confidential and customized technical support for clients both domestically and internationally.</p>
                     <p>The demand for regulatory compliance, quality assurance, and technical documentation has increased significantly in recent years. As part of our supplier evaluation and quality assurance processes, we maintain an extensive database of product literature and compliance records to streamline document retrieval. We provide a comprehensive range of technical documentation, including specification data sheets, full product dossiers, master drug files, supplier evaluation questionnaires, audit reports, and supplier certifications. Whether you require supplier qualification documents or regulatory compliance paperwork, our team is equipped to deliver the required documentation in a timely and efficient manner.</p>
                  </div>
               </div>              
            </div>
         </div>
      </section>
      <section className="contentContainer greyBg positionRelative">
         <div className="container">
            <div className="row"> 
               <div className="col-md-12">
                  <h1 className="text-center">Available documentation</h1>
                  <div className="documentTable mt-5">
                     <table className="table table-striped">
                       <thead>
                         <tr>
                           <th scope="col">Document Name</th>
                           <th scope="col" width="90">Product</th>
                           <th scope="col" width="90">Customer</th>
                           <th scope="col" width="90">Supplier</th>
                         </tr>
                       </thead>
                       <tbody>
                           <tr className="odd" role="row">
                           <td>Supply chain statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center">X</td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Foreign materials control statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Microbiological statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Re-testing histories and documentation</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>“Free of” statement applies to: Food additives, Cosmetics, Topical Uses</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Allergen Statement (obtain for every chemical and flag in product code)</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Animal Testing Statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>BSE/TSE Statement (Bovine/Transmissible Spongiform Encephalopathy)</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>CMR statement (Carcinogenity, Mutagenity, Reproductive Toxicity)</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>COA (Mfr’s Original COA)</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Composition/Contents statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Copy of Manufacturer’s Label</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Country Of Origin statement or NAFTA as applies</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Derivation Statement (Which plant, animal, mineral, synthetic it comes from)</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Fatty Acid Distribution</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Gluten Statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>GMO statement – Genetically Modified Organisms</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>GRAS Statement (Generally Recognized As Safe)</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Health Certificates</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Heavy Metals Statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Kosher Certificate (if Applicable) &amp;, or Halal Certificate (if Applicable)</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Lot Code Explanation</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Melamine Statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Nanomaterial Statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Natural or Synthetic Statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Nutritional Profile</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Organic Statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Particle size statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Phthalates statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Prerequisitional vendor questionnaires</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Production Process Flowchart</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Recommended Storage Conditions</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Residual Solvents Statement or Test Data (Complies with Class 1, 2, 3, USP &lt;467&gt;)</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>SDS – Safety Data Sheet (MSDS)</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Shelf Life Statement</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Spec Change notification</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Spec Sheet with Shelf Life, Storage &amp; Handling info</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Stability Data</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Incoming Raw Materials (procedure)</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Manufacturer’s qualification of their supplier’s (procedure)</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Process for sampling (procedure)</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Recall procedure (procedure)</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Test methods, testing records</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Expired and rejected material (procedure)</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>FDA Bioterrorism statement</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>CAPA documents made public</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>cGMP Certificate/Statement (current good manufacturing practices)</td>
                           <td className="text-center">X</td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Continuing Guarantee Statement</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>FDA Registration Number</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>ISO Certificates and other 3rd party audit docs (HACCP, AIB, Siliker, etc)</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Manufacturer/supplier name change notification</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>NDC Number</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Organization Chart</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>RSPO, Roundtable on Sustainable Palm Oil (as applicable)”</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="odd" role="row">
                           <td>Self Audit reports</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           <tr className="even" role="row">
                           <td>Slavery Human Trafficking certificate</td>
                           <td className="text-center"></td>
                           <td className="text-center"></td>
                           <td className="text-center">X</td>
                           </tr>
                           </tbody>
                     </table>
                  </div>
               </div>                
            </div>
         </div>
      </section>
      <section className="contentContainer positionRelative">
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

export default TechnicalSupportDocumentation;
