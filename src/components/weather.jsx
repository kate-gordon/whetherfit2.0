import React, { Component } from "react";
import { loadData } from "../utils/loadData";


class Weather extends Component {

    state = {
        weather: "Fetching weather data...",
        zipcode: "",
        
    };

    async componentDidMount() {  
        const coordinates = await this.getCoordinates();
        this.getWeather(coordinates);
    }

    getCoordinates = async zipcode => {
        const zip = "11218"
        const data =  await loadData(
            `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${zip}&facet=state&facet=timezone&facet=dst`
        );   
       const coordinates = data.records[0].geometry.coordinates;
       console.log(coordinates);
       return coordinates
    };
    
    getWeather = async coordinates => {
        const lat = coordinates[1]; 
        const lon = coordinates[0];
        const data = await loadData(
            `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1387466109e308e8de851d6f09a87c39/${lat},${lon}`
        );
        const apparentTemp = data.currently.apparentTemperature; 
        const precip = data.currently.precipProbability; 
        console.log(apparentTemp, precip);
        return apparentTemp;
        return precip; 
    }

    handleChange(e) {
        
        console.log("e: ", e.target.zipcode);
        this.setState({zipcode: e.target.zipcode});
        
    }

    handleSubmit = e => {
        e.preventDefault();
        // this.getWeather(this.props.coordinates);
        console.log("zipcode: ", this.refs.zipcode.value);
    }

    render() {
        const { weather } = this.state;
        const zipcode = this.props.coordinates;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" zipcode={zipcode} ref="zipcode" placeholder="Enter zipcode" />
                </label>
                    <input type="submit" value="Submit" />            
            </form>
        );
    }
}

export default Weather;