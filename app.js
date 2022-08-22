let getWeather = () => {

    let updateCity = document.querySelector("#city").value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=282ce2cf9184464aa6d212909222208&q=${updateCity}`)
        .then((response) => {

            const data = response.data;


            document.getElementById('weather_icon').src = data.current.condition.icon

            document.getElementById('tempC').innerHTML = Math.round(data.current.temp_c) + "°C"
            document.getElementById('city_name').innerHTML = data.location.name + ", " + data.location.region + ", " + data.location.country
            document.getElementById('weather_condition').innerHTML = data.current.condition.text
            document.getElementById('tempF').innerHTML = " Fahrenheit : " + Math.round(data.current.temp_f) + "°F"
            document.getElementById('feels_like').innerHTML = "Feels Like: " + Math.round(data.current.feelslike_c) + "°C";
            document.getElementById('humidity').innerHTML = "Humidity : " + data.current.humidity + "%"

            document.getElementById("visibility").innerText = "Visibility : " + data.current.vis_km + "KM";

            document.getElementById("wind_speed").innerText = "Wind Speed: " + data.current.wind_kph + "KP/H";






        }).catch(function (error) {
            console.log(error);
        })




}

