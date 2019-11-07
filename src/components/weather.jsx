import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import WeatherInfoToday from "./weatherInfoToday";
class Weather extends Component {
    state = {
        weather: "Fetching weather data...",
        zipcode: 30342,
        apparentTemp: 0,
        precip: 0
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
        console.log("coordinates are", coordinates);
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

        this.setState({ apparentTemp: apparentTemp, precip: precip });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const zipcode = this.refs.zipcode.value;
        const coordinates = await this.getCoordinates(zipcode);
        await this.getWeather(coordinates);

        this.setState({ zipcode });
    };

    render() {
        const zipcode = this.state.zipcode;
        const apparentTemp = this.state.apparentTemp;
        const precip = this.state.precip;

        console.log(
            "zipcode is",
            zipcode,
            "apparent temp",
            apparentTemp,
            "precip chance",
            precip
        );

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            zipcode={zipcode}
                            ref="zipcode"
                            placeholder="Enter zipcode"
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <WeatherInfoToday apparentTemp={apparentTemp} precip={precip} />
            </>
        );
    }
}

export default Weather;
