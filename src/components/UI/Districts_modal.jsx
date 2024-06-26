import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
      getLocation,
      selectLocation,
} from "../../helpers/location/locationSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";

import District_card from "./District_card";

// const Backdrop = ({ onClose }) => {
//   const closeButtonHandler = () => {
//     onClose();
//   };
//   return (
//     <div
//       className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40  bg-slate-500 bg-opacity-75"
//       onClick={closeButtonHandler}
//     />
//   );
// };

const DistrictsModal = ({ onClose }) => {
      const closeButtonHandler = () => {
            onClose();
      };
      const dispatch = useDispatch();
      const locations = useSelector(selectLocation);
      useEffect(() => {
            if (!locations) {
                  dispatch(getLocation());
            }
      }, [locations]);

      return (
            <Modal>
                  {/* <div className="  bg-gray-900 relative w-auto my-10 md:my-32 sm:my-20 lg:my-40  xl:my-50 mx-auto z-50  max-w-6xl md:p-10 rounded-2xl">
        <button onClick={closeButtonHandler}>close</button> */}

                  <h3 className="text-center text-2xl text-emerald-400">
                        select District
                  </h3>
                  <div className="grid grid-cols-2  gap-5 m-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  md:p-4 overflow-x-hidden overflow-y-auto ">
                        {locations ? (
                              locations.map((location) => (
                                    <District_card
                                          // setLocation={}
                                          locationId={location._id}
                                          onClose={onClose}
                                          key={location._id}
                                          imgUrl={location.image}
                                          title={location.location}
                                    />
                              ))
                        ) : (
                              <div>loading...</div>
                        )}
                  </div>
                  {/* </div> */}
            </Modal>
      );
};

export default DistrictsModal;
