import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'




const Contact = ({key, imgSource, name1,type1,language1,score1,btn1}) => {
  
  

 
  return (
    <div className='card'>
        <h2>{ name1}</h2>
        <img src={imgSource} className='serviceImg'/>
        <p>{type1}</p>
        <p>{language1}</p>
        <p>{score1}</p>
        <div className='btnBox'>
            <div className='btn'>
          {btn1}  
          
            </div>
        </div>
      
    </div>
  )
}

export default Contact


