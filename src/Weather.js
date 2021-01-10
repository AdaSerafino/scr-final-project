import React from "react";
import "./Weather.css";
import Temperature from "./Weathertemp.js";
import Icon from "./Iconcopy.js";


export default function Weather(props) {
    return(
        <div className="row"> 
        
        <div className="col-7">
   
      <Icon  code={props.data.icon} />
    
    <h3 className="text-uppercase"> { props.data.city }</h3>
  
    <div> <Temperature celsius={props.data.temperature} /></div>
   
    
    </div>

    
        <div className="col-5">
        <div >
        <br /><br /><br />
        <p className="text-uppercase"> WIND {props.data.wind} km/h
             <br />
             HUMIDITY {props.data.humidity} %
                         <br/>
                       {props.data.description} </p>
                                         
                                         </div>
                                  
        </div>
       
        </div>)
    
}