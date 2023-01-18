import React, { useRef, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { BsImages } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const ImageUpload = ({ image, SetImage, placeholder }) => {
  const resetShare = () => {
    SetImage(null);
  };
  const onDropRejected = (fileRejections) => {
    console.log(fileRejections);
    // console.log("file is rejected");
  };
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    const preview = acceptedFiles[0];
    // console.log("preview", preview);
    SetImage(preview);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    onDropRejected,
    multiple: false,
  });
  return (
    <div className=" w-[90%] m-5   h-[200px] flex  border-zinc-300 border-2 rounded-2xl items-center justify-center">
      {image ? (
        <div
          className={` w-full h-[200px] bg-cover  bg-center bg-no-repeat  `}
          style={{
            backgroundImage: `url(${URL.createObjectURL(image)})`,
          }}
        >
          <FaTimes onClick={resetShare} />
        </div>
      ) : (
        <div {...getRootProps()} className="  w-full">
          <div className="w-full h-[200px] flex flex-col bg-[#f6f6f6]  rounded-2xl items-center justify-center">
            <BsImages className="text-[30px]" />
            <h1>{placeholder ? placeholder : "Add Photo"}</h1>

            <input {...getInputProps()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
