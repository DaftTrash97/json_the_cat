const { fetchBreedDescription } = require('./breedFetcher');

const inputBreed = process.argv[2];

fetchBreedDescription(inputBreed, (error, body) => {
    if (error) {
        console.log(error);
    } else {
        console.log(body);
    }
});