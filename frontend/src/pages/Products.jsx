import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductList'; // adjust the path if needed
import Layout from '../components/Layout';

const Products = () => {

  return (
    <Layout>
      <section className="innerBanner positionRelative">
        <div className="innerBannerImage">
          <div className="bannerOverlay"></div>
          <img src="/images/inner-banner/products.png" alt="" />
        </div>
        <div className="innerBannerContent">
          <div className="container">
            <h1 className="text-center">Products</h1>
          </div>
        </div>

      </section>

      <ProductList />

    </Layout>
  );
};

export default Products;
