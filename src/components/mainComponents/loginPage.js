import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginSeller } from '../../redux/actions/sellerAction'
import { Redirect } from 'react-router-dom';

const LoginPage = (props) =>{

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");   
    
    const handleSubmit = () => {
        const loginData = {userName: userName, password: password}
        props.loginSeller(loginData); 
        console.log(props.activeUser);
    }
    
    return(
        <div className= "container-fluid pt-5 pb-5 bg-dark">
          	<div className="form-group text-center ">
            	<form>
              		<input type="text" placeholder="user name" onChange={(event)=> setUserName(event.target.value)}/><br/><br/>
              		<input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)}/><br/><br/>
              		<button type='button' onClick={()=> {handleSubmit()}}> Submit </button>  
            	</form>
				<div>
                    {!props.activeUser ?
                    <h6 className="text-danger pt-3">Wrong Id or password</h6> :
                    props.activeUser === "none"?
                    "" :
                    <Redirect to= '/sellerHomePage' /> 
                    }
                </div>         
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