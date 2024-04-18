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
