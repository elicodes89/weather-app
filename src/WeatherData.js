import React from "react";
import TheDate from "./TheDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherData(props){
	return (
		<div className="WeatherData">
	<h1>{props.data.city}</h1>
	<WeatherTemp celsius={props.data.temperature}  />
	   <div className="float-left">
		   <WeatherIcon code={props.data.icon} />
		   		   
	   </div>
		<div className="fecha"> <TheDate date={props.data.date} /></div>
		<div className= "text-capitalize">{props.data.description}
		   Precipitation: <br></br>
		   Humidity: {props.data.humidity} %<br></br>
		   Wind: {props.data.wind} km/h <br></br>
	</div>
   </div>
	);
}