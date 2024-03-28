const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.post('/api/proxy', async (req, res) => {
  try {
    const response = await axios.post("https://api.chapa.co/v1/transaction/initialize", req.body, {
      headers: {
        'Authorization': 'Bearer CHASECK_TEST-5CQWS1f7qo7lXWn4ZdfdtKgWxf1hW7DA',
        'Content-Type': 'application/json'
      }
    });
    const data = response.data;
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
