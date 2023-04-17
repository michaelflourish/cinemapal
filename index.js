const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  const data = {
    message: 'Hello from the API!',
  };
  res.json(data);
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});

