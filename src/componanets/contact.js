import React,{useState} from 'react'
import './contact.css'
import Navohone from './navohone'


function Contact({data,delet,setdata,hm}) {

  

  return (
    <>
 
		
		<Navohone data={data} delet={delet} setdata={setdata} hm={hm}/>
		
		
    </>
  )
}

export default Contact