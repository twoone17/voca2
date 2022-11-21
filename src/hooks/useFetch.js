import React, {useState, useEffect, useMemo, useCallback} from 'react';

const useFetch = (url) => {

    const [data,setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(result => {
                return result.json()
            })
            .then(data =>{
                setData(data)
            })
    }, [url]);

    return data;
}

export default useFetch;