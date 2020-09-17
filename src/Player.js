import React from 'react';
import "./player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const Player = ({ spotify }) => {
    return (
        <div className = "player">
           <div className = "player_body">
               <Sidebar />
               <Body spotify = { spotify } />
           </div>
           <div>
               <Footer />
           </div>
        </div>
    );
}

export default Player;
