const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
  try {
    const response = await fetch('https://formsubmit.co/afshaiqbal0511@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other required headers here
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
