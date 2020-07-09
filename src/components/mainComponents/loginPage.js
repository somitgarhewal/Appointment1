import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginSeller } from '../../redux/actions/sellerAction'
import { Redirect } from 'react-router-dom';

const LoginPage = (props) =>{

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleUserName(event) {
        setUserName(event.target.value)
    }

    function handlePassword(event) {
        setPassword(event.target.value)
    }
    
    const handleSubmit = async() => {
        const loginData = {userName: userName, password: password}
        await props.loginSeller(loginData); 
    }
    
    return(
        <div className= "container bg-dark">
          	<div className="form-group mt-5 ">
            	<form>
              		<input type="text" placeholder="user name" onChange={handleUserName}/><br/><br/>
              		<input type="password" placeholder="password" onChange={handlePassword}/><br/><br/>
              		<button type='button' onClick={()=> {handleSubmit()}}> Submit </button>  
            	</form>
				<div>{!props.activeUser ? "" : <Redirect to= '/sellerHomePage' /> }</div>         
            </div>
        </div>
    )
}

const mapDispatchToProps = {loginSeller}

const mapStateToProps = (state) => {
    return {
      activeUser : state.activeUser
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);