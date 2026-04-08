import React, { useEffect, useState } from 'react';
import axios from '../Axios';

const Partners = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        axios.get('api/partners')
            .then(response => {
                if (response.data.partners) {
                    setPartners(response.data.partners);
                }
            })
            .catch(error => {
                console.error('Error fetching partners:', error);
            });
    }, []);

    return (
        <section className="contentContainer positionRelative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="text-center">Our Partners</h1>
                        <p className="text-center paddingLR200">
                            We represent leading global producers of chemicals, natural & synthetic ingredients, specialty & performance materials.
                        </p>
                    </div>
                </div>

                <div className="partnerList mt-4">
                  
                     {partners.map((partner, index) => (
                         <div className="shadowBox partnerListBlocks text-center" key={index}>
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-12 flexCol">
                                 <div className="logo-icon">
                                    <img
                                       src={`https://admin1.globalchemicalscorp.com/${partner.logo}`}
                                       alt={partner.name}
                                       style={{ maxHeight: '100px', objectFit: 'contain' }}
                                    />
                                 </div>
                              </div>
                              <div className="col-lg-7 col-md-6 col-sm-12 flexCol">
                                 <h5>{partner.name}</h5>
                              </div>
                              <div className="col-lg-2 col-md-3 col-sm-12 flexCol readMoreCol">
                                <a href={partner.website || '#'} className="customBtn01 readMore" target="_blank" rel="noopener noreferrer">Read More</a>
                              </div>
                            </div>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
