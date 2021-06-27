import React from 'react';
import Videoitem from './Videoitem';
import Sidebar from './Sidebar';
import '../styles/App.css';


const Homepage = ({videos, handleVideoSelect}) => {
    return (
        <div className="d-flex bd-highlight">

            <aside class="p-2 flex-shrink-1 bd-highlight" style={{overflowY: 'scroll',width:"250px",height:"700px"}}>
                <Sidebar/>
            </aside>

            <div class="p-2 w-100 bd-highlight" style={{overflowY: 'scroll',width:"250px",height:"700px"}}>
                <section className="section-name  padding-y-sm">
                    <div className="container">
                    <header className="section-heading">
                        
                    </header>
                        <div className="row">
                        {
                        videos.map((video) => {
                                return <Videoitem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>
                            })
                        }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Homepage;
