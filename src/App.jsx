import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import Home from './Pages/Home';
import About from './Pages/About';
import Admission from './Pages/Admission';
import Academics from './Pages/Academics';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Pages from './Pages/Pages';
import Messages from './Pages/Messages';
const App = () => {
  return (
  
 <div>
  <Navbar/>
<Routes>
  <Route path='' element={<Home/>}></Route> 
   <Route path='/About' element={<About/>}></Route>
 <Route path='/Admission' element={<Admission/>}></Route>
 <Route path='/Academics' element={<Academics/>}></Route>
 <Route path='/Events' element={<Events/>}></Route>
 <Route path='/Contact' element={<Contact/>}></Route>
 <Route path='/Pages' element={<Pages/>}></Route>
  <Route path='/Messages' element={<Messages/>}></Route>

</Routes>
</div>
  )
}

export default App