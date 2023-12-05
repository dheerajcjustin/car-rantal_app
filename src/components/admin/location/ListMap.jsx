import React, { useState } from "react";
import ReactMapGL, {
      GeolocateControl,
      Marker,
      NavigationControl,
      Popup,
} from "react-map-gl";

const ListMap = ({ location, selectedPickup, setSelectedPickup }) => {
      // console.log("locarion is from lodffadfsdfdsafdsafdsoiuytrejkjhgf789876543456789098765432cation dara,", location);

      const [popupData, setPopupData] = useState(null);
      return (
            <div className="h-[50vh] ">
                  ListMap
                  <ReactMapGL
                        mapboxAccessToken={import.meta.env.VITE_MAPBOX}
                        initialViewState={{
                              longitude: location?.coords.lng,
                              latitude: location?.coords.lat,
                              zoom: 8,
                        }}
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                  >
                        {location.pickupPoints.map((point) => (
                              <Marker
                                    color={`${
                                          point._id == selectedPickup
                                                ? `red`
                                                : ``
                                    }`}
                                    key={point._id}
                                    onClick={(e) => {
                                          e.originalEvent.stopPropagation();
                                          setSelectedPickup(point._id);
                                          setPopupData(point);
                                    }}
                                    latitude={point.coords.lat}
                                    longitude={point.coords.lng}
                              />
                        ))}

                        {popupData && (
                              <>
                                    {console.log(
                                          "wowo lan and dar for popup",
                                          popupData,
                                    )}
                                    <Popup
                                          longitude={popupData.coords.lng}
                                          latitude={popupData.coords.lat}
                                          anchor="bottom"
                                          // offset={1}

                                          onClose={() => setPopupData(null)}
                                    >
                                          <div>{popupData.name}</div>
                                    </Popup>
                              </>
                        )}
                  </ReactMapGL>
            </div>
      );
};

export default ListMap;
