import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../search-box/search-box.component'
import './header.style.scss';

const Header: React.FC<any> = () => (
    <div className='header'>
        <div className="header-links">
            <Link className='logo-container option' to='/main'>
                <h1>SHOWTIME</h1>
            </Link>
            <Link className='option' to='/main'>
                Movies
        </Link>
            <Link className='option' to='/favorites'>
                Favorites
        </Link>
        </div>
        <div className="header-search">
            <SearchBox />
        </div>
    </div>)

export default Header;
