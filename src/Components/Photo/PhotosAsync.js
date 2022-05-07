import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getPhotos = async (page) => {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
// trước tiên khi load thi render, sau do useEffect duoc goi, setPage thay doi state nen re-render, sau khi getPhotos thi state tiep tuc thay doi nen lai re-render
const PhotosAsync = () => {
    const [randomPhotos, setRandomPhotos] = useState([]);
    const [page, setPage] = useState(1);

    console.log("da render", page, randomPhotos.length);
    const handleLoadMore = async () => {
        // console.log("chac chan ra truowc useEffect");
        const newPhotos = randomPhotos;
        const image = await getPhotos(page).then((images) => {
            console.log("da get duoc photo")
            
            setRandomPhotos([...newPhotos,...images]);
        });
        setPage(page + 1);
        // trong async thì thực hiện lần lượt
        console.log("clicked", page);
    }
    useEffect(() => {
      handleLoadMore().then(() => {
        console.log("trong then");
      });
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

export default PhotosAsync;