import React from 'react';
import Videoitem2 from './Videoitem2';
import '../styles/App.css';

 const Videodetails = ({video,videos,handleVideoSelect}) => {
      const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
    <div >
    <div className="d-flex bd-highlight ">
        <div className="p-2 flex-grow-1 bd-highlight">
            <div className="card mb-3 me-5 card-height">
                    <iframe src={videoSrc} allowFullScreen title="Video player" />
                <div className="card-body">
                    <h2 >{video.snippet.channelTitle}</h2>
                    <h4 className="card-title">{video.snippet.title}</h4>
                    <p className="card-text">{video.snippet.description}</p>
                </div>
            </div>
        </div>
        <div class="p-2 bd-highlight" style={{overflowY: 'scroll',width:"500px",height:"700px"}}>
            <section className="section-name  padding-y-sm">
                <div className="container">
                <header className="section-heading">
                    
                </header>
                    <div className="row">
                    {
                    videos.map((video) => {
                            return <Videoitem2 key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>
                        })
                    }
                    </div>
                </div>
            </section>
        </div>
    </div>
    </div>
    )
}
export default Videodetails;