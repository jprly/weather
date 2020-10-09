const cityForm = document.querySelector('form');
const displayTemp = document.querySelector('#temperature');
const cityInfoCard = document.querySelector('#cityInfoCard');
const cityName = document.querySelector('#cityName');
const weatherIcon = document.querySelector('#weatherIcon'); 
const weatherText = document.querySelector('#weatherText');


const updateUI = (data) => {
    const cityDets = data.cityDets;
    const weather = data.weather;
    displayTemp.innerHTML = weather.Temperature.Imperial.Value;
    cityName.innerHTML = cityDets.EnglishName;
    weatherIcon.src = `/icons/${weather.WeatherIcon}.svg`
    weatherText.innerHTML = `CURRENTLY: ${weather.WeatherText.toUpperCase()}`



};

const updateCity = async (city) => {
    const cityDets = await getLocation(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets: cityDets,
        weather: weather
    };
}

cityForm.addEventListener('submit', (e) => {
    //prevent default
    e.preventDefault();


    //get city
    const cityValue = cityForm.city.value.trim();
    cityForm.reset();

    //update ui
    updateCity(cityValue)
        .then((data) => {
            console.log(data);
            updateUI(data);
        //    displayTemp.innerHTML = data.weather.Temperature.Imperial.Value;
        })
        .catch(error => console.log(error));

});