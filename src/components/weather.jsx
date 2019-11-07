import React, { Component } from "react";
import { loadData } from "../utils/loadData";



class Weather extends Component {
    state = {
        weather: "Fetching weather data..."
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

    render() {
        // const { weather } = this.state;s
        // const category = this.props.match.params.category_name;  

        return (
            <>
                {/* <Button isColor="dark" isSize="medium" onClick={e => this.handleClick(e)}>
                    Get Another Quote from the {category} Category!
                </Button> */}
            </>
        );
    }
}

export default Weather;
    