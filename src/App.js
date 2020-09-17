import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {


  const [{ user, token, playlists, tracks, track_id }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log(_token);

    if (_token) {
      dispatch({
        type : 'SET_TOKEN',
        token : _token
      })
    }
    spotify.setAccessToken(_token);

    spotify.getMe()
      .then(user => {
        console.log(user);
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    
    spotify.getUserPlaylists()
    .then((playlists) => {
      dispatch({
        type : 'SET_PLAYLISTS',
        playlists : playlists
      })
    })

    spotify.getPlaylist('1u80X7OTf4MspCAjjASsVa')
    .then(item => {
      dispatch({
        type : 'TOP_TRACKS',
        tracks : item
      })
    })


  }, []);

  useEffect(() => {
    spotify.getPlaylist(track_id)
    .then(item => {
      dispatch({
        type : 'TOP_TRACKS',
        tracks : item
      })
    })
  },[track_id])
 
  // console.log(top_tracks);

  return (
    <div className="App">
      {token ? <Player spotify = {spotify}/> : <Login />}
    </div>
  );
}

export default App;
