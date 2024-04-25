
import "./CreditCardCheck.css"
import Searchbox from "../utilities/searchbox/searchbox"
import TransactionTable from "../utilities/TransactionTable/TransactionTable"
const CreditCardCheck = () => {
  return (
    <div className='CreditCardCkeck-main'>
      <span className='CreditCardCkeck-row-1'>
        Credit Card Check
        <Searchbox/>
        </span>
      <div className="CreditCardCheck-row-2"> <TransactionTable/></div>
    </div>
  )
}

export default CreditCardCheck
