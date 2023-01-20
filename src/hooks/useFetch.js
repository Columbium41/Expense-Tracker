import { useState, useEffect } from 'react';

/**
 * A function that attempts to fetch data from an endpoint url
 * @param {string} url The url to fetch data from
 * @returns {object}   An object containing fetch data
 */
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [fetchError, setFetchError] = useState(false);

    // Create an effect hook that fetches data from the json database
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    setFetchError(true);
                    setIsFetching(false);
                    throw Error("Faulty endpoint");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsFetching(false);
            })
            .catch((err) => {
                setFetchError(true);
                setIsFetching(false);
                console.log(err.message);
            });
    }, [url]);

    return { data, isFetching, fetchError };

}

export default useFetch;
