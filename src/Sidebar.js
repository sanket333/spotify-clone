import React from 'react';
import './sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);
    return (
        <div className = "sidebar">
            <img className = "sidebar_logo" src = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt ="" />
            <SidebarOption option ={'Home'} Icon = {HomeIcon} />
            <SidebarOption option ={'Search'} Icon = {SearchIcon} />
            <SidebarOption option ={'Your Library'} Icon = {LibraryMusicIcon} />
            <br/>
            <strong className ="sidebar_title">PLAYLISTS</strong>
            <hr/>
            { playlists?.items?.map(playlist => 
             <SidebarOption option ={playlist.name} id = {playlist.id}/> 
            ) }

        </div>
    );
}

export default Sidebar;
