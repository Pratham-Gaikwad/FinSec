import './searchbox.css';
import { useState } from 'react';
import axios from 'axios';
const searchbox = () => {

  const [name , setName] = useState(' ')
  const[user , setUser] = useState(null)

  const searchUser = async()=> {
    try {
      const response = await axios.get("http://localhost:3001/cuostomer/${user}")
      setUser(response.data)
    } catch (error) {
      console.error("Error in seraching User.",error)
    }
  }

  return (
    <div className='searchbox-main'>
        <input type='text' placeholder='Search' value={name} onChange={(e)=> setName(e.target.value)} className='searchbox' />
        <button onClick={searchUser} className='searchbtn'>Search</button>
    </div>
  )
}
export default searchbox
