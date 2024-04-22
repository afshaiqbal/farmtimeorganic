import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import "./index.scss";

const ReviewForm = () => {
  const form = useRef();
  const navigate = useNavigate(); 
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_rckc8le', 'template_9tl4kbi', form.current, {
        publicKey: 'boa7iIeA9bRORjT1f',
      });
      form.current.reset();
      // Redirect to thank you page
      navigate('/thank-you');
    } catch (error) {
    }
  };

  return (
    <div className="review-form">
      <h2 title="Queries">
        If you have any query, please reach out to us with your message and
        we'll get back to you.
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-group'>
          <label>Name:
            <input type="text" name="user_name" required/>
          </label>
        </div>
        <div className='form-group'>
          <label>Email:
            <input type="email" name="user_email" required/>
          </label>
        </div>
        <div className='form-group'>
          <label>Message:
            <textarea name="message" required></textarea>
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ReviewForm;
