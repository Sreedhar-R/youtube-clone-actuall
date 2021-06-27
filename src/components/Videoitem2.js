import React from 'react'
import '../styles/App.css';

 const Videoitem2 = ({video,handleVideoSelect}) => {
    return (
        <div class="card mb-3" onClick={() => handleVideoSelect(video)} style={{maxWidth: "480px"}}>
            <div class="row g-0">
                <div class="col-md-5  mt-4" >
                    <img src={video.snippet.thumbnails.medium.url} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-7">
                <div class="card-body">
                    <p style={{fontSize:"12px",fontWeight:"bold"}} class="card-title">{video.snippet.title}</p>
                    <small style={{fontSize:"10px"}} class="card-text">{video.snippet.channelTitle}</small>
                    <p style={{fontSize:"10px"}} class="card-text"><small class="text-muted">{video.snippet.publishTime}</small></p>
                </div>
                </div>
            </div>
        </div>
)
}
export default Videoitem2;