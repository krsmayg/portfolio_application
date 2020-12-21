import React, { useEffect, useState, useRef } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import MdHome from "react-ionicons/lib/MdHome";
import classes from "./style.module.scss";
import mapboxgl from "mapbox-gl";
import markSrc from "../../assets/svgs/mark.svg";
const token =
  "pk.eyJ1IjoiYXlkZW42NSIsImEiOiJjanllYXJkdWMwMXBzM2JyeXpjNnkxOTQzIn0.jPlNASmQHMdEVyGHBhZMIw";



const coord = [25.9403,48.2915];
const CustomMap = () => {
  const mapContainer = useRef(null);
  const [viewport, setViewport] = useState({
    zoom: 4,
    latitude: 49,
    longitude: 32,
  });
  const [map, setMap] = useState(null);
  useEffect(() => {
    mapboxgl.accessToken = token;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/ayden65/ckixbhcnc3loy19mqo43mcnf4", // stylesheet location
        center: [32, 49],
        zoom: 5,
      });
      const marker = new mapboxgl.Marker()
      .setLngLat(coord)
      .addTo(map);
      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);
  return (
      <div ref={(el) => (mapContainer.current = el)} className={classes.map} />
  );
};

export default CustomMap;
{
  /* <ReactMapGL
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
      </ReactMapGL> */
}
