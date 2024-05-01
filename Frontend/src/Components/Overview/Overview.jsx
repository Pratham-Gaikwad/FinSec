import "./Overview.css";
// import Searchbox from "../utilities/searchbox/searchbox";
import LineChart from "../utilities/LineGraph";
import { useState , useEffect} from "react";
import axios from "axios";


export default function Overview() {

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
                    <LineChart />
            </div>

        </div>

    );
}