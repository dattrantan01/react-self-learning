import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';


//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState('react');
    const handleFetchData = useRef({});
    const [loading, setLoading] = useState(true);

    console.log("render");
    // console.log(hits);
    handleFetchData.current = async () => {
       try {
        console.log('trong Effect 1');
        setLoading(true);
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
        // neu response.data co thi ta se lay response.data.hits
        setHits(response.data.hits ? response.data.hits : []);
        console.log('trong Effect 2');
        console.log(hits);
        // console.log(response.data);
        setLoading(false);
       }
       catch(error){
           setLoading(false);
       }
    }  
    useEffect(() => {
        handleFetchData.current();
    }, [query]);
    
    return (
        <div>
            <input 
                type="text" 
                className='border border-green-500 text-black p-5 mb-5' 
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
            />
            {loading && <div className='loading w-9 h-9 border-green-700 rounded-full border-4 border-r-transparent animate-spin'></div>}
            {!loading && hits.length > 0 && hits.map((hit, index)=> {
                return (<h3 key = {index}>{hit.title}</h3>)
            })}
        </div>
    );
};

export default HackerNews;