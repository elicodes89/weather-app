import "./App.css";
import Weather from "./Weather";


export default function App() {
  return (
  
  <div className="App">
	  <div className="">
	  WeatherWise
	  <footer>
		  By EliCodes <br></br>
		  <a
            href="https://github.com/elicodes89/weather-app"
            target="_blank"
          >
             open-sourced on GitHub
         
          </a>
		   
	  </footer>
	       
		<Weather city= "Dalkeith" />
		</div>	  
    </div>
  );
}

