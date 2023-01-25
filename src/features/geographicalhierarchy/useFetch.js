import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [items, setItems] = useState(null);
    const AllData = () => {
        axios.get(url)
            .then(res => {
                setItems(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        AllData();
    }, [url]);

    return [items];
};

export default useFetch;