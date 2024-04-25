import "./Overview.css";
import Searchbox from "../utilities/searchbox/searchbox";
import LineChart from "../utilities/LineGraph";

export default function Overview() {
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
                <Searchbox/>
                </span>


            <div className="Overview-row-2">
                <span className="UserName"> Pratham Gaikwad</span>
                <span className="OvervierDate"> {formattedDate} </span>
            </div>


            <div className="Overview-row-3">
                <div className="Stat-cointainer">
                    <div className="Appoinment-stat">
                        <img className="stat-img" src="/money.svg" alt="Calander" />
                        <p>
                            <strong>Debt-Income ratio<br /></strong>
                            45%
                        </p>
                    </div>
                    <div className="Appoinment-stat">
                    <img className="stat-img" src="/credit-card.svg" alt="Operations" />
                        <p>
                            <strong>Credit Score<br /></strong>
                            780
                        </p>
                    </div>
                    <div className="Appoinment-stat">
                    <img className="stat-img" src="/money.svg" alt="New Patient" />
                        <p>
                            <strong>Loan Amortization Ratio <br /></strong>
                            80%
                        </p>
                    </div>
                    <div className="Appoinment-stat">
                    <img className="stat-img" src="/score.svg" alt="Doctors" />
                        <p>
                            <strong>Employment Status<br /></strong>
                            Employed 
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