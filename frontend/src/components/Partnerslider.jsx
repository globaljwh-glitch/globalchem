import React, { useEffect, useState } from 'react';
import axios from '../Axios';

const Partnerslider = () => {
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
        <section className="contentContainer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="text-center">Manufacturing Partners</h1>
                        <p className="text-center paddingLR200">
                            We represent leading global producers of chemicals, natural & synthetic ingredients, specialty & performance materials.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="marquee">
                            <div className="marquee_group">
                                <div className="marquee-content d-flex">
                                    {partners.map((partner, index) => (
                                        <div className="ourPatnersBlockSlide" key={index}>
                                            <img
                                                src={`https://admin1.globalchemicalscorp.com/${partner.logo}`}
                                                alt={partner.name || `Partner ${index + 1}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partnerslider;
