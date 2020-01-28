const API_URL = 'https://api.giphy.com/v1/gifs';
const KEY = 'AGsk1t182PoJY4eVTiFGNXa2Blc0idb8';
const RANDOM = document.querySelector('#random');

const apiCall = async (url, key, search, limit = 10) => {
    const data = await fetch(`${url}/${search}?api_key=${key}&limit=${limit}`);
    return await data.json();
};

apiCall(API_URL, KEY, 'trending', 45)
    .then(allData => {
        
        const mainData = allData.data;
        let eachGif = mainData.map(elem => elem.images);
        let gifSize = eachGif.map(elem => elem['fixed_height']);
        
        gifSize.map(elem => {
            
            let imageTag = document.createElement('img');

            imageTag.setAttribute('src', elem.url);
            RANDOM.appendChild(imageTag)    
        })
    })
    .catch(error => console.log(error));