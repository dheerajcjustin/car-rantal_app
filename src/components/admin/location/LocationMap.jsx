import React, { useState, useRef, useEffect } from "react";
import ReactMapGL, {
      GeolocateControl,
      Marker,
      NavigationControl,
} from "react-map-gl";
// import 'mapbox-gl/dist/mapbox-gl.css';
import "mapbox-gl/dist/mapbox-gl.css";
import Geocoder from "./Geocoder";

const LocationMap = ({ lng, setLng, lat, setLat }) => {
      const mapRef = useRef();

      const [zoom, setZoom] = useState(5);
      const dragEndHandler = (e) => {
            console.log("location ", e.lngLat.lng, e.lngLat.lat);
            setLng(e.lngLat.lng);
            setLat(e.lngLat.lat);
      };
      useEffect(() => {
            if (!lng && !lat) {
                  fetch("https://ipapi.co/json")
                        .then((response) => {
                              return response.json();
                        })
                        .then((data) => {
                              mapRef.current.flyTo({
                                    center: [data.longitude, data.latitude],
                              });
                              setLat(data.latitude);
                              setLng(data.longitude);
                        });
            }
      }, []);
      return (
            <div className="  h-[50vh]  ">
                  <ReactMapGL
                        //     style={width: 800,
                        //  height: 800,}

                        // style={{ height: 600 }}
                        ref={mapRef}
                        mapboxAccessToken={import.meta.env.VITE_MAPBOX}
                        initialViewState={{
                              longitude: lng,
                              latitude: lat,
                              zoom: 8,
                        }}
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                  >
                        <Marker
                              latitude={lat}
                              longitude={lng}
                              draggable
                              onDragEnd={dragEndHandler}
                        />
                        <NavigationControl position="bottom-right" />
                        <GeolocateControl
                              position="top-left"
                              trackUserLocation
                              onGeolocate={(e) => {
                                    setLat(e.coords.latitude);
                                    setLng(e.coords.longitude);
                              }}
                        />
                        <Geocoder setLat={setLat} setLng={setLng} />
                  </ReactMapGL>
            </div>
      );
};

export default LocationMap;
