const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '654d5ac7c4mshce362d3788330f8p13129bjsn9eef477735b4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
	.then(response => response.json())
    .then(response => {
        
        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        cloud_pct2.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like 
        min_temp.innerHTML = response.min_temp 
        humidity.innerHTML = response.humidity 
        humidity2.innerHTML = response.humidity 
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    //to prevent re-load
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Chandigarh")


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi' , options)
	.then(response => response.json())
    .then(response => {
        
        console.log(response)

        cloud_pct2.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp 
        humidity3.innerHTML = response.humidity 
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata' , options)
	.then(response => response.json())
    .then(response => {
        
        console.log(response)

        cloud_pct3.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp 
        humidity4.innerHTML = response.humidity 
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai' , options)
	.then(response => response.json())
    .then(response => {
        
        console.log(response)

        cloud_pct4.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp 
        humidity5.innerHTML = response.humidity 
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhopal' , options)
	.then(response => response.json())
    .then(response => {
        
        console.log(response)

        cloud_pct5.innerHTML = response.cloud_pct
        temp6.innerHTML = response.temp 
        humidity6.innerHTML = response.humidity 
    })
    .catch(err => console.error(err));

    


