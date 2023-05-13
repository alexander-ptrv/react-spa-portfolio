import { useState, useEffect } from "react";


// Fethiching data from Strapi API
//
// Uncomment setTimeout to test the loading

const useFetch = url => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // setTimeout(() => {
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
        // }, 2000)
    }, [url])

    return {data, loading, error}

}

export default useFetch;