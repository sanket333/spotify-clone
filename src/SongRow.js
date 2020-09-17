import React from 'react';
import './SongRow.css';
import { useDataLayerValue } from './DataLayer';


const SongRow = ({ track }) => {
    const [{song}, dispatch] = useDataLayerValue();
    // console.log(track);
    const addSong = () => {
        dispatch({
            type : 'ADD_SONG',
            song : track
        })
        
    }
    return (
        <div className = 'songRow' onClick = {addSong} >
            <img className = "songRow_album" src = {track.album.images ? track.album.images[0].url : "#"} />
            <div className = "songRow_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists
                        .map(artist => artist.name).join(", ")} -{" "}
                        {track.album.name}
                </p>

            </div>
        </div>
    );
}

export default SongRow;
