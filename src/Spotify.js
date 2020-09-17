
export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = process.env.REACT_APP_URL; 

const clientId = "0bb0a62d105e4170958f2b573bca89c9";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

export const getTokenFromUrl  = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) => {
        var parts = item.split("=");
        initial[parts[0]] = 
        decodeURIComponent(parts[1]);
        return initial;
    },{});
}

export const accessURL = 
    `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;