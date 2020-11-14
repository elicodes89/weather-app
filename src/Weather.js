import React from "react";

export default function Weather() {
  return (
    <div>
      <div className="Weather">
        <div className="City">
          <form className="search-form">
            <input
              type="text"
              placeholder="Enter a city"
              autocomplete="off"
              autofocus="on"
            />
            <input type="submit" value="🔍" />
          </form>
        </div>
      </div>

      <div className="appcontent">
        <h5>Test</h5>
        <h1>Dalkeith</h1>
      </div>

      <div className="alt">Rain</div>
      <div className="notes">
        Currently:
        <h4>Test</h4>
        <span className="temperature"></span>
        <span className="units">
          <a href="/">℃</a>
          <a href="/">°F</a>
        </span>
        <span className="wDescription">Cloudiness: 10%</span>
        <span className="humidity">Humidity: 10%</span>
        <span className="wind-speed">Wind: 4km/h</span>
      </div>
      <div className="row weather-forecast">
        <div className="col-2">
          <h3> 19:00 </h3>
		<a href="https://github.com/elicodes89/weather-app"> Open-source code </a> by EliCodes
        </div>
      </div>
    </div>
  );
}
