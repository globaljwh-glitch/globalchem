import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import axios from  '../Axios';

const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventDetails();
  }, []);

  const fetchEventDetails = async () => {
    try {
      const res = await axios.get(`/api/events/${id}`);
      setEvent(res.data.event);
    } catch (err) {
      console.error('Error fetching event details:', err);
    }
  };

  return (
    <Layout>
      {/* Inner Banner */}
      <section className="innerBanner positionRelative">
        <div className="innerBannerImage">
          <div className="bannerOverlay"></div>
          <img
            src="/images/inner-banner/careers.jpg"
            alt=""
          />
        </div>
        <div className="innerBannerContent">
          <div className="container">
            <h1 className="text-center">
              {event ? event.name : 'Loading...'}
            </h1>
          </div>
        </div>
      </section>

      {/* Event Detail Section */}
      <section className="contentContainer positionRelative">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              {event ? (
                <>
                  <h1 className="text-center mb-5">{event.event_name}</h1>
                  <div dangerouslySetInnerHTML={{ __html: event.description }} />
                </>
              ) : (
                <p>Loading event details...</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetailsPage;
