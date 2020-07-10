import React from 'react';

const SellerCard = (props) => {
  
  return(
    <div className= "container ">
      <div className= "row">
        {props.data.map(item =>
          <div className="card col-md-3 bg-secondary mx-auto pt-3 ml-3 mr-3 mb-3 mt-3 my-auto border border-warning rounded m-lg-2 text-center" >
            <div className="card-body">
              <h5 className="card-title">{item.id + "-"+item.name}</h5>
              <a href="#" className="btn btn-primary text-warning">Make Appointment</a>
            </div>
          </div> )
       } 
      </div>
    </div>
  )
}

export default SellerCard;
