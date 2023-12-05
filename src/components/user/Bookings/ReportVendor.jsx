import React, { useState, useEffect } from 'react'
import authInstance from '../../../config/authInstance';

const ReportVendor = ({ carData }) => {
    const [reason, setReason] = useState("");
    useEffect(() => {
        setReasonErr("")
    }, [reason]);

    const [reasonErr, setReasonErr] = useState("");
    const buttonSubmitHandler = async () => {
        if (reason.trim().length < 5) {
            return setReasonErr("minimum character 5")
        }
        const res = await authInstance.post("/reportVendor", { message: reason, vendorId: carData?.vendor, carId: carData?.carData._id, carData: carData })

    }
    return (
        <div className=''>
            <h2 className='text-center text-xl text-white'>Report The car</h2>
            <div className='p-3 flex flex-col bg-white'>
                <label className='p-2 block mb-2 text-sm font-medium text-gray-900' htmlFor="comment ">Report</label>
                <div className=''>
                    <textarea onChange={(e) => setReason(e.target.value)} defaultValue={reason} className='m-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' name="" id="" cols="30" rows="5" placeholder="Describe your experience ..."></textarea>
                    <p>{reasonErr}</p>
                </div>
            </div>
            <button className='text-xl bg-banana float-right rounded-md m-2 p-2' onClick={buttonSubmitHandler}>Submit</button>
        </div>
    )
}

export default ReportVendor