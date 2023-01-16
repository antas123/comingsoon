import React from 'react'
import logo from "./images/logo-hn.jpg"
import "./nav.css"

function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img className='logo' src={logo} alt="logo" />
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Our Branches</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Our Program</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact us</a>
        </li>
        <li className="nav-item">
         <button  className="btn btn-success" >Register</button>
        {/* {localStorage.getItem("done")==="1" && <button  className="btn btn-success" onClick={onLogoutHandler}><img className='logo2' src={logo2} alt="img" />Logout</button>} */}
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
