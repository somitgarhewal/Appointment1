import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/sellerAction'
import { Redirect } from 'react-router-dom'; 

const SellerHomePage = (props) => {

    return(
        <div className="container-fluid bg-dark pt-3 pb-3">
            <button className="btn btn-primary float-right" onClick={()=> props.logout()}>Logout </button>
            <h3 className ="text-danger text-center">Hello {props.data.activeUser.name}</h3> 
            <div>{props.data.activeUser == "none" ? <Redirect to= '/loginPage' />  : ""}</div>
        </div>        
    )
}

const mapDispatchToProps = {logout}
const mapStateToProps = (state) => {
    return {
      data: state
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SellerHomePage);