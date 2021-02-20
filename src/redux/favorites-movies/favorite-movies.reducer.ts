import { IMovie } from '../../interfaces/movie';
import FavMoviesActionTypes from './favorite-movies.action.types';

const INITIAL_STATE = {
    favoriteMovies: [{
        Poster: "",
        Title: "",
        Type: "",
        Year: "",
        imdbID: ""
    }]
}

interface MovieAction {
    type: string,
    payload: IMovie
}

const selectFavorite = (state: any, selectedMovie: IMovie) => {
    if (selectedMovie.imdbID && state.favoriteMovies) {
        debugger
        const existingMovie = state.favoriteMovies.find((item: IMovie) => item.imdbID === selectedMovie.imdbID);
        if (existingMovie) {
            const newState = state.favoriteMovies.filter((item: IMovie) => item.imdbID !== selectedMovie.imdbID)
            console.log(newState)
            return { ...state, favoriteMovies: newState };
        } else {
            state.favoriteMovies.push(selectedMovie);
            return { ...state };
        }
    } else {
        return state;
    }
}

const favoriteMoviesReducer = (state = INITIAL_STATE, action: MovieAction) => {
    switch (action.type) {
        case FavMoviesActionTypes.ADD_FAV_MOVIES:
            return selectFavorite(state, action.payload)
        default:
            return state
    }
}

export default favoriteMoviesReducer;