import React from 'react';


function YoutubeItem(props) {
  
    return (
      <div className="youtube-item">
        <div className="youtube-image">
          <img  
            src={props.image}
            alt=""
          />
        </div>
        <div className="youtube-footer">
          <img className="youtube-avatar" src={props.avatar} alt = ""/>
          <div className="youtube-info">
            <h3 className="youtube-title">
              {props.title}
            </h3>
            <p className="youtube-desc">
              {props.desc}
            </p>
          </div>
        </div>
  
      </div>
  
    )
};
export default YoutubeItem;
