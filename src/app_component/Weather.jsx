import React from 'react'
import 'weather-icons/css/weather-icons.css';

const Weather =(props)=>{
    const currentTime= new Date(props.time*1000)
    const hour =  `${currentTime.getHours()}:00`
   
    return(
        <div className="container">

            <div className="cards ">
                <h1>{props.cityName}</h1>
                <h6>{hour}</h6>


                <h5 className="py-4">
                <i className={`wi wi-day-${props.icon} display-1`}></i>
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
