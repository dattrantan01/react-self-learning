import React from 'react';
import { DataYoutubeItem } from '../../Data'
import YoutubeItem from './YoutubeItem.js';


const YoutubeList = () => {
    return (
        <div className="YoutubeList">
            {
                DataYoutubeItem.map((item,index) =>{
                    return (<YoutubeItem key = {index}
                        image = {item.image}
                        avatar= {item.avatar || item.image}
                        title = {item.title}
                        desc = {item.desc}
                    />)
                })
            }
        </div>
    );
};

export default YoutubeList;