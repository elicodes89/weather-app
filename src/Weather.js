import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
	let apiKey = "eeb8f7e85a1864933f31f435c249cf5b";
	let apiUrl = `http://api.openweathermap.org/data/25/weather?
	q=${city}&appid=${apiKey}&units=metric`;
	let city = "London";
	let [temperature, setTemperature] = useState(null);
	let [ready, setReady] = useState(false);

	function handleResponse(response){
		setTemperature(response.data.main.temp);
		setReady(true);
		}
  return (
   <div className="container">
	   <form>
		   <input type="search"
		   placeholder="Enter a city..."
		   className="form-control" />
		   <input type="submit" value="Search" className="btn" />
	   </form>
	   <h1>Dalkeith</h1>
	   
		   Saturday 03:00 <br></br>
		   It is Raining <br></br>
		   <div className= "description">
		   Precipitation: <br></br>
		   Humidity: <br></br>
		   Wind: <br></br>
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