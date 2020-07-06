import React from 'react';

const LoginPage = () =>{

    function handleUserName(event) {
        console.log(event)
    }

    function handlePassword(event) {
        console.log(event)
    }
    return(
        <div className= "container bg-dark">
        <div className="form-group mt-5 ">
                <input type="text" placeholder="user name" onChange={handleUserName}/><br/><br/>
                <input type="password" placeholder="password" onChange={handlePassword}/><br/><br/>
                <button type='button'> Search </button>   
            </div>
      </div>
    )
}

export default LoginPage