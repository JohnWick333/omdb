import React, { useEffect, useState } from 'react';
import './search-box.style.scss'

const SearchBox:React.FC<any>=()=>{
    const [{search} , setState]= useState({search:''})
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        event.preventDefault();
        setState({search:event.target.value})
        debugger
    }

    useEffect(() => {
      
    },[search]);
      
    return(
        <div className="search-box"> 
        <i className="fas fa-search icon"></i> 
                <input className="input-field" 
                       type="text"
                       name="search"
                       onChange={handleChange}
                       placeholder="search"/>
        </div> 
    )
}

export default SearchBox;