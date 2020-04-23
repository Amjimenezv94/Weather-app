import React,{Component} from 'react';
import Weather from './Weather.jsx';
import Search from './Search.jsx'

class WeatherDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            city:'',

         }
    }

    onChangeCity = (value)=> this.setState({city:value})
    onClick = async()=> {

        const coordenadas= await fetch('https://api.darksky.net/forecast/cb5aea18887e92e9b7bdf2a8321e7009/42.3601,-71.0589')
        const coordenadastoJson = await coordenadas.json();
        debugger;
    
    }
    render() { 
        return ( 
         <div className="container">
            <Search 
            changeSearch={this.onChangeCity}
            cityValue={this.state.city}
            weather={this.onClick}
            />
            <Weather/>
        </div>
         );
    }
}
 
export default WeatherDisplay;
