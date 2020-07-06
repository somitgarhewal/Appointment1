import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchCard extends Component{
    // props.location.state.id
   state= {
    searchedSeller:[]
   }
     
    componentDidMount = () => {
      const name = this.props.match.params.name;
      const searchedSeller = this.props.data.filter(user => {if(user.name == name)return user})
      this.setState({searchedSeller: searchedSeller})
    }
    render(){
  return(
    <div className= "container ">
      <div className= "row">
        {this.state.searchedSeller.length == 0 ?  <h1>Not found</h1>:
        this.state.searchedSeller.map(item =>(<div className="card col-md-3 bg-secondary mx-auto pt-3 ml-3 mr-3 mb-3 mt-3 my-auto border border-warning rounded m-lg-2 text-center" >
            <div className="card-body">
              <h5 className="card-title">{item.id + "-"+item.name}</h5>
              <a className="btn btn-primary">Make Appointment</a>
            </div>
          </div>)
           )
        }
      </div>
    </div>
  )
}}
    

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps)(SearchCard);