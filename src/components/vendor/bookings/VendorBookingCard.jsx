import React from 'react'
import authInstance from '../../../config/authInstance';

const VendorBookingCard = ({ data, mutate, setLoading }) => {
    const pickupCompleted = async (order) => {
        try {
            console.log("pickupcompleted", order);
            setLoading(true)
            const res = await authInstance.patch("/vendor/bookingsStatus", { orderId: order._id, pickupStatus: "pickupStatus" })

            if (res.status == 201) {

                mutate();
                setLoading(false)

            }

        } catch (error) {
            console.log(error);
            setLoading(false)


        }


    }
    const DropOffCompleted = async (order) => {
        try {
            setLoading(true)
            const res = await authInstance.patch("/vendor/bookingsStatus", { orderId: order._id, dropOffStatus: "dropOffStatus" })


            if (res.status == 201) {
                mutate();
                setLoading(false)


            }

        } catch (error) {
            console.log(error);
            setLoading(false)


        }

    }
    return (
        <div className="flex flex-row justify-around bg-gray-200 w-full rounded-3xl pt-3 shadow-lg shadow-gray-500/50     ">

            <div className="my-auto">
                <h2 className=" text-lg sm:text-xl font-semibold  text-gray-800">
                    {data?.name}
                </h2>

                <img
                    src={data?.photos[0]}
                    alt="photo of amg"
                    className="w-[180px]  h-auto mb-8 rounded-xl"
                />
            </div>

            <div className="text-center  my-auto">
                <h6 className="sm:text-xl">{!data?.myOrders?.pickupStatus ? data?.myOrders?.pickupTime + "pickup time" : data.myOrders?.dropOffTime + "dropoff time"}</h6>
                <h6 className="sm:text-xl"> {!data?.myOrders?.pickupStatus ? data?.myOrders?.pickupDate + "pickup time" : data.myOrders?.dropOffDate + "dropoff time"} </h6>
                <h1 className="sm:text-xl">{data?.myOrders?.pickup?.name} </h1>
            </div>
            <div className="h-full flex flex-col justify-center" >

                {



                    (data?.myOrders?.dropOffStatus)
                        ? <button className="bg-green-400 text-xl p-5 rounded-xl ">completed</button>
                        : (data?.myOrders?.pickupStatus)
                            ? <button className="bg-green-400 text-xl p-5 rounded-xl"
                                onClick={() => DropOffCompleted(data?.myOrders)}


                            > Drop Off</button>
                            : <button className="bg-green-400 text-xl p-5 rounded-xl"
                                onClick={() => pickupCompleted(data?.myOrders)}

                            > pickup</button>
                }


            </div>





        </div>
    );
};

export default VendorBookingCard