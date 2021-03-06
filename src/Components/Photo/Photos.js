import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getPhotos = (page) => {
    return axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
        .then(response => {
            // console.log(response);
            // tra ve mot promise
            // console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};
// trước tiên khi load thi render, sau do useEffect duoc goi, setPage thay doi state nen re-render, sau khi getPhotos thi state tiep tuc thay doi nen lai re-render
const Photos = () => {
    const [randomPhotos, setRandomPhotos] = useState([]);
    const [page, setPage] = useState(1);

    console.log("da render", page, randomPhotos.length);
    const handleLoadMore = () => {
        const newPhotos = randomPhotos;
        getPhotos(page).then((images) => {
            console.log("da get duoc photo")
            console.log(images)
            
            setRandomPhotos([...newPhotos,...images]);
            console.log("render trong then");
            // trong then thi thực hiện lần lượt
        });
        // console.log("render ngoai then1");
        setPage(page + 1);
        // setPage và getPhotos đều async nhưng setPage ưu tiên trước        
        console.log("clicked", page);
    }
    useEffect(() => {
      handleLoadMore();
      console.log("da useEffect")
    },[]);
    return (
        <div>

            <div className="grid grid-cols-5 gap-5 p-5">
                {randomPhotos.map((image,index)=>{
                    return (
                        <div key={image.id} className="p-3 bg-white shadow-md rounded-lg h-[200px]">
                            <img
                                src = {image.download_url}
                                alt = {image.author}
                                className="w-full h-full object-cover rounded-lg"

                            />
                        </div>
                    )
                })}
            </div>
            <div className="text-center">
                <button onClick={handleLoadMore}className="inline-block px-6 py-3 bg-purple-500 text-white cursor-pointer">Load More</button>

            </div>
        </div>
    );
};

export default Photos;