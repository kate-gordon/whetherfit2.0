import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import WeatherInfoToday from "./weatherInfoToday";
import WeatherInfoTomorrow from "./weatherInfoTomorrow";
import GetOutfit from "./clothing";
import '../App.css';
class Weather extends Component {
    state = {
        weather: "Fetching weather data...",
        zipcode: 30342,
        apparentTemp: 0,
        precip: 0,
        outfits: "",
        tmrwTempHigh: 0,
        tmrwTempLow: 0,
        tmrwPrecipChance: 0
    };

    async componentDidMount() {
        const coordinates = await this.getCoordinates(this.state.zipcode);
        await this.getWeather(coordinates);
    }

    getCoordinates = async zipcode => {
        const zip = zipcode;
        const data = await loadData(
            `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${zip}&facet=state&facet=timezone&facet=dst`
        );
        const coordinates = data.records[0].geometry.coordinates;

        return coordinates;
    };

    getWeather = async coordinates => {
        const lat = coordinates[1];
        const lon = coordinates[0];
        const data = await loadData(
            `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1387466109e308e8de851d6f09a87c39/${lat},${lon}`
        );
        const apparentTemp = data.currently.apparentTemperature;
        const precip = data.currently.precipProbability;

        const tmrwTempHighValue = data.daily.data[1].apparentTemperatureHigh;
        const tmrwTempLowValue = data.daily.data[1].apparentTemperatureLow;
        const tmrwRainChanceValue = data.daily.data[1].precipProbability * 100;

        let myOutfit = 0;

        if (apparentTemp >= 80) myOutfit = "hot";
        if (apparentTemp >= 65 && apparentTemp < 80) myOutfit = "warm";
        if (apparentTemp >= 45 && apparentTemp < 64) myOutfit = "chilly";
        if (apparentTemp >= 25 && apparentTemp < 44) myOutfit = "cold";
        if (apparentTemp < 25) myOutfit = "wintry";

        this.setState({
            apparentTemp: apparentTemp,
            precip: precip,
            outfits: myOutfit,
            tmrwTempHigh: tmrwTempHighValue,
            tmrwTempLow: tmrwTempLowValue,
            tmrwPrecipChance: tmrwRainChanceValue
        });
    };

    

    handleSubmit = async e => {
        e.preventDefault();
        const zipcode = this.refs.zipcode.value;
        const coordinates = await this.getCoordinates(zipcode);
        await this.getWeather(coordinates);

        this.setState({ zipcode });
    };

    // My Oufit Function 

    myOutfit = () => {
      console.log("Outfit here"); 
      return
    }


    render() {
        const zipcode = this.state.zipcode;
        const apparentTemp = this.state.apparentTemp;
        const precip = this.state.precip;
        const outfit = this.state.outfits;
        const tmrwTempHigh = this.state.tmrwTempHigh;
        const tmrwTempLow = this.state.tmrwTempLow;
        const tmrwPrecipChance = this.state.tmrwPrecipChance;


        console.log(
            "zipcode is",
            zipcode,
            "apparent temp",
            apparentTemp,
            "precip chance",
            precip,
           
        );

        return (
            <>
            
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            zipcode={zipcode}
                            ref="zipcode"
                            placeholder="Enter zipcode"
                        />
                    </label>
                    <input type="submit" value="Submit" className="btn" />
                </form>
        
            <div className="container">
                <WeatherInfoToday apparentTemp={apparentTemp} precip={precip} />
                <GetOutfit outfit={outfit} />
            </div>
            <div className="container">
                <WeatherInfoTomorrow
                    tmrwTempHigh={tmrwTempHigh}
                    tmrwTempLow={tmrwTempLow}
                    tmrwPrecipChance={tmrwPrecipChance}
                />
            </div>
            </>
        )
    };
}

export default Weather;
