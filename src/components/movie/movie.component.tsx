import React, { useState } from 'react';
import { IMovie } from '../../interfaces/movie';
import { setFavoriteMovies } from '../../redux/favorites-movies/favorite-movies.action';
import { connect } from 'react-redux';
import DetailsModal from '../modal/modal.component';
import './movie.style.scss';

const Movie: React.FC<any> = ({ movie, setFavoriteMovie, hideIcon }) => {

    const [favorite, setFavorite] = useState(false)
    const [modalOpen, setModalToggle] = useState(false)
    const onModalToggle = () => {
        setModalToggle(!modalOpen)
    }
    const handleFavoriteChange = (event: any) => {
        event.stopPropagation();
        const tempFav = !favorite;
        setFavorite(tempFav);
        setFavoriteMovie(movie);
    }
    return (
        <div>
            {
                movie.imdbID ? <div className="movie" onClick={onModalToggle}>
                    <div className="poster" style={{ backgroundImage: `url(${movie.Poster})` }}>
                        {
                            favorite || hideIcon ? <i className="fas fa-heart icon cl-r" onClick={handleFavoriteChange}></i> : <i className="fas fa-heart icon cl-w" onClick={handleFavoriteChange}></i>
                        }
                    </div>
                </div> : ""
            }
            <DetailsModal isOpen={modalOpen} closeModal={onModalToggle} itemId={movie.imdbID} />
        </div>
    )
}
const mapDispatchToProps = (dispatch: any) => ({
    setFavoriteMovie: (movie: IMovie) => dispatch(setFavoriteMovies(movie))
})
export default connect(null, mapDispatchToProps)(Movie);