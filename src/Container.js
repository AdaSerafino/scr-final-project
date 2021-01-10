import React, {useState} from "react";
import "./Container.css";
import ExactDate from "./Date.js"
import axios from "axios";
import Weather from "./Weather.js"
import Weatherforecast from "./Weatherforecast.js";

export default function Container(props) 
{
const [city, setCity] =useState(props.defaultCity)
  const [weather, setWeather] =useState({ ready: false});
function HandleResponse(response)
 {console.log(response.data);
setWeather({
  ready:true,
  icon: response.data.weather[0].icon,
  date: new Date(response.data.dt * 1000),
  description: response.data.weather[0].description,
  humidity: response.data.main.humidity,
 wind: response.data.wind.speed,
 city: response.data.name,
 temperature: response.data.main.temp

});

 }
function search() {

    const apiKey = "1156e1a421d02493e9c9b6d66334ab92";
    let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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
        
   <div class="search">
      <input type="search"
                placeholder="SEARCH..."
               
                autoFocus="on"
                onChange={showCity} />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
</div>
        
        </form>

         </div>
      
</div>
<Weather  data={weather}/>

<div className="row forecast">
         <Weatherforecast  city={weather.city} />
         
         
         </div> 
      </div>


    );


} else {

search()
return "LOADING"

}
}




