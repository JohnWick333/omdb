import {IMovie} from '../../interfaces/movie';
import { State } from '../../interfaces/state';
import MoviesActionTypes from './movies.action.types';

const INITIAL_STATE = {
    movies:[{Poster:"",
    Title:"",
    Type:"",
    Year:"",
    imdbID:""}]
}

interface MovieAction {
 type: string,
 payload:IMovie[]
}


const moviesReducer=(state=INITIAL_STATE,action:MovieAction)=>{
    switch(action.type){
        case MoviesActionTypes.ADD_MOVIES:
            return {
                ...state,movies:action.payload
            }
        default:
            return state
    }
}

export default moviesReducer;