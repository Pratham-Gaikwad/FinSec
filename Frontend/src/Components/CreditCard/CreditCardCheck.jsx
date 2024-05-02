
import "./CreditCardCheck.css"
import { useState } from "react"
import axios from "axios";


const CreditCardCheck = () => {
  const [name, setName] = useState("");
  const [cardData, setCardData] = useState([]);


  const fetchUser = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/get-payment`, { name });
      setCardData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='CreditCardCkeck-main'>
      <span className='CreditCardCkeck-row-1'>

        
        Credit Card Check
        
        <div className='Credit-searchbox-main'>
        <input type='text' placeholder='Search' value={name} onChange={(e)=> setName(e.target.value)} className='Credit-searchbox' />    
        <button onClick={fetchUser}className='Credit-searchbtn'>Search</button>
    
    </div>
        </span>
      <div className="CreditCardCheck-row-2"> 
      <div className="transaction-table-container">
        <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Country</th>
            <th>Sender Account</th>
            <th>Receiver Account</th>
            <th>Amount</th>
            <th>Date and Time</th>
          </tr>
        </thead>
        <tbody>
        {cardData.map((card, index) => (
            <tr key={index} className={card.amount > 2000 ? "ML-chk" : ""}>
              <td>{index + 1}</td>
              <td>{card.name}</td>
              <td>{card.Location}</td>
              <td>{card.sender_id}</td>
              <td>{card.reciver_id}</td>
              <td>{card.amount}</td>
              <td>{card.date}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
      
      </div>
    </div>
  )
}

export default CreditCardCheck
