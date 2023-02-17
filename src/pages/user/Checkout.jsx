import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/NavBar";
import Summary from "../../components/user/checkout/Summary";
import CheckoutCard from "../../components/user/checkout/CheckoutCard";
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
import Payment from "../../components/user/checkout/Payment";
import Modal from "../../components/UI/Modal";



const Checkout = ({ }) => {

  const [payment, setPayment] = useState(false);
  const { car: carId } = useParams();
  const fetcher = (url) => authInstance.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    `/car/${carId}`,
    fetcher
  );

  const car = useSelector(selectCurrentCar);
  // console.log("car redux pickup point", car.pickupPoints[0]);
  const [selectedPickup, setSelectedPickup] = useState("");

  const bookingTime = useSelector(selectCarBookingTime);
  useEffect(() => {
    data && setSelectedPickup(data?.car?.availableLocation?.pickupPoints[0]._id)

  }, [data]);

  return (
    <div className="w-screen bg-[#FDD23F] h-max md:h-screen ">
      <Navbar />
      {payment &&

        <Payment vehicle={car} setPayment={setPayment} bookingTime={bookingTime} selectedPickup={selectedPickup} />


      }
      <div className="max-w-[90%] mx-auto mt:0 md:mt-24">
        <div className="w-full  grid md:grid-cols-3 grid-cols-1 gap-10 md:p-10 p-5">

          { }
          {
            isLoading &&
            <>
              <Skeleton>

                <div className="w-[50%] h-20"></div>
                {/* <Summary vehicle={car} bookingTime={bookingTime} /> */}

              </Skeleton>
              <Skeleton>
                <div className="w-[50%] h-20"></div>

                {/* <CheckoutCard vehicle={car} bookingTime={bookingTime} /> */}
              </Skeleton>
            </>
          }
          {
            data &&
            <>
              <Summary vehicle={data.car} bookingTime={bookingTime} selectedPickup={selectedPickup} setSelectedPickup={setSelectedPickup} />
              <CheckoutCard vehicle={data.car} bookingTime={bookingTime} selectedPickup={selectedPickup} setPayment={setPayment} />
            </>



          }
        </div>
      </div>
      <div className="m-10">

        {data && selectedPickup && <ListMap location={data.car.availableLocation} selectedPickup={selectedPickup} setSelectedPickup={setSelectedPickup} />}
      </div>
      <div className="h-[10vh]"></div>
    </div>
  );
};

export default Checkout;
