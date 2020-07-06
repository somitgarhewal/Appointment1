import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  
  const [searchText, setSearchText] = useState(0);
  

  function handleSearchText(event){
    setSearchText(event.target.value)
    console.log(searchText)
  }

    return(
        <div className="container">
          <div className="row mr-5 ">   
            <div className="form-group ml-3 col-sm-5">
                <input type="text" placeholder="Search Seller" onChange={ handleSearchText }/>
                <Link to={`/searchSeller/${searchText}`}>                         
                  <button type='button'> Search </button> 
                </Link>  
            </div>
            <div className= "col-sm-6"></div>
            <div className= " col-sm-offset-2 float-right">
            <Link to={`/loginPage`}>                         
              <button type="button" className="btn btn-warning pull-right">Sign in as Seller </button>
            </Link>  
            </div>
          </div>
        </div>
     
    )
}

export default NavBar
