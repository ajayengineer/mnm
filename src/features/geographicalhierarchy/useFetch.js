import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, [url]);

    return [items];
};

export default useFetch;