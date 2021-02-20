import { IMovie } from '../../interfaces/movie'
import MoviesActionTypes from './movies.action.types'
export const setMovies =(movies:IMovie[])=>({
     type:MoviesActionTypes.ADD_MOVIES,
     payload:movies
})