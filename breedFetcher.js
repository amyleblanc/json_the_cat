const request = require('request');

const breed = process.argv.slice(2);

const options = { 
  method: 'GET',
  url: `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  headers: { 'x-api-key': 'DEMO-API-KEY' } 
};

request(options, function (error, response, body) {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }
  console.log(JSON.parse(body));
  return;
});