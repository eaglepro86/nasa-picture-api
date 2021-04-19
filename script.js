
// Nasa api
const count = 10;
const apikey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=${count}`;

let resultsArray = [];

// Async fetch request
// Get 10 images fron nasa api

async function getNasaPictures() {
    try {

        const response = await fetch(apiUrl);
        const resultsArray = response.json();
        console.log(resultsArray);
    }
    catch (err) {
        console.log(err);
    }
}

// On load
getNasaPictures();