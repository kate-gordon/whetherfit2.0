import React from "react";

function WeatherInfoToday(props) {
    const apparentTemp = Math.round(props.apparentTemp);
    const precip = Math.round(props.precip);

    return (
        <>
            <h1>Weather Today</h1>
            <p>
                It currently feels like {apparentTemp}
                {"°F"}
            </p>
            <p>
                Precipitation Chance: {precip}
                {"%"}
            </p>
        </>
    );
}

export default WeatherInfoToday;
