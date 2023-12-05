import React, { useState, useEffect } from "react";
import VendorNavbar from "../../components/navbar/VendorNavbar";
import useSWR from "swr";
import { fetcher } from "../../config/vendorAxios";
import EventList from "../../components/user/Bookings/EventList";
import VendorBookings from "../../components/vendor/bookings/VendorBookings";
import LoadingOverlay from 'react-loading-overlay-ts';


const Bookings = () => {
  const [loading, setLoading] = useState(false);
  const { data, isLoading, error, mutate } = useSWR(`/vendor/bookings`, fetcher)
  // console.log(data);
  const [completedList, setCompletedList] = useState([]);
  const [upComingList, setUpComingList] = useState([]);
  useEffect(() => {
    if (data) {
      setCompletedList(data?.completedEvents)
      setUpComingList(data?.upComingEvents)

    }
  }, [data]);
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <LoadingOverlay active={loading}
      spinner
      text='Loading your content...' >
      <div className=" bg-[url('/banner.jpg')] bg-cover bg-center">
        <VendorNavbar />
        <div className=" py-10 sm:px-10  w-full h-screen   ">

          <div className="bg-white shadow-xl rounded-xl">
            <div>
              <h2 className="text-3xl text-center ">Events</h2>
              <div className="grid grid-cols-2 border-banana">
                <h1 className={`text-center  border-banana rounded-xl shadow-lg ${showCompleted ? `` : `border-b-[4px] border-r-[4px] `}   p-4`}
                  onClick={() => setShowCompleted(false)}
                >Up Coming Events </h1>
                <h1 className={`text-center bg border-banana rounded-xl  shadow-lg ${showCompleted ? `border-b-[4px] border-l-[4px]` : ``}  p-4`}
                  onClick={() => setShowCompleted(true)}
                >Completed Events </h1>
              </div>
              {
                isLoading && <p>loading</p>

              }
              {data && <>
                {
                  showCompleted ? <VendorBookings setLoading={setLoading} mutate={mutate} data={completedList} title="Completed event" /> : <VendorBookings setLoading={setLoading} mutate={mutate} data={upComingList} title="upComing event" />
                }


              </>
              }
            </div>

          </div>

        </div>


      </div>
    </LoadingOverlay>
  );
};

export default Bookings;
