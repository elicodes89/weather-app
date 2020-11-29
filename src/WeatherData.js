import React from "react";
import TheDate from "./TheDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherData(props){
	return (
		<div className="WeatherData">
	<h1>{props.data.city}</h1>
	   <div className="image">
		   <WeatherIcon code={props.data.icon}
		   <img
		   src={props.data.iconUrl}
		   alt={props.data.description}
		   className="weatherIcon"
		   />		   
	   </div>
<div className="fecha">{props.data.date.getHours()}</div>	
	   <div className= "text-capitalize">{props.data.description}
		   <div className="temperature">{Math.round(props.data.temperature)}</div>
		   Precipitation: <br></br>
		   Humidity: {props.data.humidity} %<br></br>
		   Wind: {props.data.wind} km/h <br></br>
	</div>
   </div>
	);
}