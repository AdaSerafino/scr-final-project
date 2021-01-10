import React from "react";
import "./Weather.css";
export default function Weather(props) {
    return(
        <div className="row"> 
        
        <div className="col-7">
    <div>
      <img
    alt="description"
    src={props.data.iconUrl}
    
      />
    <h3> { props.data.city }</h3>
     <p> {props.data.temperature}° C | F </p>
     <p>{props.data.description}</p>
    </div>
    </div>

    
        <div className="col-5">
        <div >
        <br /><br /><br />
        <p> WIND {props.data.wind} km/h
                         <br />
             HUMIDITY {props.data.humidity} %
                                           <br/>
                                             description </p>
                                         
                                         </div>
                                  
        </div>
       
        </div>)
    
}