import React from 'react'
import TopNav from './pages/TopNav';
import { BrowserRouter,Routes,Route, NavLink } from 'react-router-dom'
import Contact from './pages/Contact';
import About from './pages/About'






const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <TopNav/>
      <Routes>
        
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        
        
      </Routes>
      </BrowserRouter>
     
      <About 
      btn='button'/>
    </div>
  )
}

export default App
