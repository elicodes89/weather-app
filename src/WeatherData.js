import React from "react";

export default function WeatherData(props){
	return (
		<div className="WeatherData">
			<form>
		   <div className="searchBar">
			   
		   <input type="search"
		   placeholder="Enter a city..."
		   className="searchBar" />
		   <input type="submit" value="Search" className="btn" />

	  	   </div>
	   </form>
	   <h1>{props.data.city}</h1>
	   <div className="image">
		   <img
		   src={props.data.iconUrl}
		   alt={props.data.description}
		   className="weatherIcon"
		   />
		   
	   </div>
	   		   <div className="fecha">{props.data.date}</div>

	   <div className= "text-capitalize">{props.data.description}
		   <div className="temperature">{Math.round(props.data.temperature)}</div>
		   Precipitation: <br></br>
		   Humidity: {props.data.humidity} %<br></br>
		   Wind: {props.data.wind} km/h <br></br>
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
}