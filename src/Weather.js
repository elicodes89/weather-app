import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import TheDate from "./TheDate";
import WeatherData from "./WeatherData";

export default function Weather(props) {
	
	let [ready, setReady] = useState(false);
	let [weatherData, setWeatherData] = useState({ ready: false });

	function handleResponse(response){


		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			city: response.data.name,
			humidity: response.data.main.humidity,
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
			description: response.data.weather[0].description,
			date: "Saturday 03:00"
		
		});
		}

		if (weatherData.ready) {
			  return (
   <div className="container">
	   	   <WeatherData data={weatherData} />	   
   </div> 
  );

	} else {
	let apiKey = "eeb8f7e85a1864933f31f435c249cf5b";
	let apiUrl = `http://api.openweathermap.org/data/2.5/weather?
	q=${props.city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);

	return "The current weather is loading";

	}
}    