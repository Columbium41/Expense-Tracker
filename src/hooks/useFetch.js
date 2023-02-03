import { useState, useEffect } from 'react';

/**
 * A function that attempts to fetch data from local storage
 * @returns {object}   An object containing fetch data
 */
const useFetch = () => {
    const [data, setData] = useState([]);
    const [nextID, setNextID] = useState(0);
    const [isFetching, setIsFetching] = useState(true);
    const [fetchError, setFetchError] = useState(false);

    // Create an effect hook that fetches data from the json database
    useEffect(() => {
        try {
            setIsFetching(true);

            const fetchedData = JSON.parse(localStorage.getItem("expenses"));
            if (fetchedData !== null) {
                setData(fetchedData);
            }
            else {
                localStorage.setItem("expenses", "[]");
            }

            const fetchedID = localStorage.getItem("nextID");
            if (fetchedID !== null && fetchedData.length > 0) {
                setNextID(parseInt(fetchedID));
            }
            else {
                localStorage.setItem("nextID", 0);
            }
        }
        catch (err) {
            console.log(err);    
            setFetchError(true);
        }
        finally {
            setIsFetching(false);
        }
    }, []);

    return { data, nextID, isFetching, fetchError };

}

export default useFetch;
