import React, {useState} from "react";
import "./Container.css";
import ExactDate from "./Date.js"
import axios from "axios";
import Weather from "./Weather.js"

export default function Container(props) 
{
const [city, setCity] =useState(props.defaultCity)
  const [weather, setWeather] =useState({ ready: false});
function HandleResponse(response)
 {console.log(response.data);
setWeather({
  ready:true,
  iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  date: new Date(response.data.dt * 1000),
  description: response.data.weather[0].description,
  humidity: response.data.main.humidity,
 wind: response.data.wind.speed,
 city: response.data.name,
 temperature: response.data.main.temp});

 }
function search() {

    const apiKey = "1156e1a421d02493e9c9b6d66334ab92";
    let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metricn`
    axios.get(apiUrl).then(HandleResponse);

}


function handleSubmit(event) {
    event.preventDefault();
    search(city);
}

function showCity(event) {
setCity(event.target.value)
}

if (weather.ready) {   return( 
    <div className="container">
    
    <h1>FORECAST</h1>
    <h2><ExactDate date={weather.date}/></h2>
    
<div className="row">
        <div className="search">
        
        <form  onSubmit={handleSubmit} action="">
        <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search..."
               
                autoFocus="on"
                onChange={showCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn"
              />
            </div>
          </div>
            </form>
         </div>
        
</div>
<Weather  data={weather}/>
      </div>


    );


} else {

search()
return "LOADING"

}
}




