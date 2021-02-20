import { combineReducers } from 'redux';
import favoriteMoviesReducer from './favorites-movies/favorite-movies.reducer';
import moviesReducer from './movies/movies.reducer';


const rootReducer = combineReducers({
  moviesStore: moviesReducer,
  favoriteMoviesStore: favoriteMoviesReducer
});

export default rootReducer;
