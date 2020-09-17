export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item :  null,
    track_id : [],
    tracks : [],
    song : {},
    
    // token : 'BQD93bQnDMlheCSWNUyWeIVVTuMpqy32hgaiBhIGr_o3mlBUg9kqZu13cSydhvl9Hc35GLfrW79R7_EuCUox2iLmjqg0wjsEsMTzcHpwBx_qjbeCMcbD8p8rqW4lQI-MkdbOdJYbEctnGd5Csq4uKsMYXBeWIcg88zqHyUJkpSIZVqlI'
}

export const reducer = (state,action) => {
    // console.log(action);

    switch(action.type){
        case 'SET_USER' :
            return{
                ...state,
                user : action.user
            }
        case  'SET_TOKEN' :
                return{
                    ...state,
                    token : action.token
                }
        case  'SET_PLAYLISTS' :
                return {
                    ...state,
                    playlists : action.playlists
                }
        case 'TOP_TRACKS' :
                return {
                    ...state,
                    tracks : action.tracks
                }
        case 'CHANGE_PLAYLIST' :
                return {
                    ...state,
                    track_id : action.id
                }
        case 'ADD_SONG' : 
                return {
                    ...state,
                    song : action.song
                }
        
        default :
            return state;
    }
}