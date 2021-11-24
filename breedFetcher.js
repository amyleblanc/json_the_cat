const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const options = {
    method: 'GET',
    url: `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    headers: { 'x-api-key': 'DEMO-API-KEY' }
  };

  request(options, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    let breedInfo = JSON.parse(body); // asign variable to returned body info (returned as an array)
    let desc = breedInfo[0].description; // access first item in array [0] to get description value of object
    callback(null, desc);
  });
};

module.exports = { fetchBreedDescription };