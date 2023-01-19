import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { FaUserTimes,FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';



//MdPersonRemoveAlt1



function Navohone({data,delet,setdata,hm}) {
    const [serch,setserch]=useState('')
    
 
    
  return (
   <>
   <div className="main">
        <div className="iphone home" id="iphone">
            <div className="inner" id="inner">
                <div className="top">
                    <div className="left">
                        <p className="time">12:00</p>
                    </div>
                    <div className="center">	
                        <div className="mic">
                        </div>

                        <div className="cam">
                            
                        </div>
                    </div>

                    <div className="right">

                    
                    <img src="singl.png" className='cellular'  alt="" />
                    
                

                        <img src="Icons/wifi.png" className="wifi"/>
                        <img src="Icons/battery.png" className="battery"/>

                    </div>
                </div>
                    </div>
                </div>
                <div className='item'>
                  <Link to="/create" className='plus'>+</Link>
                 
                  
                 
                </div>
                <h1 className='titleapp'>Contacts</h1>
                <div >

                <Form.Control
              type="search"
              placeholder=  "Search "
              className="serach"
              aria-label="Search"
              onChange={(e)=>setserch(e.target.value)}
              />
              
              </div>
              <div className='line'></div>
              <div className='infouser'>
                <img src="profile.jpg" alt="" className='imgprofile'/>
                <div>
                    <h2>Omar Yaakoubi</h2>
                    <p>My Card</p>
                </div>
                <a onClick={hm}  className='tri'>Trie</a>
              </div>
              <div className='contunt'>
               {
                data.filter((item)=>{
                    return serch.toLocaleLowerCase()==="" ? item :item.ville.toLocaleLowerCase().includes(serch);
                }).map((t)=>{
                    return(
                        <div key={t.id} className='linee'>
                <h1> {t.nom} </h1>
                <h1>{t.tel}</h1>
                <h1> {t.ville}</h1>
                <FaUserTimes className='logox' onClick={() => delet(t.id)}/>
                
               </div>
                    )
                })
               }
            
              </div>

             
						<div class="homee "></div>
					
            </div>
   </>
  )
}

export default Navohone
