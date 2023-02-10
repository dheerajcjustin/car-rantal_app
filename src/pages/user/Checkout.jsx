import React, { useState } from "react";
import Navbar from "../../components/navbar/NavBar";
import Summary from "../../components/user/Summary";
import CheckoutCard from "../../components/user/CheckoutCard";
import ListMap from "../../components/admin/location/ListMap"
import authInstance from "../../config/authInstance";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useSWR from "swr";
import {
  selectCurrentCar,
  selectCarBookingTime,
} from "../../helpers/car/carSlice";
import Payment from "../../components/user/payment/Payment";
import Modal from "../../components/UI/Modal";



const Checkout = ({ }) => {

  const [payment, setPayment] = useState(false);
  const { car: carId } = useParams();
  // console.log("car id is ", carId);
  const fetcher = (url) => authInstance.get(url).then((res) => res.data);
  // .catch((err) => console.log(err));
  const { data, error, isLoading } = useSWR(
    `/car/${carId}`,
    fetcher
  );

  const car = useSelector(selectCurrentCar);
  console.log("car redux pickup point", car.pickupPoints[0]);
  const [selectedPickup, setSelectedPickup] = useState(car.pickupPoints[0]);
  const bookingTime = useSelector(selectCarBookingTime);







  // const arrya1 = car.locationData[0].pickupPoints
  // const arrya2 = car.pickupPoints
  // console.log("the first arrya is ", arrya1);
  // console.log("the second arrya is ", arrya2);
  // const newarrya = arrya1.filter(({ _id }) => arrya2.includes(_id));
  return (
    <div className="w-screen bg-[#FDD23F] h-max md:h-screen ">
      <Navbar />
      {payment &&

        <Payment vehicle={car} bookingTime={bookingTime} selectedPickup={selectedPickup} setPayment={setPayment} />


      }
      <div className="max-w-[90%] mx-auto mt:0 md:mt-24">
        <div className="w-full  grid md:grid-cols-3 grid-cols-1 gap-10 md:p-10 p-5">
          {/* {data && console.log("car data from featc", data)} */}
          {/* {error && console.log("car data from featc", error)} */}
          { }
          {
            isLoading &&
            <>
              <Skeleton>


                <Summary vehicle={car} bookingTime={bookingTime} />

              </Skeleton>
              <Skeleton>


                <CheckoutCard vehicle={car} bookingTime={bookingTime} />
              </Skeleton>
            </>
          }
          {
            data &&
            <>
              <Summary vehicle={car} bookingTime={bookingTime} selectedPickup={selectedPickup} setSelectedPickup={setSelectedPickup} />
              <CheckoutCard vehicle={car} bookingTime={bookingTime} selectedPickup={selectedPickup} setPayment={setPayment} />
            </>



          }
        </div>
      </div>
      <div className="m-10">

        {data && <ListMap location={data.car.availableLocation} />}
      </div>
      <div className="h-[10vh]"></div>
    </div>
  );
};

export default Checkout;
