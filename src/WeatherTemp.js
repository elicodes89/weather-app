import React from "react";

export default function WeatherTemp(props){

	return (
		<span>
			<div className="temperature">
				{Math.round(props.data.temperature)} 
			</div> C
			</span>

	)

}