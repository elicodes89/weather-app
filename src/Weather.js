		import React, { useState } from "react";
		import WeatherData from "./WeatherData";
		import axios from "axios";
		import "./Weather.css";


		export default function Weather(props) {
		let [weatherData, setWeatherData] = useState({ ready: false });
		let  [city, setCity] = useState(props.city);	

		function handleResponse(response){
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			city: response.data.name,
			humidity: response.data.main.humidity,
			iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			description: response.data.weather[0].description,
			date: new Date(response.data.dt * 1000)
		
		});
		}
	
		function handleSubmit(event){
			event.preventDefault();
			search();
		}

		function handleCityChange(event){
			setCity(event.target.value);
		}

		function search(){
			let apiKey = "eeb8f7e85a1864933f31f435c249cf5b";
			let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
			axios.get(apiUrl).then(handleResponse);
		}

		if (weatherData.ready) {
			  return (
				<div className="weather">
			<form onSubmit = {handleSubmit}>
		   <div className="searchBar">			   
		   <input type="search"
		   placeholder="Enter a city..."
		   className="searchBar"
		   onChange={handleCityChange} />
		   <input type="submit" value="Search" className="btn" />
	  	   </div>
	   		</form>
			<WeatherData data={weatherData} />
			</div>	   
  );

	} else {
		search();
		return "The current weather is loading";
	}
}
