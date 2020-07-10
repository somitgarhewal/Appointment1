import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  
  const [searchText, setSearchText] = useState(0);
  

  function handleSearchText(event){
    setSearchText(event.target.value)
  }

    return(
      <div className="container">
        <div className="row">   
          <div className="form-group ml-1 col-lg-3">
            <input type="text" placeholder="Search Seller" onChange={ handleSearchText }/>
            <Link to={`/searchSeller/${searchText}`}>                         
              <button type='button' className="btn btn-warning text-danger"> Search </button> 
            </Link>  
          </div>
          <div className= "col-lg-6"></div>
          <div className= " col-lg-offset-2 float-right">
            <Link to={`/loginPage`}>                         
              <button type="button" className="btn btn-warning text-danger pull-right">Sign in as Seller </button>
            </Link>  
          </div>
        </div>
      </div>
     
    )
}

export default NavBar
