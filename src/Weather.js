import React from "react";
import "./Weather.css";


export default function Weather() {
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