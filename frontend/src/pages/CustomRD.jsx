import Layout from '../components/Layout';

const CustomRD = () => {
 
  return (
    <Layout>
      <section class="innerBanner positionRelative">
         <div class="innerBannerImage">
            <div class="bannerOverlay"></div>
            <img src="/images/inner-banner/regulatory-affairs.png" alt="" />
         </div>
         <div class="innerBannerContent">
            <div class="container">
               <h1 class="text-center">What is Contract R&D?</h1>
            </div>
         </div>
      </section>
      <section class="contentContainer positionRelative">
         <div class="container">
            <div class="row">
               <div class="col-md-12 order-md-1 order-1">
                  <div>
                     <div class="floatLeftThumb imageThumb mt-2 mb-4"><img src="/images/regulatory-affairs-02.png" alt="" class="imgResponsive" /></div>
                     <p>Contract Research and Development (R&D) is the initial stage in an industry that allows you to research while making the product. This stage represents and decides your future result. The more effectively you perform research, the better will be your product’s result. The research of a product begins when a company test R& D of a potential product. This process is very important to discover new technology, science, etc. to create new products. After the research is done, the development process starts in which the product is developed and further on the company can market and sell the developed product.</p>
                  </div>
               </div>              
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default CustomRD;
