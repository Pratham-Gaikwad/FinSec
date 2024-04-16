// import React from 'react';
import "./Overview.css";
import LineChart from "./utilities/LineGraph";

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
    

            <div className="Overview-row-3">

                <div className="Stat-cointainer">
                    <div className="Appoinment-stat">
                        <img className="stat-img" src="./SVG_Images/appointment.svg" alt="Calander" />
                        <p>
                            <strong>Number <br /></strong>
                            Appointments
                        </p>
                    </div>
                    <div className="Appoinment-stat">
                    <img className="stat-img" src="./SVG_Images/operation.svg" alt="Operations" />
                        <p>
                            <strong>Number <br /></strong>
                            Operations 
                        </p>
                    </div>
                    <div className="Appoinment-stat">
                    <img className="stat-img" src="./SVG_Images/StatPatient.svg" alt="New Patient" />
                        <p>
                            <strong>Number <br /></strong>
                            New Patient
                        </p>
                    </div>
                    <div className="Appoinment-stat">
                    <img className="stat-img" src="./SVG_Images/Doctor.svg" alt="Doctors" />
                        <p>
                            <strong>Number <br /></strong>
                            Doctor
                        </p> 
                    </div>
                </div>
            </div>


            <div className='Overvew-row-4'>
                <LineChart/>
            </div>
        
        
        </div>

    );
}


