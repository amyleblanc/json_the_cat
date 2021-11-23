const request = require('request');

const breed = process.argv.slice(2);

const options = {
  method: 'GET',
  url: `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  headers: { 'x-api-key': 'DEMO-API-KEY' }
};

request(options, function(error, response, body) {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    return;
  }
  let breedInfo = JSON.parse(body); // asign variable to returned body info (returned as an array)
  console.log(breedInfo[0].description); // access first item in array [0] to get description value of object
});