import React, { useState, useEffect, useRef } from "react";
import ImageUpload from "../../UI/ImageUpload";
import instance from "../../../config/vendorAxios";
import { Progress, useToast } from "@chakra-ui/react";
import axios from "axios";
const ImageOfCars = ({ carData, filedCheck, onComplete }) => {
      const toast = useToast();
      const reference = useRef(0);
      const [imageFront, setImageFront] = useState();
      const [imageBack, setImageBack] = useState();
      const [imageSide, setImageSide] = useState();
      const [rcImage, setRcImage] = useState();
      const [pollutionImage, setPollutionImage] = useState();
      const [insuranceImage, setInsuranceImage] = useState();

      const [frontErr, setFrontErr] = useState("");
      const [backErr, setBackErr] = useState("");
      const [sideErr, setSideErr] = useState("");
      const [rcErr, setRcErr] = useState("");
      const [pollutionErr, setPollutionErr] = useState("");
      const [insuranceErr, setInsuranceErr] = useState("");
      const [uploadIndication, setUploadIndication] = useState(false);

      const resetImages = () => {
            setImageFront();
            setImageBack();
            setImageSide();
            setRcImage();
            setPollutionImage();
            setInsuranceImage();
      };

      const submitHandler = () => {
            const photos = [];
            const documents = [];
            const doc = [rcImage, pollutionImage, insuranceImage];
            const phots = [imageFront, imageBack, imageSide];
            const upload1 = phots.map(async (file) => {
                  const data = new FormData();
                  data.append("file", file);
                  data.append("upload_preset", "rental");
                  data.append("cloud_name", "ducziw6jk");
                  return axios
                        .post(
                              "https://api.cloudinary.com/v1_1/ducziw6jk/image/upload",
                              data,
                              {
                                    headers: {
                                          "X-Requested-With": "XMLHttpRequest",
                                    },
                                    onUploadProgress: function (progressEvent) {
                                          let percentCompleted = Math.round(
                                                (progressEvent.loaded * 100) /
                                                      progressEvent.total
                                          );

                                          if (percentCompleted === 100)
                                                reference.current++;
                                          // setProgressBar(prev => prev + 1)
                                    },
                              }
                        )
                        .then((response) => {
                              const data = response.data;
                              // You should store this URL for future references in your app
                              // SetUrl([...url, ...data.url]);
                              photos.push(data.url);
                        });
            });

            const upload2 = doc.map(async (file) => {
                  const data = new FormData();
                  data.append("file", file);
                  data.append("upload_preset", "rental");
                  data.append("cloud_name", "ducziw6jk");
                  return axios
                        .post(
                              "https://api.cloudinary.com/v1_1/ducziw6jk/image/upload",
                              data,
                              {
                                    headers: {
                                          "X-Requested-With": "XMLHttpRequest",
                                    },
                                    onUploadProgress: function (progressEvent) {
                                          let percentCompleted = Math.round(
                                                (progressEvent.loaded * 100) /
                                                      progressEvent.total
                                          );
                                          if (percentCompleted === 100) {
                                                reference.current++;
                                          }

                                          // console.log(percentCompleted)
                                          // console.log(progress);
                                          // progress++;
                                    },
                              }
                        )
                        .then((response) => {
                              const data = response.data;
                              // You should store this URL for future references in your app
                              // SetUrl([...url, ...data.url]);
                              documents.push(data.url);
                        });
            });
            const uploader = upload1.concat(upload2);
            // const config = {
            //     onUploadProgress: function (progressEvent) {
            //         console.log("dldldldldasfkldslkdsffkj");
            //         var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            //         console.log(percentCompleted)
            //     }
            // }

            setUploadIndication(true);
            axios.all(uploader)
                  .then(async () => {
                        const response = await instance.post("/vendor/addCar", {
                              carData,
                              photos,
                              documents,
                        });
                        documents.length = 0;
                        photos.length = 0;
                        toast({
                              title: "Car Added.",
                              description: "Car Adding successful",
                              status: "success",
                              duration: 9000,
                              isClosable: true,
                        });
                        setUploadIndication(false);
                        resetImages();
                        onComplete();
                  })
                  .catch((err) => {
                        console.log(err);
                        setUploadIndication(false);

                        toast({
                              title: "Car Adding Failed.",
                              description: "Car Adding Failed",
                              status: "error",
                              duration: 9000,
                              isClosable: true,
                        });
                  });
      };

      useEffect(() => {
            setFrontErr("");
            setBackErr("");
            setSideErr("");
            setRcErr("");
            setInsuranceErr("");
            setPollutionErr("");
      }, [
            imageFront,
            imageSide,
            imageBack,
            rcImage,
            pollutionImage,
            insuranceImage,
      ]);
      const imgUpload = () => {
            if (!filedCheck()) return;

            if (!imageFront) return setFrontErr("invalid");
            if (!imageBack) return setBackErr("invalid");
            if (!imageSide) return setSideErr("invalid");
            if (!rcImage) return setRcErr("invalid");
            if (!pollutionImage) return setInsuranceErr("invalid");
            if (!insuranceImage) return setInsuranceErr("invalid");

            submitHandler();
      };
      return (
            <div className="w-full">
                  <div className=" grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full  ">
                        <div
                              className={`${
                                    frontErr &&
                                    "border-red-600 w-full rounded-2xl border-2"
                              } `}
                        >
                              <ImageUpload
                                    placeholder="Image from the front  "
                                    image={imageFront}
                                    SetImage={setImageFront}
                              />
                        </div>
                        <div
                              className={`${
                                    backErr &&
                                    "border-red-600 rounded-2xl border-2"
                              } `}
                        >
                              <ImageUpload
                                    placeholder="Image from the back "
                                    image={imageBack}
                                    SetImage={setImageBack}
                              />
                        </div>
                        <div
                              className={`${
                                    sideErr &&
                                    "border-red-600 rounded-2xl border-2"
                              } `}
                        >
                              <ImageUpload
                                    placeholder="Image from the side "
                                    image={imageSide}
                                    SetImage={setImageSide}
                              />
                        </div>
                  </div>
                  <h3>Documents</h3>
                  <div className=" grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full  ">
                        <div
                              className={`${
                                    rcErr &&
                                    "border-red-600 rounded-2xl border-2"
                              } `}
                        >
                              <ImageUpload
                                    placeholder="Image Of Registration Certificate  "
                                    image={rcImage}
                                    SetImage={setRcImage}
                              />
                        </div>
                        <div
                              className={`${
                                    pollutionErr &&
                                    "border-red-600 rounded-2xl border-2"
                              } `}
                        >
                              <ImageUpload
                                    placeholder="Image Pollution Certificate "
                                    image={pollutionImage}
                                    SetImage={setPollutionImage}
                              />
                        </div>
                        <div
                              className={`${
                                    insuranceErr &&
                                    "border-red-600 rounded-2xl border-2"
                              } `}
                        >
                              <ImageUpload
                                    placeholder="image insurance"
                                    image={insuranceImage}
                                    SetImage={setInsuranceImage}
                              />
                        </div>
                  </div>

                  <div className="w-[99%] pr-5 pt-2">
                        {uploadIndication && (
                              <Progress size="xs" isIndeterminate />
                        )}
                  </div>

                  <div className="  flex justify-center ">
                        {" "}
                        <button
                              className="object-right w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                              onClick={imgUpload}
                        >
                              Submit
                        </button>{" "}
                  </div>
            </div>
      );
};

export default ImageOfCars;
