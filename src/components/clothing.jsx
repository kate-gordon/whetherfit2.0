import React from "react";


function GetOutfit(props) {
    const outfits = {
        hot: [
            "./images/shorts.png",
            "./images/whitetshirt.png",
            "./images/dress.png"
        ],
        warm: [
            "./images/greytshirt.png",
            "./images/jeans.png",
            "./images/dress.png",
            "./images/sweatshirt.png",
            "./images/shorts.png"
        ],
        chilly: [
            ".images/whitetshirt.png",
            "./images/sweatpants.png",
            "./images/sweatshirt.png",
            "./images/blackjacket.png",
            "./images/dress.png",
            "./images/jeans.png"
        ],
        cold: [
            "./images/greytshirt.png",
            "./images/jeans.png",
            "./images/coat.png",
            "./images/scarf.png",
            "./images/blackjacket.png"
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
