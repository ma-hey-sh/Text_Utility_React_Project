import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand title" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.contact_text}</a>
        </li>
        <li className="nav-item dropdown">
          <select className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <option value="" selected disabled>Dropdown</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form role="search" style={{width: '70%', margin: '10px 0px'}}>
        <div className='row' style={{ alignItems: 'center', justifyContent: 'end'}}>
          <input className="mr-2 form-control" style={{height: '50px', marginRight: '10px', width:'40%'}} type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success ml-2" style={{height: '50px', marginRight: '10px', width:'70px'}} type="submit">Search</button>
          <div className={`form-check form-switch m-2 text-${props.mode==='light'?'dark':'light'}`} style={{width:'24%', display: 'flex'}}>
            <input className="form-check-input check" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" style={{ alignItems: 'center', display: 'flex'}} htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'dark':'light'} mode`}</label>
          </div>
        </div>
      </form>
    </div>
    </div>
    </nav>
    </>
  )
}
