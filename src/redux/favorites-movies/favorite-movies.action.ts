import { IMovie } from '../../interfaces/movie'
import FavMoviesActionTypes from './favorite-movies.action.types'

export const setFavoriteMovies = (movies: IMovie) => {
     return {
          type: FavMoviesActionTypes.ADD_FAV_MOVIES,
          payload: movies
     }
}