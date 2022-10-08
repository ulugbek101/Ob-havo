const btn = document.querySelector('#btn');
const APIKEY = "cb72ff6d7b49cbaee746f3cfb296be4e";
const info = document.querySelector('#info')
const temp = document.querySelector('#temp')

const humidity = document.querySelector('#humidity')
const max_temp = document.querySelector('#max_temp')
const min_temp = document.querySelector('#min_temp')


function weather_parser(city_name) {
    const URL =
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${APIKEY}&units=metric&lang=ru`;
    fetch(URL, {
    })
        .then(response => response.json())
        .then(data => {
            temp.textContent = data.main.temp + " ℃";
            humidity.textContent = data.main.humidity + " %";
            min_temp.textContent = data.main.temp_min + " ℃";
            max_temp.textContent = data.main.temp_max + " ℃";
        })
}

btn.addEventListener('click', () => {
    const cityName = document.querySelector('#country').value;
    if (cityName !== '') {
        weather_parser(cityName);
    }
})


