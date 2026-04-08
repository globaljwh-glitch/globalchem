import Layout from '../components/Layout';

const CustomerFocused = () => {
 
  return (
    <Layout>
      <section class="innerBanner positionRelative">
         <div class="innerBannerImage">
            <div class="bannerOverlay"></div>
            <img src="/images/inner-banner/customer-focused.jpg" alt="" />
         </div>
         <div class="innerBannerContent">
            <div class="container">
               <h1 class="text-center">CUSTOMER FOCUSED</h1>
            </div>
         </div>
      </section>
      <section class="contentContainer positionRelative">
         <div class="container">
            <div class="row">
               <div class="col-md-12 order-md-1 order-1">
                  <div>
                     <div class="floatRightThumb imageThumb mt-2 mb-4"><img src="/images/customer-focused.jpg" alt="" class="imgResponsive" /></div>
                     <p>GCC has the ability to offer customers lower priced options to branded equivalents that carry a premium price, without sacrificing any quality or service support. Proper handling, quality, and regulatory compliance of our ingredients is guaranteed to our customers and is absolutely necessary given the critical nature that these ingredients play in the finished products. Through it’s dedicated sales force for different regions and industry segments, Global Chemicals Corporation team is able to offer dedicated customer service in terms of timely response & technical support.</p>
                  </div>
               </div>              
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default CustomerFocused;
