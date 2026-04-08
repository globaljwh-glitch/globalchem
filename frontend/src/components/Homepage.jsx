import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../Axios';  

function HomeProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/home-products');
      setProducts(res.data.products);
    } catch (err) {
      console.error('Error fetching home products:', err);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="productTable"> 
          <table className="table table-striped text-start">
            <thead>
              <tr>
                <th scope="col">CHEMICAL NAME</th>
                <th scope="col">PRODUCT CODE</th>
                <th scope="col">BRAND NAME</th>
                <th scope="col">CAS NUMBER</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map(product => (
                  <tr key={product.id}>
                    <td data-label="CHEMICAL NAME">
                          <Link to={`/products/${product.slug}`}> {product.chemical_name} </Link>
                        </td>
                    <td>{product.product_code}</td>
                    <td>{product.brand_name}</td>
                    <td>{product.cas_number}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No products available.</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="text-center">
            <a href="/products" className="customBtn01">View All Products</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductTable;
