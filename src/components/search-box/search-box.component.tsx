import React, { useEffect, useState } from 'react';
import useFetch from '../../custom-hooks/useFetch';
import { connect } from 'react-redux';
import {setMovies} from '../../redux/movies/movies.action'
import './search-box.style.scss'
import { IMovie } from '../../interfaces/movie';

const SearchBox:React.FC<any>=(props)=>{

    const [{search} , setState]= useState({search:''})
    const [data,setUrl] =  useFetch('http://www.omdbapi.com/?s=avenger&apikey=e8822b76');

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        event.preventDefault();
        setState({search:event.target.value});
    }

    const handleSearch=()=>{
        const url = `http://www.omdbapi.com/?s=${search}&type=movie&page=1&apikey=e8822b76`;
        setUrl(url);
    }

    useEffect(()=>{
        props.storeMoviesData(data);
    },[data])

    const _handleKeyDown=(event:any)=> {
        if (event.key === 'Enter') {
            handleSearch();
        }
      }
      
    return(
        <div className="search-box"> 
        <i className="fas fa-search icon" onClick={handleSearch}></i> 
                <input className="input-field" 
                       type="text"
                       name="search"
                       onChange={handleChange}
                       onKeyDown={_handleKeyDown}
                       placeholder="search"/>
        </div> 
    )
}

const mapDispatchToProps =(dispatch:any)=>({
    storeMoviesData:(data:IMovie[])=>{dispatch(setMovies(data))}
})

export default connect(null,mapDispatchToProps)(SearchBox);