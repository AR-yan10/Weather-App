

    // script.js

    const locationInput = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const weatherDiv = document.getElementById('weather');
    const errorDiv = document.getElementById('error');
    const unitsSelect = document.getElementById('units');

    // OpenWeatherMap API key 
    const apiKey = '90c3c8c6ba62f35624021d2ccf2f5b80';

    submitBtn.addEventListener('click', getWeather);

    function getWeather() {

    // get location
    const location = locationInput.value;
    
    // make API request
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${'90c3c8c6ba62f35624021d2ccf2f5b80'}&units=${unitsSelect.value}`)
    .then(response => response.json())
    .then(data => {
        // handle success
        showWeather(data);
    })
    .catch(error => {
        // handle error
        showError('Error fetching weather data');  
    });

    }

    function showWeather(data) {
    // display weather data
    let html = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °${unitsSelect.value === 'metric' ? 'C' : 'F'}</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    
    `;

    weatherDiv.innerHTML = html;
    }

    function showError(message) {
    // show error message 
    errorDiv.innerHTML = message;  
    }


