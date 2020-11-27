import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
	
	let [ready, setReady] = useState(false);
	let [weatherData, setWeatherData] = useState({});

	function handleResponse(response){


		setWeatherData({
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			city: response.data.name,
			humidity: response.data.main.humidity,
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
			description: response.data.weather[0].description
		
		});

		setReady(true);
		}

		if (ready) {
			  return (
   <div className="container">
	   <form>
		   <input type="search"
		   placeholder="Enter a city..."
		   className="form-control" />
		   <input type="submit" value="Search" className="btn" />
	   </form>
	   <h1>{weatherData.city}</h1>
	   <div className="image">
		   <img
		   src={weatherData.iconUrl}
		   alt={weatherData.description}
		   className="weatherIcon"
		   />
		   
	   </div>
	   		   Saturday 03:00 <br></br>



		   <div className= "description">{weatherData.description}
		   <div className="temperature">{Math.round(weatherData.temperature)}</div>
		   Precipitation: <br></br>
		   Humidity: {weatherData.humidity} %<br></br>
		   Wind: {weatherData.wind} km/h <br></br>
		      </div>

	  
   <div className="row">
	   <div className="col-6">
		   
				   Sunday
			   
				   Monday
			   
				   Tuesday
			   
				   Wednesday
			   
				   Thursday
			   
				   Friday
			   
   </div>
   </div>
   </div> 
  );

	} else {
	let city = "London";
	let apiKey = "eeb8f7e85a1864933f31f435c249cf5b";
	let apiUrl = `http://api.openweathermap.org/data/2.5/weather?
	q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);

	return "The current weather is loading";

	}
}    