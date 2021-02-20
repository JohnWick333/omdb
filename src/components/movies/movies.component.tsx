import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { IMovie } from '../../interfaces/movie';
import { State } from '../../interfaces/state';
import Movie from '../movie/movie.component'
import './movies.style.scss';

const Movies: React.FC<any> = ({ Movies }) => {
    useEffect(() => {
        console.log(Movies)
    })
    return (
        <div className="movies-container">
            {
                Movies ? Movies.map((movie: IMovie) => <Movie key={movie.imdbID} movie={movie} />) : <span>Oops Sorry!</span>
            }
        </div>
    )
}

const mapStateToProps = (state: State) => ({
    Movies: state.moviesStore.movies
})
export default connect(mapStateToProps)(Movies);