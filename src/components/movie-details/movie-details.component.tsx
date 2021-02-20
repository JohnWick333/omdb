import React from 'react';
import { IMovieDetails } from '../../interfaces/movie-details';
import './movie-details.style.scss';

const MovieDetails: React.FC<IMovieDetails> = (data) => {
    return (
        <div className="modal-content">
            <div className="modal-img-container">
                <img className="image" src={data.Poster} alt="N/A" />
                <p>User Ratings: <span className="ratings">
                    <i className="fas fa-star icon"></i>
                    <i className="fas fa-star icon"></i>
                    <i className="fas fa-star icon"></i>
                </span> </p>
                <p>Meta Score: <span className="ratings">
                    <i className="fas fa-star icon"></i>
                    <i className="fas fa-star icon"></i>
                    <i className="fas fa-star icon"></i>
                </span> </p>
            </div>
            <div className="modal-movie-info">
                <h1 className="movie-title">{data.Title}</h1>
                <p>{data.Plot}</p>
                <p>Directed by : {data.Director}</p>
                <p>Cast : {data.Actors}</p>
                <p>Writers : {data.Writer}</p>
                <p>Language : {data.Language}</p>
                <p>Release Date : {data.Released}</p>
                <p>Country : {data.Country}</p>
                <p>BoxOffice : {data.BoxOffice}</p>
            </div>
        </div>
    )
}

export default MovieDetails;