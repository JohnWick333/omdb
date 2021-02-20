import {IMovie} from '../../interfaces/movie';
import FavMoviesActionTypes from './favorite-movies.action.types';

const INITIAL_STATE:IMovie={
    Poster:"",
    Title:"",
    Type:"",
    Year:"",
    imdbID:""
}

interface MovieAction {
 type: string,
 payload:IMovie
}


const moviesReducer=(state=[INITIAL_STATE],action:MovieAction)=>{
    switch(action.type){
        case FavMoviesActionTypes.ADD_FAV_MOVIES:
            return {
                state:state.push(action.payload)
            }
        default:
            return state
    }
}

export default moviesReducer;