import { useState, useEffect } from "react";

// Fethiching data from API endpoint

const useFetch = url => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })

            .then(data => {
                setData(data);
                setLoading(false);
                setError(null);
            })

            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }, [url])

    return {data, loading, error}

}

export default useFetch;