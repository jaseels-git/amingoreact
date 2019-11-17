import React from 'react';

const NavBar = (prop) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
            <img src={prop.logo} width="64" height="64"/>
        </a>
        <form className="form-inline">
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" />
          <button 
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit">Search
          </button>
        </form>
      </nav>
    )
  }

export default NavBar;