// CareerDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../Axios';

function CareerDetail({ onJobIdChange }) {
    const { slug } = useParams();
    const [career, setCareer] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchCareerDetail = async () => {
        try {

            const res = await axios.get(`/api/careers/${slug}`);

            if (res.data.length > 0) {
                setCareer(res.data[0]);
                if (onJobIdChange) {
                    onJobIdChange(res.data[0].id); // Send career id up to parent
                }
            } else {
                setCareer(null);
                if (onJobIdChange) {
                    onJobIdChange(null);
                }
            }
        } catch (error) {
            console.error('Error fetching career detail:', error);
            if (onJobIdChange) {
                onJobIdChange(null);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCareerDetail();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!career) return <p>Career not found.</p>;

    return (
        <>
            {/* Banner */}
            <section className="innerBanner positionRelative">
                <div className="innerBannerImage">
                    <div className="bannerOverlay"></div>
                    <img
                        src="https://globalchemicalscorp.com/wp-content/uploads/2025/03/banner-aboutus2.png"
                        alt=""
                    />
                </div>
                <div className="innerBannerContent">
                    <div className="container">
                        <h1 className="text-center">{career.title}</h1>
                    </div>
                </div>
            </section>

            {/* Career Detail */}
            <section className="contentContainer positionRelative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <h1 className="text-center mb-5">{career.title}</h1>

                            <h4 className="textGreen">Job Description</h4>
                            <div dangerouslySetInnerHTML={{ __html: career.description }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CareerDetail;
