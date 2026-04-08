import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../Axios';

function CareersList() {

    const [careers, setCareers] = useState([]);
    const [search, setSearch] = useState('');
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
    });
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const fetchCareers = async (page, search) => {
        try {
            setLoading(true);

            const res = await axios.get(`api/careers`, {

                params: { page, search },
            });

            console.log("API Response:", res.data);

            setCareers(res.data.data);
            setPagination({
                current_page: res.data.current_page,
                last_page: res.data.last_page,
            });
        } catch (error) {
            console.error("Error fetching careers:", error);
            setCareers([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case '1':
                return 'Active';
            case '2':
                return 'Inactive';
            case '3':
                return 'Deleted';
            default:
                return 'Unknown';
        }
    };
            
    const navigate = useNavigate();
    const handleApplyClick = (job) => {
        navigate(`/careers/${job.slug}`);
      };

    useEffect(() => {
        fetchCareers(page, search);
    }, [page, search]);

    const renderPagination = () => {
        let pages = [];
        for (let i = 1; i <= pagination.last_page; i++) {
            pages.push(
                <li className="page-item" key={i}>
                    <button
                        className={`page-link ${page === i ? 'active' : ''}`}
                        onClick={() => setPage(i)}
                    >
                        {i}
                    </button>
                </li>
            );
        }

        return (
            <div className="paginationBlock">
                <ul className="pagination justify-content-end mb-0">
                    <li className="page-item">
                        <button
                            className="page-link"
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                        >
                            &laquo;
                        </button>
                    </li>
                    {pages}
                    <li className="page-item">
                        <button
                            className="page-link"
                            disabled={page === pagination.last_page}
                            onClick={() => setPage(page + 1)}
                        >
                            &raquo;
                        </button>
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <section className="contentContainer positionRelative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 m-auto">
                        <h1>WE ARE HIRING!</h1>
                        <p>GCC is committed to continuous expansion and understands that our success relies on attracting skilled professionals in the industry. If your expertise aligns with our mission, we’d love to connect and explore how you can become a valuable part of the team. At GCC, we provide a dynamic, growth-oriented, and supportive work environment where you can excel. Join us today—at GCC, “we deliver excellence, innovation, and reliability!”</p>


                        <div className="careerTable mt-4">
                        <div className="searchProduct d-flex">
                            <div className="searchSite d-flex ms-auto">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={handleSearch}
                                    className="search-field"
                                    placeholder="Search Job Title or Department..."
                                    autoComplete="off"
                                />
                                <button className="search-submit">
                                    <i className="fa-solid fa-search"></i>
                                </button>
                            </div>
                        </div>
                            <table className="table table-striped tableResponsive">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Department</th>
                                        <th>Status</th>
                                        <th width="150">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="4" className="text-center">Loading careers...</td>
                                        </tr>
                                    ) : careers.length > 0 ? (
                                        careers.map((job) => (
                                            <tr key={job.id}>
                                                <td>{job.title}</td>
                                                <td>{job.department}</td>
                                                <td>{getStatusLabel(job.status)}</td>
                                                <td>
                                                    <button
                                                        onClick={() => handleApplyClick(job)}
                                                        className="customBtn01Small m-0 customBtn01"
                                                    >
                                                        Apply
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center">No career opportunities available.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            {renderPagination()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CareersList;
