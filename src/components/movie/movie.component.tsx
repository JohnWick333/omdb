import React, { useEffect, useState } from 'react';
import useFetch from '../../custom-hooks/useFetch';
import { IMovie } from '../../interfaces/movie';
import DetailsModal from '../modal/modal.component';
import './movie.style.scss';

const Movie:React.FC<any>=(movie)=>{
    const [favorite,setFavorite] = useState(false)
    const [modalOpen,setModalToggle] = useState(false)
    const onModalToggle=()=>{
        setModalToggle(!modalOpen)
    }
    const handleFavoriteChange=(event:any)=>{
        event.stopPropagation();
        setFavorite(!favorite)
    }
    return(
        <div>
        <div className="movie" onClick={onModalToggle}>
            <div className="poster" style={{backgroundImage: `url(${movie.Poster})` }}>
                {
                 favorite?<i  className="fas fa-heart icon cl-r" onClick={handleFavoriteChange}></i>:<i  className="fas fa-heart icon cl-w" onClick={handleFavoriteChange}></i>
                }
            </div>
        </div>
        <DetailsModal isOpen={modalOpen} closeModal={onModalToggle} itemId={movie.imdbID}/>
        </div>
    )
}

export default Movie;