import React from 'react';
import './sidebarOption.css';
import { useDataLayerValue } from './DataLayer';

const SidebarOption = ({ option, id, Icon }) => {
    const [{ track_id, playlists }, dispatch] = useDataLayerValue();
    const getPlaylist = () => {
        
        dispatch({
            type : 'CHANGE_PLAYLIST',
            id : id
        })
    }
    return (
        <div onClick = {getPlaylist} className = "sidebarOption">
            {Icon && <Icon className ="sidebarOption_icon" />}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>
    );
}

export default SidebarOption;
