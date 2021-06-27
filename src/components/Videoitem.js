import React from 'react';
import '../styles/App.css';

 const Videoitem = ({video, handleVideoSelect}) => {
    return (
            <div className="card me-2 mb-2" onClick={() => handleVideoSelect(video)} style={{width: "18rem"}}>
                <img src={video.snippet.thumbnails.medium.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{video.snippet.channelTitle}</h5>
                    <h6 className="card-text">{video.snippet.title}</h6>
                </div>
            </div>
    )
}
export default Videoitem;