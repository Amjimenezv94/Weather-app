import React from 'react'
import 'weather-icons/css/weather-icons.css';

const Weather =()=>{
    return(
        <div className="container">
      <div className="cards">
          <h1>London</h1>
          <h5 className="py-4">
          <i className="wi wi-day-sunny display-1"></i>
          </h5>
          <h1 className="py-1"> 25&deg; </h1>
          {/**Muestra la temp maxima y  minima  */}
          {minmaxTemp(24,19)}
          <h4 className="py-3"> Slow Rain</h4>
      </div>
        </div>
    );
};

function minmaxTemp (min,max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}

export default Weather;
