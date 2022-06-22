import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const titleHome = ()=>{
     document.title="TextUtils - Home";
  }
  const titleAbout = ()=>{
    document.title="TextUtils - About";
 }
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.Title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
          <Link className="nav-link active" aria-current="page" to="/" onClick={titleHome}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" onClick={titleAbout}>{props.aboutText}</Link>
        </li>

      </ul> 
        {/*<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
        </form>*/}
        <div className={`form-check form-switch mx-1 text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
         </div>

    </div>
  </div>
</nav>
  );
}

Navbar.propTypes = {
    aboutText: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    Title: 'TextUtils',
    aboutText: 'About'
};



