import"./LoanApproval.css"

import Dropbox from "../utilities/Dropbox"

const LoanApproval = () => {
  return (
    <div>
        <div className="Approval-main">

        <span className="Approval-row-1">Loan Approval</span>


        <div className="Approval-row-2">
          <Dropbox/>
        </div>
        </div>
    </div>
  )
}

export default LoanApproval
