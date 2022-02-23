const API_KEY = "fecd44e45577d58d2ddc7be948b953d9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:nth-child(3)");
        const city = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const tempHigh = document.querySelector(".temp-low-high span:first-child");
        const tempLow = document.querySelector(".temp-low-high span:last-child");
        city.innerText = `${data.name}-gu`;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${Math.round(data.main.temp)}°`;
        tempHigh.innerText = `H:${Math.round(data.main.temp_max)}°`;
        tempLow.innerText = `L:${Math.round(data.main.temp_min)}°`;
        
    });
}



function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);