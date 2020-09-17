import React, {useRef, useState, useEffect} from 'react';
import './footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleFilledOutlinedIcon from '@material-ui/icons/PauseCircleFilledOutlined';
import { useDataLayerValue } from './DataLayer';

const Footer = () => {
    const [{song},dispatch] = useDataLayerValue();
    console.log(song);
    const[playing, setPlaying] = useState(false);
    const audioRef = useRef(null);
    // const url = "https://p.scdn.co/mp3-preview/cd1e4584425d4be8eae7489d704a36c3166a0065?cid=0bb0a62d105e4170958f2b573bca89c9"
    const setPlay = () => {
        setPlaying(!playing);
    }

    useEffect(() => {
        
        if(audioRef && audioRef.current){
            if(playing)
                audioRef.current.play();
            else
                audioRef.current.pause();
        }
       
            
        
    },[playing,song]);
    useEffect(() => {
        setPlaying(true)
    },[song]);
    return (
        
        <div class ="footer">
            <audio src = {song.preview_url} ref = {audioRef} />
            <div className = "footer_left">
                <img className = "footer_albumLogo" src = {song?.album?.images[0].url} />
                <div className = "footer_songInfo">
                    <h4>{song?.name}</h4>
                    <p>{song.artists ? song.artists[0].name : ''}</p>
                </div>
            </div>
            <div className = "footer_center">
                <ShuffleIcon className = "footer_green" />
                <SkipPreviousIcon className = "footer_icon" />
                {!playing ? <PlayCircleOutlineIcon onClick = {setPlay} className = "footer_icon" fontSize = "large"/> :
                <PauseCircleFilledOutlinedIcon onClick = {setPlay} className = "footer_icon" fontSize = "large" />}
                <SkipNextIcon className = "footer_icon" />
                <RepeatIcon className = "footer_green" />
            </div>
            <div className = "footer_right">
                <Grid container spacing = {2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
