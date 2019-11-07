import React, { Component } from "react";
import { loadData } from "../utils/loadData";


class Weather extends Component {

    state = {
        weather: "Fetching weather data..."
    };

    async componentDidMount() {
    }


    getCoordinates = async (zipcode) => {
         
        const data = await loadData(
            `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=30339&facet=state&facet=timezone&facet=dst`
        );
        console.log("data is..", data)

        const weather = data.value;

        this.setState({
            weather
        }); 
    };

    handleChange(e) {
        this.setState({value: e.target.coordinates});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.getWeather(this.props.coordinates);
    }

    render() {
        const { weather } = this.state;
        const zipcode = this.props.coordinates;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.coordinates} onChange={this.handleChange} placeholder="Enter zipcode" />
                </label>
                    <input type="submit" value="Submit" />            
            </form>
        );
    }
}

export default Weather;
    
