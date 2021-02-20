import React from 'react';
import './spinner.style.scss';

const Spinner: React.FC<any> = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    )
}

export default Spinner;
