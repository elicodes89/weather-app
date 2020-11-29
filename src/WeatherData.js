import React from "react";
import TheDate from "./TheDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";


export default function WeatherData(props){
	return (
		<div className="WeatherData">
	<h1>{props.data.city}</h1>
			<div className="fecha"> <TheDate date={props.data.date} /></div>

	
	   <div className="temp">
		   		<WeatherTemp celsius={props.data.temperature} />
		<WeatherIcon code={props.data.icon} />		   		   
	   </div>
		<div className="details">
		<div className= "text-capitalize">{props.data.description}<br></br>
		   Precipitation: <br></br>
		   Humidity: {props.data.humidity} %<br></br>
		   Wind: {props.data.wind} km/h <br></br>
		   </div>
	</div>
   </div>
	);
}