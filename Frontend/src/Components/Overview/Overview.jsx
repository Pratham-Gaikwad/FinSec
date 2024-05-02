import "./Overview.css";
// import Searchbox from "../utilities/searchbox/searchbox";
// import LineChart from "../utilities/LineGraph";
import { useState } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
  );    
export default function Overview() {

    function dataGenerator() {
        const dataArray = [];
        for (let i = 0; i < 5; i++) {
            dataArray.push(Math.floor(Math.random() * 20) + 1);
        }
        return dataArray;
    }

    let data = {
        labels: ['Credit Score', 'Debt-to-Income', 'Employment History', 'Loan Amount', 'Loan Amortixation Ratio'],
        datasets: [{
          label: '# of Votes', 
          data: dataGenerator(),
          borderWidth: 1,
          backgroundColor: [
            'red',
            'Blue',
            'Yellow',
            'Green',
            'Purple',
            'Orange'
          ],
          borderColor: [
            'red',
            'Blue',
            'Yellow',
            'Green',
            'Purple',
            'Orange'
          ]
        }]
      }
    
      let options = {
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: 'white'
            },
            title: {
              display: true,
              text: 'Approval Factors',
              color: 'white' // Set the color of x-axis label to white
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: {
              color: 'white' // Set the color of y-axis tick labels to white
            },
            title: {
              display: true,
              text: 'Score',
              color: 'white' // Set the color of y-axis label to white
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white' // Set the color of legend labels to white
            }
          }
        },
        elements: {
          point: {
            backgroundColor: 'white', // Set the color of data points to white
            borderColor: 'white' // Set the color of data point borders to white
          }
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'white', // Set the tooltip background color to white
          titleFontColor: 'white', // Set the tooltip title color to black
          bodyFontColor: 'white' // Set the tooltip body color to white
        }
      }
      

    const [name, setName] = useState("");
    const [customer, setCustomer] = useState(null);

    const fetchCustomer = async () => {
        try {
            const response = await axios.post(`http://localhost:3001/customer`,{name});
            setCustomer(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    function formatDate(date) {
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    }

    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
        
    return (
        <div className="Overview-main">
            <span className="Overview-row-1">
                Overview
                
                <div className='searchbox-main'>
                    <input type='text' placeholder='Search' value={name} onChange={(e)=> setName(e.target.value)} className='searchbox' />
                    <button onClick={fetchCustomer} className='searchbtn'>Search</button>
                 </div>


                </span>


            <div className="Overview-row-2">
                <span className="UserName"> {customer?.name}</span>
                <span className="OvervierDate"> {formattedDate} </span>
            </div>


            <div className="Overview-row-3">
                <div className="Stat-cointainer">
                    <div className="Appoinment-stat">
                        <img className="stat-img" src="/money.svg" alt="Calander" />
                        <p>
                            <strong>Debt-Income ratio<br /></strong>
                            {customer?.Dti}%
                        </p>
                    </div>
                    <div className="Appoinment-stat">
                    <img className="stat-img" src="/credit-card.svg" alt="Operations" />
                        <p>
                            <strong>Credit Score<br /></strong>
                            {customer?.CreditScore}
                        </p>
                    </div>
                    <div className="Appoinment-stat">
                    <img className="stat-img" src="/money.svg" alt="New Patient" />
                        <p>
                            <strong>Loan Amortization Ratio <br /></strong>
                            {customer?.LAR}%
                        </p>
                    </div>
                    <div className="Appoinment-stat">
                    <img className="stat-img" src="/score.svg" alt="Doctors" />
                        <p>
                            <strong>Employment Status<br /></strong>
                            {customer?.EmpStatus}
                        </p>
                    </div>
                </div>
            </div>


            <div className='Overvew-row-4'>
                <Line
                height={90}
                data={data}
                options={options}
                />
            </div>

        </div>

    );
}