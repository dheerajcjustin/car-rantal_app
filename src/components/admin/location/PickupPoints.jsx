import React, { useState } from "react";
import Modal from "../../UI/Modal";
import AddPickup from "./AddPickup";
import LocationMap from "./LocationMap";
import useSWR from "swr";
import { fetcher } from "../../../config/authInstance";
import ListMap from "./ListMap";

const PickupPoints = ({ pickup, backButton }) => {
      const { data, error, isLoading, mutate } = useSWR(
            `/admin/location/${pickup._id}`,
            fetcher,
      );

      const [lng, setLng] = useState(pickup.coords.lng);
      const [lat, setLat] = useState(pickup.coords.lat);
      const [addPickupModal, setAddPickupModal] = useState(false);
      return (
            <div>
                  <button
                        className="bg-banana p-3 rounded-xl"
                        onClick={() => setAddPickupModal(true)}
                  >
                        Add pickup
                  </button>

                  {addPickupModal ? (
                        <Modal onClose={setAddPickupModal}>
                              <div>
                                    <div className="w-[50vw]">
                                          <LocationMap
                                                lat={lat}
                                                lng={lng}
                                                setLat={setLat}
                                                setLng={setLng}
                                          />
                                    </div>
                                    <AddPickup
                                          locationId={pickup._id}
                                          coords={{ lng, lat }}
                                          updatePickup={mutate}
                                    />
                              </div>
                        </Modal>
                  ) : (
                        <div>
                              {console.log("data form pickusps", data)}
                              {error && <p>errore loading</p>}

                              {data && <ListMap location={data} />}
                        </div>
                  )}
            </div>
      );
};

export default PickupPoints;
