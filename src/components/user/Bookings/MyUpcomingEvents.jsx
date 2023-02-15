import React, { useState, useEffect } from "react";
import EventList from "./EventList";
import useSWR from "swr"
import { fetcher } from "../../../config/authInstance"

const MyUpcomingEvents = ({ userType }) => {
  const { data, isLoading, error } = useSWR(`${userType = 'user' ? `/bookings` : `/vendor/bookings`}`, fetcher)
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
          showCompleted ? <EventList data={completedList} title="Completed event" /> : <EventList data={upComingList} title="upComing event" />
        }


      </>
      }




    </div>
  );
};

export default MyUpcomingEvents;
