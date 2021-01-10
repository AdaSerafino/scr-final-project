import React, {useState} from "react";
import axios from "axios";
import "./Weatherforecast.css";
import WeatherForPreview from "./WeatherForecastPreview.js";


export default function Weatherforecast(props) {
    const [loaded, setloaded] = useState(false)
    const [forecast, setForecast] = useState(null)


 function handleForResponse(response) {
   setForecast(response.data);
   setloaded(true);
     }

 if (loaded) {
     return(
     <div className="WeatherForecast row one">
         <WeatherForPreview data={forecast.list[0] }/>
         <WeatherForPreview data={forecast.list[1] }/>
         <WeatherForPreview data={forecast.list[2] }/>
         <WeatherForPreview data={forecast.list[3] }/>
         <WeatherForPreview data={forecast.list[4] }/>
         <WeatherForPreview data={forecast.list[5] }/>

     </div>
     )
 } else {

let apiKey = "1156e1a421d02493e9c9b6d66334ab92"
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleForResponse);

return null; 
 }



}