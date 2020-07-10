var mongoose = require('mongoose');
const seller = require('../models/sellerModel');

const sellerController = {

   getSeller : async (req, res) => {
      try{
         const sellerData= await seller.find({})
         console.log("sellerData ", sellerData);
         res.send(sellerData.map((item) => item))
      }
      catch(error){
         console.error("ERROR MESSAGE SEE" ,error);
         res.send("Error occured",error)
      }
   }, 

   loginSeller : async (req, res) => {
      try{
         const data= await seller.findOne({ userName: req.body.username, password: req.body.password })
         res.send({person: data})
      }
      catch(error){
         console.error("ERROR MESSAGE SEE" ,error);
         res.send("Error occured")
      }
   }  
}

module.exports = sellerController;