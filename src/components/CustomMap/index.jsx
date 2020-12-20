import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import MdHome from "react-ionicons/lib/MdHome";
import classes from "./style.module.scss";

import markSrc from "../../assets/svgs/mark.svg"
const token =
  "pk.eyJ1IjoiYXlkZW42NSIsImEiOiJjanllYXJkdWMwMXBzM2JyeXpjNnkxOTQzIn0.jPlNASmQHMdEVyGHBhZMIw";
const coord = [48.2915, 25.9403];
const CustomMap = () => {
  const [viewport, setViewport] = useState({
    zoom: 4,
    latitude: 49,
    longitude: 32
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/ayden65/ckixbhcnc3loy19mqo43mcnf4"
        height="100vh"
        width="50vw"
      >
        <Marker latitude={coord[0]} longitude={coord[1]} >
        <img src={markSrc} className={classes.icon} alt="Mark Location" />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default CustomMap;
