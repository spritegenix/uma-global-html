import React, { useState } from 'react';

const ContactForm = () => {
  // Set up state for form values, response message, and button state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Set loading state to true and reset response message
    setIsLoading(true);
    setResponseMessage('');

    // Serialize the form data
    const formBody = new URLSearchParams(formData);

    try {
      // Send data to mail.php endpoint
      const response2 = await fetch('mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody, // Send data to mail.php as well
      });

      if (!response2.ok) {
        throw new Error('Failed to send to mail.php');
      }

      const result = await response2.text();
      setResponseMessage(result);
      setIsSuccess(true); // Set success flag

      // Clear the form after success
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setResponseMessage(
        'Oops! An error occurred and your message could not be sent.'
      );
      setIsSuccess(false);
    } finally {
      setIsLoading(false); // Set loading state back to false
      setInterval(() => {
        setIsSuccess(false);
      }, 2000);
    }
  };
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row wow animate__animated animate__fadeIn">
        <div className="col-md-6">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Your name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Your email *"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Message / Note"
              rows={8}
              name="message"
              defaultValue={''}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-12">
          <button
            className="btn btn-brand-1-big"
            type="submit"
            defaultValue="Submit Now"
          >
            {isLoading ? 'Sending...' : isSuccess ? 'Sent' : 'Send Message'}
          </button>
          <div className={`ajax-response ${isSuccess ? 'success' : 'error'}`}>
            {responseMessage}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
