import React from "react";

// stylesheet imports
import "./style/cards/plantcard.css"


// component function
function PlantCard({image}){
    return(
            <img id="plant-image" src={image}></img>
    )
}

export default PlantCard