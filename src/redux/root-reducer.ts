import { combineReducers } from 'redux';
import moviesReducer from './movies/movies.reducer';


const rootReducer = combineReducers({
  moviesStore: moviesReducer
});

export default rootReducer;
