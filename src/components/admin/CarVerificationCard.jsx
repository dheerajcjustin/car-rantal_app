import React, { useState } from "react";
import authInstance from "../../config/authInstance";
// import LoadingOverlay from 'react-loading-overlay';
import { useToast } from '@chakra-ui/react'


const CarVerificationCard = ({ car, modalClose }) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const update = async (car, status) => {
    try {
      console.log("car Id is ", car);
      const response = await authInstance.patch(`/admin/car/${car}`, status);
      modalClose();
      toast({
        title: 'Status change Successes.',
        description: `Status have  Successfully changed to ${status.status}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    catch (error) {
      modalClose();
      toast({
        title: 'Status change Successes.',
        description: `Status have  Successfully changed to ${status.status}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      // console.error(error.response);
    }
  };

  const approveButtonHandler = async (car) => {
    const status = {
      status: "verified",
    };
    update(car, status);
  };
  const rejectButtonHandler = async (car) => {
    console.log("caris in by ", car);
    const status = {
      status: "rejected",
    };
    update(car, status);
  };

  const [image, setImage] = useState(car.photos[0]);
  const [bigImg, setBigImg] = useState();
  return (
    <div className=" rounded-3xl bg-[#10191F] pt-3 shadow-lg shadow-gray-500/50     ">
      <div className="flex flex-col  align-middle items-center w-full">
        <h2 className="text-xl font-semibold  text-slate-50">{car.name}</h2>

        <img
          src={image}
          alt="photo of amg"
          // w-[280px]  sm:[180px]  sm:w-[400px] sm:h-[250px]
          className=" w-[90vw] h-[50vh] sm:w-[50vw] sm:h-[30vh] object-contain	 sm:mb-8 rounded-xl"
        />
        <div className="flex flex-row w-full justify-between sm:px-5">
          {car?.photos?.map((photo) => (
            <img
              key={photo}
              className=" w-[25%]   sm:w-[100px] sm:h-[80px]  object-contain "
              src={photo}
              alt="image of cars"
              onClick={() => {
                setImage(photo);
              }}
            />
          ))}

        </div>
        <div className="flex flex-row w-full justify-between sm:px-5">
          {car?.documents?.map((photo) => (
            <img
              key={photo}
              className=" w-[25%]   sm:w-[100px] sm:h-[80px]  object-contain "
              src={photo}
              alt="image of cars"
              onClick={() => {
                setImage(photo);
              }}
            />
          ))}

        </div>
      </div>
      <p className="text-center text-banana">
        Current Status:  {car.verified}

      </p>
      <div className="flex flex-row justify-around p-5 bg-white rounded-t-3xl sm:text-xl ">
        <div className="text-center">
          <h6>Tiadog</h6>
          <h6> ₹ {car?.price}</h6>
          <h6> Seats : {car?.seatNum}</h6>
        </div>

      </div>
      <div className=" text-center   text-[#FDD23F] rounded-2xl">
        <h6> Rc:{car?.rcNumber}</h6>
      </div>
      <div className=" text-center   text-[#FDD23F] rounded-2xl">
        <h6> Name:{car?.vendor[0]?.name}</h6>
      </div> <div className=" text-center   text-[#FDD23F] rounded-2xl">
        <h6> phone:{car?.vendor[0]?.mobile}</h6>
      </div>
      <div className="flex w-full flex-col justify-between p-5 bg-white rounded-b-3xl sm:text-xl gap-2   ">
        <button
          className=" bg-gray-400 px-5 py-2 rounded-lg"
          onClick={() => rejectButtonHandler(car._id)}
        >
          Reject
        </button>
        <button
          className="bg-yellow-400 px-5 py-2 rounded-lg"
          onClick={() => approveButtonHandler(car._id)}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default CarVerificationCard;
