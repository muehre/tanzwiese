import React from "react";
import map from './map.png'
import MapImage from "./MapImage.styled";

const Map: React.FC = () => {

    return (
        <MapImage src={map} alt="Tanzwiese Festival Map" />
    )
}

export default Map