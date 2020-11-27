import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
	
	let [ready, setReady] = useState(false);
	let [temperature, setTemperature] = useState(null);

	function handleResponse(response){
		setTemperature(response.data.main.temp);
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
	   <h1>Dalkeith</h1>


		   Saturday 03:00 <br></br>
		   It is Raining <br></br>
		   <div className= "description">
		   <div className="temperature">{Math.round(temperature)}</div>
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

	} else {
	let apiKey = "eeb8f7e85a1864933f31f435c249cf5b";
	let city = "London";
	let apiUrl = `http://api.openweathermap.org/data/2.5/weather?
	q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);

	return "The current weather is loading";

	}
}    