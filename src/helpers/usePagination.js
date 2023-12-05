import React, { useState, useCallback, useRef, useEffect } from "react";

import authInstance from "../config/authInstance";
import axios from "axios";


const usePagination = (endPoint, pageIndex) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [lists, setLists] = useState([])
    const [hasMore, setHasMore] = useState(false)


    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        authInstance.get(`${endPoint}${pageIndex}`, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log('the result from the admin /vendor', res.data);
            setLists(prevList => {
                return [...prevList, ...res.data.map(b => b)]
            })
            setHasMore(res.data.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            console.log("errore inside the set userdata", e);
            setError(true)
        })
        return () => cancel()
    }, [pageIndex])

    return { loading, error, lists, hasMore }
}


export default usePagination