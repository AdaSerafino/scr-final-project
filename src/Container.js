import React from "react";
import Form from "./Form.js"
import "./Container.css"
import Geolocate from "./Geolocate"
import Current from "./Current"

export default function Container() { return (


<div class="container">   



<div className ="container-app">
<h1>FORECAST</h1>

<h2>DATE</h2>

<div class="row">
<div class="col-7">
    <div class="row"> <Form/> </div>
    <div class="row"><Geolocate/></div>
</div>


<div class="col-5">
<Current />
</div>

<div class="row">forecast</div>

</div>

</div>
<div className="extra">
    <footer>hi</footer>
</div>
</div>
)
}