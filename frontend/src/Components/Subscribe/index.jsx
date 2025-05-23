import React from 'react'
import "./style.css"
function Subscribe() {
  return (
    <section className='subscribe'>
       <div className='txt'> <h4 style={{fontSize:"2rem"}}>Subcribe to our Newsletter</h4>
        <p>Get e-mail updates about our latest shops and special offers</p></div>
        <div className='inp'><input style={{height:"3rem",width:"300px"}} type="text" placeholder='enter email address' />
        <button style={{backgroundColor:"#82AE46",height:"3rem",width:"100px"}}>subscribe</button></div>
    </section>
  )
}

export default Subscribe