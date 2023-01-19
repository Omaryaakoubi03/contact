import React,{useState} from 'react'
import {Link} from 'react-router-dom';

function Createcontan({data,setdata,Changer,newContact,add}) {
   
    
  return (
    <div>
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
                <div className='navcreate'>
            
                <Link to="/" className='ainfo av'>Cancel</Link>
                    <h5>New Contact</h5>
                    <button className='btnnav v' onClick={()=>add(newContact)}>Done</button>

                </div>
                <div className='infonav'>
                    <img className='imginfo' src="user.png" alt="" />
                    <a className='ainfo '  disabled href="">Add Photo</a>
                </div>
                <div className='inputform'>
                    <input className='inp' required type="text" placeholder='Nom' name="name" value={newContact.name} onChange={Changer}  />
                    <input className='inp' required type="text" placeholder='Tele'name="phone" value={newContact.phone} onChange={Changer} />
                    <input className='inp last' required type="text" placeholder='Ville'name="ville" value={newContact.v} onChange={Changer}  />
                    {console.log(newContact)}
                </div>
             
						<div class="homee "></div>
					
            </div>

    </div>
  )
}

export default Createcontan
