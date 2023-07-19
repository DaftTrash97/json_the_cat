const request = require('request');

const breedFetcher = function(breedName) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    console.log(data[0].description);

  });
};
const inputBreed = process.argv[2];
breedFetcher(inputBreed);