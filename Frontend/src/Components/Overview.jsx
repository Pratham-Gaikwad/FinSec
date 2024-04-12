import React from 'react';
import "./Overview.css";

export default function Overview() {
    function formatDate(date) {
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    }
      
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
      
    return (
        <div className="Overview-main">
            <span className="Overview-row-1">Overview</span>
            <div className="Overview-row-2">
                <span className="UserName"> Pratham Gaikwad</span>
                <span className="OvervierDate"> {formattedDate} </span>
            </div>
            <div className='Overvew-row-2'>
                
            </div>
        </div>
    );
}


