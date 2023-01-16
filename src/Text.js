import React from 'react'
import "./text.css"
import cs from "./images/csp.png"
// import logo from "./images/logo-hn.jpg"


function Text() {
  return (
    <div className='bgg'>
      <h1>SOMETHING AWESOME IS COMING!!</h1>
      <h3>Humara Nagar is coming to your Nagar soon</h3>
      <div className='btns'>
            <button  className="btnn1" type="submit">Notify Me</button>
            <button  className="btnn2" type="submit">About Us</button>
     </div>
     <img className='cso' src={cs} alt="" />
     {/* <img src={logo} className="logo" alt="" /> */}
    </div>
  )
}

export default Text
