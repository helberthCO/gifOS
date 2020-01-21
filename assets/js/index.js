(function () {
    
    const API_URL = 'https://api.giphy.com/v1/gifs/trending';
    const KEY = 'AGsk1t182PoJY4eVTiFGNXa2Blc0idb8';
    const RANDOM = document.querySelector('#random')

    const apiCall = async (url, key, limit = 10) => {
        const apiCall = await fetch(`${url}?api_key=${key}&limit=${limit}`);
        const response = await apiCall.json();
        return response;
    }

    apiCall(API_URL, KEY, 45)
        .then(allData => {
            
            const mainData = allData.data;
            let eachGif = mainData.map(elem => elem.images);
            let gifSize = eachGif.map(elem => elem['fixed_height_still']);
            
            gifSize.map(elem => {
                
                let imageTag = document.createElement('img');

                imageTag.setAttribute('src', elem.url);
                RANDOM.appendChild(imageTag)    
            })
        })
        .catch(error => console.log(error));

})()