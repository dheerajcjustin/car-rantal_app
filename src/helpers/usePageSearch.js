import React, { useState, useCallback, useRef, useEffect } from "react";

import authInstance from "../config/authInstance";
import axios from "axios";


const usePageSearch = (endPoint, pageIndex) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [lists, setLists] = useState([])
    const [hasMore, setHasMore] = useState(false)
    // const [time, setTime] = useState({});
    // const [pickups, setPickups] = useState();
    let time;
    let pickups;


    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        authInstance.get(`${endPoint}${pageIndex}`, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log('the result from the search', res.data.cars);
            setLists(prevList => {
                return [...prevList, ...res.data.cars.map(b => b)]
            })
            console.log("time", res.data.time)
            console.log("pickups", res.data.pickups)
            time = res.data.time
            pickups = res.data.pickups
            setHasMore(res.data.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            console.log("errore inside the set userdata", e);
            setError(true)
        })
        return () => cancel()
    }, [pageIndex])

    return { loading, error, lists, hasMore, pickups, time }
}


export default usePageSearch