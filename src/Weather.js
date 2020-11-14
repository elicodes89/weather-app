import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";


export default function Weather(props){
	function handleResponse(response) {

		alert (`The weather in ${response.data.name} is ${response.data.main.temp} Degrees`);
	}
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=eeb8f7e85a1864933f31f435c249cf5b&units=metric`;
	axios.get(url).then(handleResponse);
	
	return (
	<Loader
	type="Puff"
	color="orange"
	width={68}
	/>
	);
  }