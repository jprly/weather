const key = 'HM3FImzGv7SJrgp6gaxHROjDTEfgbT4X';

const getLocation = async (city) => {
    
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`

    const getData = await fetch(base + query);
    const data = await getData.json();
    // console.log('getLocation working!');  

    return data[0];

};

const getWeather = async (locationKey) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationKey}?apikey=${key}`;

    const getData = await fetch(base + query);
    const data = await getData.json();

    // console.log('getWeather working!')

    return data[0];
}

// getLocation('Atlanta').then((data) => {
//     // console.log(data);
//     return getWeather(data.Key);
//     }).then(data => console.log(data))
//       .catch(error => console.log(error));