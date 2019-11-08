import React from "react";
import dress from "../images/dress.png";
import shorts from "../images/shorts.png";
import tshirt from "../images/whitetshirt.png";
import grey from "../images/greytshirt.png";
import sweatshirt from "../images/sweatshirt.png";
import jeans from "../images/jeans.png";
import sweatpants from "../images/sweatpants.png";
import blackjacket from "../images/blackjacket.png";


function GetOutfit(props) {
    const outfits = {
        hot: [
            shorts,
            tshirt,
            dress
        ],
        warm: [
            grey,
            jeans,
            dress,
            sweatshirt,
            shorts
        ],
        chilly: [
            tshirt,
            sweatpants,
            sweatshirt,
            blackjacket,
            dress,
            jeans
        ],
        cold: [
            grey,
            jeans,
            "coat",
            "scarf",
            blackjacket
        ],
        wintry: ["./images/freezing.png"]
    };

    const condition = props.outfit;
    const myOutfit = outfits[condition];

    console.log("condition is", condition);
    console.log("myoutfit is", myOutfit);

    if (myOutfit === undefined) {
        return (
            <>
                <h1>Loading Clothing Images</h1>
            </>
        );
    } else {
        return (
            <>
                <ul>
                    {myOutfit.map((item, id) => {
                        return <img src={item} />;
                    })}
                </ul>
            </>
        );
    }
    
}

export default GetOutfit;
