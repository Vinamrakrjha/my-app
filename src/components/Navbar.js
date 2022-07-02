import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <a className={`navbar-brand text-${props.mode==='dark'? 'light' : 'dark'}`} href="/">{props.naam}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link active text-${props.mode==='dark'? 'light' : 'dark'}`} aria-current="page" href="/">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className={`nav-link text-${props.mode==='dark'? 'light' : 'dark'}`} href="/About">{props.About}</a> 
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='dark'? 'light' : 'dark'}`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Dmode}</label>
                    </div>
                    {/* <div className={`form-check form-switch text-${props.mode==='dark'? 'light' : 'dark'}`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Dmode}</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    naam: PropTypes.string,
    About: PropTypes.string.isRequired,
    Dmode : PropTypes.string
}

Navbar.defaultProps = {
    naam: "lala halwaai",
    About: "Aboutme",
    Dmode : "Dark Mode"
}
