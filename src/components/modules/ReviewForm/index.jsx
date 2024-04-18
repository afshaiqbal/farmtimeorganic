import React, { useState } from "react";
import "./index.scss";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/submit-form', { // Proxy server endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Form submitted successfully!');
        // Clear form data after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
      alert('Form submission failed. Please try again later.');
    }
  };

  return (
    <div className='review-form'>
      <h2 title="Queries">
        If you have any query, please reach out to us with your message and
        we'll get back to you.
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Message:
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
