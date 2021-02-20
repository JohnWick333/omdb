import React from 'react';
import Movies from '../movies/movies.component'
import './dashboard.style.scss';

const Dashboard:React.FC<any> =()=>{
    return(
        <div className="dashboard">
            <Movies className="dashboard-movies"></Movies>
        </div>
    )
}

export default Dashboard;