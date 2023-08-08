
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Contact from './Contact';
import '../App.css'
const About = (p) => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(" https://api.tvmaze.com/search/shows?q=all"


    ).then(
      response=>setData(response.data) 

    )
  },[])
  return (
    <>
    <div className='service'>
      
      {
        data.map(item=>{
        return(
          <Contact key={item.id}
          imgSource={item.show.url}
          name1={item.show.name}
          type1={item.show.type}
          language1={item.show.language}
          score1={item.score}
          btn1={p.btn}
          />
        )})}
      
    </div>
    </>
  )
}

export default About