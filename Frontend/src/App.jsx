
import './App.css'
import Login from './Components/Login/Login'
import Disp from './Components/Render/disp'
import Signup from './Components/Signup/Signup'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
function App() {
 
  return (  
  <>

     <BrowserRouter>
    <Routes>
      <Route path='/register' element = {<Signup/>}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      < Route path='/disp' element = {<Disp/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
