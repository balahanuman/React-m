import React from 'react'
import { NavLink } from 'react-router-dom';
import './TopNav.css'
const TopNav = () => {
    const menuData=[
       
        {
            path:'/about',
            name:"About"
        },
        {
            path:'/contact',
            name:"Contact"
        },
       
        
    ]
  return (
   <nav>
    <label className='logo'>Navbar</label>
    <div className='bars'>
        
    </div>
    <div className='menu'>
        {
            menuData.map((item)=>(
                <NavLink to={item.path} key={item.name}>
                    <div className='list_item'>{item.name}</div>
                </NavLink>
            ))
        }
    </div>
   </nav>
  )
}

export default TopNav