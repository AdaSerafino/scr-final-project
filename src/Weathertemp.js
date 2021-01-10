import React, {useState} from "react"

export default function Temperature(props) {
    const [unit,setUnite]= useState("celsius");

function convertToF(event) {
    event.preventDefault();
    setUnite("fahrenheit")
}

function convertToC(event) {
    event.preventDefault();
setUnite("celsius");
}

    if (unit ==="celsius") {

    
return (

    <div>
         <p className="number"> {Math.round(props.celsius)} </p>
         <p className="unit">
              °C | <a onClick={convertToF} href= "/">°F</a>
          </p>
    
    </div> 

)
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
         return  (
            <div>
            <p> {Math.round(fahrenheit)} </p>
            <p className="unit">
                 <a href="/" onClick={convertToC}> °C </a>| °F
             </p>
       
       </div> 
         ) ;
        }
 }