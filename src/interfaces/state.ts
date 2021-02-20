import { IMovie } from "./movie";

export interface State {
    moviesStore: {
        movies: IMovie[];
    },
    favoriteMoviesStore: {
        favoriteMovies: IMovie[];
    }
};
