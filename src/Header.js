import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';


const Header = () => {
    const [{user, top_tracks }, dispatch] = useDataLayerValue();
    return (
        <div className = "header">
            <div className = "header_left">
            <SearchIcon />
            <input
                placeholder = "Search for artists, songs"
                type = "text"
            />
            </div>
            <div className = "header_right">
                <Avatar src = {user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
                
            </div>
        </div>
    );
}

export default Header;