import React, { Component }from 'react';
import SellerCard from './sellerCard';
import NavBar from './navBar';
import { connect } from 'react-redux';

class Home extends Component {

    state = {   
        activeUser :"fg",
        data :[ {}]
    }
    componentDidMount = () => {
        const activeUser = this.props.currentUser
        const data = this.props.data
        this.setState({ activeUser: activeUser})
        this.setState({ data: data})
      }
    render(){
        return(
            <div className = "bg-dark">
                <NavBar data = {this.props.data} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                <SellerCard  data = {this.props.data}/>
            </div>
        )
    }
  
}

const mapStateToProps = (state) => {
      return {
      data: state.data,
      currentUser: state.activeUser
    };
  }
  
  export default connect(mapStateToProps)(Home);