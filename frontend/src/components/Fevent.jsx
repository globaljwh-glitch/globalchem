import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../Axios';

function EventTable() {
    const [fevents, setFevents] = useState([]);

    useEffect(() => {
        fetchFevents();
    }, []);

    const fetchFevents = async () => {
        try {
            const res = await axios.get('/api/fevents');
            setFevents(res.data.events);
        } catch (err) {
            console.error('Error fetching future events:', err);
        }
    };

    const formatDate = (dateStr) => {
        const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    };

    return (
        <section className="contentContainer positionRelative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 m-auto">
                        <h1>FUTURE EVENTS</h1>
                        <p>Industry events present a valuable opportunity to connect with key executives from GCC, a global leader in chemicals and specialty solutions. These events provide an ideal platform to gain insight into our expertise, explore collaboration opportunities, and learn how our innovative solutions can enhance your business operations. Whether you're looking to build partnerships, expand your professional network, or stay informed on the latest industry advancements, engaging with our team at these gatherings is a great way to start. We look forward to meeting you and talking about how we can work together!</p>
                        <div className="eventTable mt-3">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Event</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fevents.length > 0 ? (
                                        fevents.map((event, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <Link to={`/event/${event.id}`}>
                                                        {event.event_name}
                                                    </Link>
                                                </td>
                                                <td>
                                                    {formatDate(event.date_from)} to {formatDate(event.date_to)}
                                                </td>
                                                <td>{event.location}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3">No future events available.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventTable;
