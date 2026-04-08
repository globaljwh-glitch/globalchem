import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../Axios';
import Layout from '../components/Layout';

function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productPackages, setProductPackages] = useState([]);
  const [productIndustries, setProductIndustries] = useState([]);
  const [productClasses, setProductClasses] = useState([]);
  const [productOthers, setProductOthers] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${slug}`);
        const prod = res.data.product;
        setProduct(prod);
        setProductPackages(prod.packages ? JSON.parse(prod.packages) : []);
        setProductIndustries(prod.industries ? JSON.parse(prod.industries) : []);
        setProductClasses(prod.product_classes ? JSON.parse(prod.product_classes) : []);
        setProductOthers(prod.other ? JSON.parse(prod.other) : []);
      } catch (err) {
        console.error('Failed to fetch product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  // Check if product detail section has any data to show
  const hasProductDetails =
    product.appearance ||
    product.description ||
    product.function ||
    product.synonyms ||
    product.storage ||
    productPackages.length > 0 ||
    productIndustries.length > 0 ||
    productClasses.length > 0 ||
    productOthers.length > 0;

  return (
    <Layout>
      <section className="innerBanner positionRelative">
        <div className="innerBannerImage">
          <div className="bannerOverlay innerBannerProductOverlay"></div>
        </div>
        <div className="innerBannerContent">
          <div className="container">
            <h1 className="text-center">{product.chemical_name}</h1>
          </div>
        </div>
      </section>

      <section className="contentContainer positionRelative">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <Link className="customBtn01 mt-0 mb-5" to="/products">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Back to Products
              </Link>
            </div>
          </div>

          {(product.product_code || product.cas_number || product.brand_name || product.formula) && (
            <div className="row">
              <div className="col-lg-12">
                <div className="productTable mt-0">
                  <h3>Product Info</h3>
                  <table className="table table-striped tableResponsive">
                    <tbody>
                      <tr>
                        {product.product_code && (
                          <>
                            <td className="headingBlock"><strong>Product Code:</strong></td>
                            <td data-label="Product Code:">{product.product_code}</td>
                          </>
                        )}
                        {product.cas_number && (
                          <>
                            <td className="headingBlock"><strong>CAS Number:</strong></td>
                            <td data-label="CAS Number:">{product.cas_number}</td>
                          </>
                        )}
                      </tr>
                      <tr>
                        {product.brand_name && (
                          <>
                            <td className="headingBlock"><strong>Brand Name:</strong></td>
                            <td data-label="Brand Name:">{product.brand_name}</td>
                          </>
                        )}
                        {product.formula && (
                          <>
                            <td className="headingBlock"><strong>Formula:</strong></td>
                            <td data-label="Formula:">{product.formula}</td>
                          </>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Only render Product Detail section if it has some data */}
          {hasProductDetails && (
            <div className="row">
              <div className="col-lg-12">
                <div className="productTable">
                  <h3>Product Detail</h3>
                  <table className="table table-striped tableResponsive">
                    <tbody>
                      {product.appearance && (
                        <tr>
                          <td className="headingBlock"><strong>Appearance:</strong></td>
                          <td data-label="Appearance:">{product.appearance}</td>
                        </tr>
                      )}
                      {product.description && (
                        <tr>
                          <td className="headingBlock"><strong>Description:</strong></td>
                          <td data-label="Description:">{product.description}</td>
                        </tr>
                      )}
                      {product.function && (
                        <tr>
                          <td className="headingBlock"><strong>Function:</strong></td>
                          <td data-label="Function:">{product.function}</td>
                        </tr>
                      )}
                      {product.synonyms && (
                        <tr>
                          <td className="headingBlock"><strong>Synonyms:</strong></td>
                          <td data-label="Synonyms:">{product.synonyms}</td>
                        </tr>
                      )}
                      {product.storage && (
                        <tr>
                          <td className="headingBlock"><strong>Storage:</strong></td>
                          <td data-label="Storage:">{product.storage}</td>
                        </tr>
                      )}
                      {productPackages.filter(pack => typeof pack === 'string' && pack.trim() !== '').length > 0 && (
                        <tr>
                          <td className="headingBlock"><strong>Packages:</strong></td>
                          <td data-label="Packages:">
                            <ul className="tableProductDetailList">
                              {productPackages.filter(pack => typeof pack === 'string' && pack.trim() !== '').map((pack, idx) => (
                                <li key={idx}>{pack}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      )}

                      {productIndustries.filter(ind => typeof ind === 'string' && ind.trim() !== '').length > 0 && (
                        <tr>
                          <td className="headingBlock"><strong>Industry:</strong></td>
                          <td data-label="Industry:">
                            <ul className="tableProductDetailList">
                              {productIndustries.filter(ind => typeof ind === 'string' && ind.trim() !== '').map((ind, idx) => (
                                <li key={idx}>{ind}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      )}

                      {productClasses.filter(cls => typeof cls === 'string' && cls.trim() !== '').length > 0 && (
                        <tr>
                          <td className="headingBlock"><strong>Product Class:</strong></td>
                          <td data-label="Product Class:">
                            <ul className="tableProductDetailList">
                              {productClasses.filter(cls => typeof cls === 'string' && cls.trim() !== '').map((cls, idx) => (
                                <li key={idx}>{cls}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      )}

                      {productOthers.filter(oth => typeof oth === 'string' && oth.trim() !== '').length > 0 && (
                        <tr>
                          <td className="headingBlock"><strong>Other:</strong></td>
                          <td data-label="Other:">
                            <ul className="tableProductDetailList">
                              {productOthers.filter(oth => typeof oth === 'string' && oth.trim() !== '').map((oth, idx) => (
                                <li key={idx}>{oth}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      )}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-lg-12">
              <Link to="/quote-request" className="customBtn01">Request a Quote</Link>
              <Link to="/samples" className="customBtn01">Request a Sample</Link>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}

export default ProductDetail;
