import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import MovieItem from './MovieItem';

//https://api.themoviedb.org/3/search/movie?api_key=ffbb0941ef45ff4d3301e36eb631d750&query=''
const MovieSearchApp = () => {
    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState("");
    const queryDebounce = useDebounce(query, 500);
    console.log('render');
    useEffect( () => {
        const fetchData = async() => {
            
            // console.log("fetch data done"); 
            
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ffbb0941ef45ff4d3301e36eb631d750&query='${queryDebounce}'`);
            setMovie(response.data.results);
            console.log("fetch data done 1");
        };
        fetchData();
        // const data = await fetchData();
        console.log("fetch data useEffect");
    },[queryDebounce])

    return (
        <div className="p-10">
            <div className="w-full max-w-[500px] mx-auto mb-7">
                <input 
                    type="text"
                    className="w-full rounded-lg border border-purple-500 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)] p-5" 
                    placeholder="Search movie ..."
                    onChange={(e) =>{
                        setQuery(e.target.value);
                    }}
                />
            </div>
            <div className="grid grid-cols-3 gap-10">
                {movie.length > 0 && movie.map((item, index) => 
                    <MovieItem key={item.id} data={item}></MovieItem>
                )}

            </div>
        </div>
    );
};

export default MovieSearchApp;
