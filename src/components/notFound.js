import React from 'react';
import ErrorImg from '../img/404.png' 
import "../css/notFound.css";


const notFound = () => {
    return (
        <div>
            <img src={ErrorImg} alt="icon" className="errorImg"  />
        </div>
    );
};
  
export default notFound;
