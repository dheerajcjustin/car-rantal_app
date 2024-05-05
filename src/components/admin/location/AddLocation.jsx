import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../config/axios";
import ImageUpload from "../../UI/ImageUpload";
import { useToast } from "@chakra-ui/react";
import LocationMap from "./LocationMap";

const AddLocation = ({ onClose, mutate }) => {
      const [formShow, setFormShow] = useState(false);
      const [lng, setLng] = useState(0);
      const [lat, setLat] = useState(0);
      const dispatch = useDispatch();
      const toast = useToast();
      const cloudinaryFolder = import.meta.env.VITE_CLOUDINARY_LOCATION_FOLDER;
      const cloudinaryName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const [image, SetImage] = useState("");
      const [location, setLocation] = useState("");
      const [description, setDescription] = useState("");
      const [locationErr, setLocationErr] = useState("");
      const [desErr, setDesErr] = useState("");
      const [imgErr, setImgErr] = useState("");
      useEffect(() => {}, []);
      useEffect(() => {
            setDesErr("");
      }, [description]);
      useEffect(() => {
            setLocationErr("");
      }, [location]);
      useEffect(() => {
            setImgErr("");
      }, [image]);
      const formSubmit = async () => {
            try {
                  const data = new FormData();
                  data.append("file", image);
                  data.append("upload_preset", cloudinaryFolder);
                  data.append("cloud_name", cloudinaryName);

                  fetch(
                        " https://api.cloudinary.com/v1_1/ducziw6jk/image/upload",
                        {
                              method: "post",
                              body: data,
                        }
                  )
                        .then((res) => res.json())
                        .then((data) => {
                              const url = data.url;
                              axios.post("/admin/location", {
                                    location,
                                    description,
                                    image: url,
                                    coords: { lng: lng, lat: lat },
                              }).then((result) => {
                                    mutate();
                                    onClose();
                                    toast({
                                          position: "top",
                                          title: "Location created.",
                                          description:
                                                "Successfully Created  Location.",
                                          status: "success",
                                          duration: 2000,
                                          isClosable: true,
                                    });
                              });
                        });
            } catch (error) {
                  console.log(error?.response);
                  onClose();
                  toast({
                        position: "top",
                        title: "Location Failled.",
                        description: "Failed to  Created  Location.",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                  });
            }
      };

      const submitHandler = () => {
            let flag = 45;
            if (!image) {
                  setImgErr("image is required");
                  flag = 12;
            }
            if (!location) {
                  setLocationErr("location is required");
                  flag = 12;
            }
            if (!description) {
                  setDesErr("description is required");
                  flag = 12;
            }
            if (flag !== 12) {
                  formSubmit();
            }
      };

      return !formShow ? (
            <div className="w-[50vw] rounded-lg p-5  text-banana text-3xl ">
                  {" "}
                  Select Location{" "}
                  <LocationMap
                        lat={lat}
                        lng={lng}
                        setLat={setLat}
                        setLng={setLng}
                  />
                  <div className="w-full flex justify-end ">
                        <button
                              className="bg-banana px-5   py-3  rounded-lg text-3xl m-5 text-gray-700 "
                              onClick={() => setFormShow(true)}
                        >
                              Next
                        </button>
                  </div>
            </div>
      ) : (
            <>
                  (
                  <div className="bg-[#FDD23F]  w-full  shadow-md rounded px-0  sm:px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-3xl"> Add Location</h1>
                        <div className="flex w-full">
                              <div className=" m-5">
                                    <label
                                          htmlFor="location"
                                          className="block text-gray-700 text-xl font-bold mb-2"
                                    >
                                          Location
                                    </label>
                                    <div className="">
                                          <input
                                                value={location}
                                                onChange={(e) => {
                                                      setLocation(
                                                            e.target.value
                                                      );
                                                }}
                                                type="text"
                                                className="    shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="location"
                                                placeholder="Location"
                                                name="location"
                                          />
                                          {locationErr && <p> {locationErr}</p>}
                                    </div>
                              </div>
                              <div className="m-5">
                                    <label
                                          htmlFor="brandDesc"
                                          className="block text-gray-700 text-xl font-bold mb-2"
                                    >
                                          Description
                                    </label>
                                    <div className="">
                                          <input
                                                value={description}
                                                onChange={(e) => {
                                                      setDescription(
                                                            e.target.value
                                                      );
                                                }}
                                                type="text"
                                                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="locationDesc"
                                                placeholder="description"
                                                name="locationDesc"
                                          />
                                          {desErr && <p> {desErr}</p>}
                                    </div>
                              </div>
                        </div>
                        <div className="ml-5">
                              <label
                                    htmlFor="logo"
                                    className="block text-gray-700 text-xl font-bold mb-2"
                              >
                                    logo
                              </label>
                        </div>

                        <ImageUpload
                              image={image}
                              SetImage={SetImage}
                              placeholder="Add Photo"
                        />
                        {imgErr && <p> {imgErr}</p>}

                        <div className="flex w-full justify-end">
                              <button
                                    onClick={submitHandler}
                                    type="submit"
                                    className=" bg-[#10191F] text-gray-100 px-3 py-1 text-xl rounded-md mr-16 "
                              >
                                    Submit
                              </button>
                        </div>
                  </div>
                  )
            </>
      );
};

export default AddLocation;
