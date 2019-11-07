import React from "react";

function WeatherInfoToday(props) {
    return (
        <>
            <p>It currently feels like {this.props.todayTemp}</p>
            <p>Precipitation Chance: {this.props.precip}</p>
        </>
    );
}

export default WeatherInfoToday;
