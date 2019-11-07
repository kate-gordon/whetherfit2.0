import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class Weather extends Component {
    state = {
        weather: "Fetching weather data..."
    };

    async componentDidMount() {
        const category = this.props.match.params.category_name; 
        this.getWeather();
    }


    getCoordinates = async zipcode => {
         
        const data = await loadData(
            `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=30339&facet=state&facet=timezone&facet=dst`
        );
        console.log("data is..", data)
       
    };
    

    render() {
        const { weather } = this.state;
        const category = this.props.match.params.category_name;  

        return (
            <>
                <Button isColor="dark" isSize="medium" onClick={e => this.handleClick(e)}>
                    Get Another Quote from the {category} Category!
                </Button>
            </>
        );
    }
}

export default Weather;
    