const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.static('dist'));
console.log(__dirname);

const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KRY;
console.log(`your api key is ${API_KEY}`);

app.use(bodyParser.text());

const baseURL = 'http://api.meaningcloud.com/sentiment-2.1';

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.post('/api', async (req, res) => {
  const apiURL = `${baseURL}key=${apiKey}$url=${req.body.url}$lang=en`;

  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data);
  res.send(data);

  // const response = await fetch(
  //   `${baseURL}?key=${API_KEY}&lang=en&url=${req.body.url}`
  // );

  // try {
  //   const data = await response.json();
  //   res.send(data);
  //   console.log(data);
  // } catch (error) {
  //   console.log('error', error);
  // }
});

// app.get('/test', function (req, res) {
//   res.send(mockAPIResponse);
// });
