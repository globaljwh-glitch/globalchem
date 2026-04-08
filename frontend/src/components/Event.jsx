import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../Axios';

function EventTable() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const res = await axios.get('/api/events');
            setEvents(res.data.events);
        } catch (err) {
            console.error('Error fetching events:', err);
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
                        <h1>OTHER EVENTS</h1>
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
                                    {events.length > 0 ? (
                                        events.map((event, index) => (
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
                                            <td colSpan="3">No events available.</td>
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
