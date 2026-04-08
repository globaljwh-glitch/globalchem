// src/pages/Home.jsx
import Layout from '../components/Layout';
import Partnerslider from '../components/Partnerslider';


function Home() {
  return (
    <Layout>
      <section className="mainBanner positionRelative">
         <div className="mainBannerBlockSlider">
            <div className="mainBannerBlockSlide positionRelative">
               <div className="bannerImage">
                  <div className="bannerThumb"><div className=""></div><img src="images/banner/banner-slider-01.jpg" alt="" className="imgResponsive"/></div>
               </div>
            </div>
            <div className="mainBannerBlockSlide positionRelative">
               <div className="bannerImage">
                  <div className="bannerContent text-white">
                     <h1>Global Producer of High Quality Chemicals & Natural Ingredients</h1>
                     <p>Highest Quality Products Manufactured by Physically Pre-Audited and 3rd Party Certified Plants </p>
                     <p>As Per Foreign Supplier Verification Program (FSVP)</p>
                     <p>ISO9001, 14001, BRC, FSSC22000  Including cGMP & HARPC (Formerly HACCP)</p>
                     <p>Kosher & Halal Certified in Compliance with Global and Country-Specific Standards</p>
                     <p> State of the Art Manufacturing Facilities</p>
                     <p> On All Five Continets of the Globe</p>
                  </div>
                  <div className="bannerThumb"><div className=""></div><img src="images/banner/banner-slider-02.jpg" alt="" className="imgResponsive"/></div>
               </div>
            </div>
            <div className="mainBannerBlockSlide positionRelative">
               <div className="bannerImage">
                  <div className="bannerThumb"><div className=""></div><img src="images/banner/banner-slider-03.jpg" alt="" className="imgResponsive"/></div>
               </div>
            </div>
            <div className="mainBannerBlockSlide positionRelative">
               <div className="bannerImage">
                  <div className="bannerThumb"><div className=""></div><img src="images/banner/banner-slider-04.jpg" alt="" className="imgResponsive"/></div>
               </div>
            </div>
            <div className="mainBannerBlockSlide positionRelative">
               <div className="bannerImage">
                  <div className="bannerThumb"><div className=""></div><img src="images/banner/banner-slider-05.jpg" alt="" className="imgResponsive"/></div>
               </div>
            </div>
         </div>
         <div className="mainBannerSliderPagination"></div>
      </section>
      <section className="smallContentContainer homeQuickLinksnavBlock">
         <div className="container">
            <div className="homeQucikLinkOuter">
            <div className="row">
               <div className="col-md-4">
                  <a href="/sourcing-partner" className="homeQuickLinksnav">
                     <h4>Supply Partner</h4>
                  </a>
               </div>
               <div className="col-md-4">
                  <a href="/customer-focused" className="homeQuickLinksnav">
                     <h4>Customer-centric</h4>
                  </a>
               </div>
               <div className="col-md-4">
                  <a href="/industries" className="homeQuickLinksnav">
                     <h4>Markets Served</h4>
                  </a>
               </div>
               <div className="col-md-4">
                  <a href="/quality-care" className="homeQuickLinksnav">
                     <h4>Quality and Safety</h4>
                  </a>
               </div>
               <div className="col-md-4">
                  <a href="/global-network" className="homeQuickLinksnav">
                     <h4>Distribution Channels</h4>
                  </a>
               </div>
               <div className="col-md-4">
                  <a href="/custom-rd" className="homeQuickLinksnav">
                     <h4>Contract R&amp;D</h4>
                  </a>
               </div>
            </div>
         </div>
         </div>
      </section>
      <section className="contentContainer greyBg">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 text-center">
                  <h1 className="text-center">ABOUT US</h1>
               </div>
            </div>
            <div className="infoBlockAboutUsList">
               <div className="row">
                  <div className="col col-md-12">
                     <div className="aboutImgThumbHomeOuter d-flex justify-content-start align-items-center bg-white">
                        <div className="infoBlockAboutUsThumb"><img src="images/innovation-02.jpg" alt="" /></div>
                        <div className="infoBlockPosition infoBlockPositionRight">
                           <h5>INNOVATION DRIVEN</h5>
                           <p>At GCC, innovation fuels our culture and global operations. Our advanced Research &amp; Development Centers and Quality Assurance Labs in East Brunswick, New Jersey, Shanghai, China, and Ahmedabad, India, highlight our dedication to cutting-edge technologies. Supported by skilled scientists and experienced technical teams, we lead in the Chemical, Cosmetics, Food Ingredients, Nutritional Products, and Pharmaceutical sectors.</p>
                           <p>Our consistent investment in R&amp;D and QA/QC infrastructure ensures precise validation of Certificates of Analysis from manufacturing partners. We maintain strict adherence to ISO 9001, ISO 14001, BRC, FSSC 22000, cGMP, and HACCP standards, complying with FDA, USDA, EPA, and all applicable global regulatory requirements under responsible care principles.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col col-md-12">
                     <div className="aboutImgThumbHomeOuter d-flex justify-content-start align-items-center bg-white">
                        <div className="infoBlockAboutUsThumb order-md-1 order-0"><img src="images/growing-partnership.jpg" alt="" /></div>
                        <div className="infoBlockPosition infoBlockPositionLeft order-md-0 order-1">
                           <h5>DEVELOPING COLLABORATIONS</h5>
                           <p>In addition to our Built-to-Suit (BTS) manufacturing facilities, GCC cultivates strong alliances with reliable international manufacturers to accelerate innovation and global market presence. Our business development experts offer deep technical and commercial knowledge, enabling partners to diversify product offerings and integrate new technologies. We are committed to building collaborative relationships that help optimize supply chains, reduce operational costs, increase product profitability, and achieve a sustainable competitive advantage in both domestic and international markets. GCC provides consistent, high-value solutions for long-term business growth.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col col-md-12">
                     <div className="aboutImgThumbHomeOuter d-flex justify-content-start align-items-center bg-white">
                        <div className="infoBlockAboutUsThumb"><img src="images/build-03-1.jpg" alt="" /></div>
                        <div className="infoBlockPosition infoBlockPositionRight">
                           <h5>CUSTOM-BUILT FACTORIES</h5>
                           <p>GCC develops long-term, strategic agreements with trusted construction partners in key geographic regions to establish custom-built BTS facilities tailored for specialized manufacturing needs. A BTS project involves designing and constructing a facility that aligns with the tenant’s unique operational, layout, and technological specifications. This partnership-driven process results in a purpose-built structure leased over a fixed duration—typically 7 to 10 years—with options for extension. These customized setups help clients enhance production capacity, achieve regulatory compliance, and operate with optimal efficiency.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col col-md-12">
                     <div className="aboutImgThumbHomeOuter d-flex justify-content-start align-items-center bg-white">
                        <div className="infoBlockAboutUsThumb order-md-1 order-0"><img src="images/fff-1.png" alt="" /></div>
                        <div className="infoBlockPosition infoBlockPositionLeft order-md-0 order-1">
                           <h5>CUSTOMER-CENTRIC APPROACH</h5>
                           <p>As part of our company culture, customers are placed at the center of all decision-making. From R&D and Manufacturing to Quality Control, Customer Support, Logistics, and Distribution, our cross-functional teams are committed to delivering value-driven service. GCC’s customer-first mindset ensures a proactive, hands-on approach that guarantees accurate, on-time, and dependable support. Our dedicated service teams act not only as support agents but also as strategic partners for every client, ensuring each order is fulfilled with precision, care, and professionalism. At GCC, every client is a valued stakeholder in our shared success.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="contentContainer">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 text-center">
                  <h1 className="text-center">OUR HEADQUARTERS</h1>
               </div>
               <div className="col-md-12">
                  <img src="images/gloal-building-image.jpg" alt="office Building" className="imgResponsive" />
               </div>
            </div>
         </div>
      </section>
      <section className="contentContainer greyBg">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 text-center">
                  <h1 className="text-center">INDUSTRIES SERVED</h1>
               </div>
               <div className="col-md-12">
                  <p>Global Chemicals Corporation(GCC) was founded to offer value-added services for our product lines, including both synthetic and natural ingredients for the Food and Beverage, Cosmetic and Personal Care, Nutritional, and Pharmaceutical industries. Since its inception, GCC has grown into a leading supplier of raw materials and ingredients across various industries. With more than 4,000 products and global partnerships with the world’s top ingredient manufacturers, GCC is your ideal supplier. Our Quality and Safety Team is eager to collaborate with you, helping introduce and innovate the latest industry trends. Whether for your regular raw material needs or hard-to-find specialty ingredients, GCC is here to assist. We proactively source the latest innovations and product trends worldwide, ensuring our clients stay at the forefront of technology. Click on the links below to access GCC’s superior supply chain or inquire about the industry of your choice.</p>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-12 col-md-12 positionRelative">
                  <div className="categoriesSectionHome"> 
                     <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                           <div className="categoriesList">
                              <a href="/industries/animal-health-nutrition"><img src="images/animal-health-and-nutrician.jpg" alt="" className="imgResponsive" />
                              <h4 className="categoriesName">Animal Health &amp; Nutrition</h4></a>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                           <div className="categoriesList">
                              <a href="/industries/flavor-and-fragrance"><img src="images/flavour-and-fragrance.png" alt="" className="imgResponsive" />
                              <h4 className="categoriesName">Flavor And Frangrance</h4></a>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                           <div className="categoriesList">
                             <a href="/industries/food-and-beverages"> <img src="images/food-and-beverages.png" alt="" className="imgResponsive" />
                              <h4 className="categoriesName">Food &amp; Beverages</h4></a>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                           <div className="categoriesList">
                             <a href="/industries/industrial"> <img src="images/industrial.jpg" alt="" className="imgResponsive" />
                              <h4 className="categoriesName">Industrial</h4></a>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                           <div className="categoriesList">
                            <a href="/industries/sport-nutrition">  <img src="images/dietary-supplements-elderly-inline.jpg" alt="" className="imgResponsive" />
                              <h4 className="categoriesName">Nutritional/Dietary Supplements</h4></a>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                           <div className="categoriesList">
                            <a href="/industries/pharmaceutical">  <img src="images/pharmaceuticals.png" alt="" className="imgResponsive" />
                              <h4 className="categoriesName">Pharmaceuticals</h4></a>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                           <div className="categoriesList">
                             <a href="/industries/personal-care-cosmetic"> <img src="images/personal-care-cosmatics.png" alt="" className="imgResponsive" />
                              <h4 className="categoriesName">Personal Care / Cosmetic</h4></a>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                           <div className="categoriesList">
                             <a href="/industries/sport-nutrition"> <img src="images/sports-nutrition.png" alt="" className="imgResponsive" />
                              <h4 className="categoriesName">Sport Nutrition</h4></a>
                           </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 d-md-block d-sm-none">
                           <div className="categoriesList">
                             <a href="/industries"> <img src="images/hhhhh.png" alt="" className="imgResponsive" />
                              <h4 className="categoriesName">View More</h4></a>
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
}

export default Home;
