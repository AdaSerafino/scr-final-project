import React from "react";

export default function Current() { return (  
<div>
<div class="card today">
<div class="card-body">
  <img
    src="http://openweathermap.org/img/wn/10d@2x.png"
    alt=""
    id="icon"
  />
  <span id="city"> ROME</span>
  <br />
  <span id="temperature"> 21 C°</span>{" "}
  <i class="fas fa-temperature-high"></i>
</div>
</div>

<div class="card today">
<div class="card-body">
  C° | F°
  <br />
  HUMIDITY: 90%
  <br />
  WIND: 9 m/s
</div>
</div>
</div>
)}