import React from 'react'
import UserBookingCard from './UserBookingCard';

const EventList = ({ data, title }) => {
    console.log(" valies data tiltel", title, data);
    return (
        <div className='h-36 bg-slate-300 text-center sm'>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-white gap-5 p-5'>
                {data &&
                    data.map(car => <UserBookingCard data={car} />)

                }</div>


        </div>
    )
}

export default EventList