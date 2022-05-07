import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TestUseState = () => {
    const [data, setData] = useState("nothing");
    console.log("render")
    const fetchData = async() => {
        // console.log("click 0");
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=`);
        setData(response.data);
        console.log("click 1");
    }
    console.log(data);
    useEffect(() => {
        console.log(data);
        fetchData();
        console.log(data);
        setData("ok");
        console.log(data);
    },[]);
    return (
        <div>           
           test
        </div>
    );
};

export default TestUseState;