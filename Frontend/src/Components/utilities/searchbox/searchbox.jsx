import './searchbox.css';
const searchbox = () => {
  return (
    <div className='searchbox-main'>
        <input type='text' placeholder='Search' className='searchbox' />
        <button className='searchbtn'>Search</button>

    </div>
  )
}
export default searchbox
