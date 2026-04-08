import React, { useState } from 'react';
import Layout from '../components/Layout';
import CareerDetail from '../components/CareerDetail';
import axiosInstance from '../Axios';

const CareerDetailPage = () => {
  const [jobId, setJobId] = useState(null);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    resume: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required';
    else if (!/^\d{10,15}$/.test(formData.phone)) tempErrors.phone = 'Phone number is invalid';
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.resume.trim()) tempErrors.resume = 'Resume is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!jobId) {
      setStatus('Job ID not found yet. Please wait.');
      return;
    }

    const submitData = { ...formData, job_id: jobId };

    try {
      await axiosInstance.get('/sanctum/csrf-cookie');

      const response = await axiosInstance.post('/api/apply-career', submitData);

      // Check for successful response
      if (response.data.status === 1) {
        setStatus('Application submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          resume: '',
        });
        setErrors({});
      } else {
        setStatus(response.data.error || 'Error submitting application.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <Layout>
      <CareerDetail onJobIdChange={setJobId} />
      <section className="contentContainer greyBg positionRelative">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <h1 className="text-center">Apply Now</h1>
              <div className="row">
                <div className="col-lg-9 m-auto">
                  <div className="formBlockOuter mt-5">
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="row">
                        {['name', 'email', 'phone', 'subject'].map((field) => (
                          <div className="col-md-6" key={field}>
                            <div className="form-group">
                              <label>
                                {field.charAt(0).toUpperCase() + field.slice(1)} <span>*</span>
                              </label>
                              <input
                                type="text"
                                name={field}
                                className="form-control"
                                placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                value={formData[field]}
                                onChange={handleChange}
                              />
                              {errors[field] && <small className="text-danger">{errors[field]}</small>}
                            </div>
                          </div>
                        ))}
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Copy and paste your resume here: <span>*</span></label>
                            <textarea
                              name="resume"
                              rows="9"
                              className="form-control"
                              placeholder="Enter your resume details"
                              value={formData.resume}
                              onChange={handleChange}
                            ></textarea>
                            {errors.resume && <small className="text-danger">{errors.resume}</small>}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group text-end">
                            <input
                              type="submit"
                              value="SUBMIT"
                              className="wpcf7-form-control wpcf7-submit btn btn-primary btn-lg btn-block customBtn01 d-inline-block"
                              style={{ width: '200px' }}
                            />
                          </div>
                        </div>
                        {status && <div className="alert alert-info mt-3">{status}</div>}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerDetailPage;
