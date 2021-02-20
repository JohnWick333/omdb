import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { IMovie } from '../../interfaces/movie';
import { State } from '../../interfaces/state';
import Movie from '../movie/movie.component'
import './favorite-movies.style.scss';

const FavoriteMovies: React.FC<any> = ({ Movies }) => {
    return (
        <div className="fav-movies-container">
            {
                Movies ? Movies.map((movie: IMovie) => <Movie hideIcon="true" key={movie.imdbID} movie={movie} />) : <span>Oops Sorry!</span>
            }
        </div>
    )
}

const mapStateToProps = (state: State) => ({
    Movies: state.favoriteMoviesStore.favoriteMovies
})
export default connect(mapStateToProps)(FavoriteMovies);