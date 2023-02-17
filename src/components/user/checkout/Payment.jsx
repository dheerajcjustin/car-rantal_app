import React, { useState, useEffect } from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import authInstance from '../../../config/authInstance';
import CheckoutForm from '../../admin/CheckoutForm';

const Payment = ({ vehicle, bookingTime, selectedPickup, setPayment }) => {


    
    const total = vehicle.price * bookingTime.rentPeriod;
    const payAmount = Math.round((total * 14) / 100 + total);

    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        authInstance.get("/payment/config").then((r) => {
            const { publishableKey } = r.data;
            setStripePromise(loadStripe(publishableKey));
            console.log("pk key is ", publishableKey);
        });
    }, []);
    useEffect(() => {
        authInstance.post("/payment/createPaymentIntent", { payAmount }).then(async (result) => {
            const { clientSecret } = await result.data;
            console.log("client secrett", clientSecret);
            setClientSecret(clientSecret);
        });
    }, []);
    return (
        <div
            id="overlay"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-40  bg-slate-500 bg-opacity-75"

        >

            <div className='mx-auto z-50 rounded-2xl bg-white p-10 ' >
                {clientSecret && stripePromise && (
                    < Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm bookingTime={bookingTime} car={vehicle} payAmount={payAmount} selectedPickup={selectedPickup} setPayment={setPayment} />
                    </Elements>
                )
                }

            </div>

        </div>


    )
}

export default Payment