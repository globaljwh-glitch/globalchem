import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from '../Axios';
import Layout from '../components/Layout';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProductSearchResults() {
  const query = useQuery();
  const searchTerm = query.get('q') || '';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`/api/product-search?q=${searchTerm}`);
        setProducts(res.data.products || []);
      } catch (err) {
        console.error('Product search failed:', err);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchResults();
    }
  }, [searchTerm]);

  return (
    <Layout>
      <div className="container py-5">
        <h2>Product Search Results for: <strong>"{searchTerm}"</strong></h2>

        {loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          <div className="table-responsive mt-4">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">CHEMICAL NAME</th>
                  <th scope="col">PRODUCT CODE</th>
                  <th scope="col">BRAND NAME</th>
                  <th scope="col">CAS NUMBER</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <Link to={`/products/${p.slug}`}>{p.chemical_name}</Link>
                    </td>
                    <td>{p.product_code}</td>
                    <td>{p.brand_name}</td>
                    <td>{p.cas_number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </Layout>
  );
}

export default ProductSearchResults;
