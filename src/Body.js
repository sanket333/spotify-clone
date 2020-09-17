import React from 'react';
import './body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow'


const Body = ({ spotify }) => {
    const [{user, tracks }, dispatch] = useDataLayerValue();
   
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src= {tracks.images ? tracks.images[0]?.url : "#"} className="body_infoImage" />

                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{tracks?.name}</h2>
                    <p>{tracks?.description}</p>
                </div>
            </div>
            <div className = "body_songs">
                {tracks?.tracks?.items.map(song => 
                    <SongRow track = {song.track} />    
                )}
            </div>
           
        </div>
    );
}

export default Body;
