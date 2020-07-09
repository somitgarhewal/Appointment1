var mongoose = require('mongoose');
const seller = require('../models/sellerModel');

const sellerController = {

   getSeller : async (req, res) => {
      try{
         const sellerData= await seller.find({}).select({"name": "arun","id":1})
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
  
   // addSeller : (req, res) => {
   //    var sellerSchema = seller(req.body);
   //    console.log("success0 ", req)
   //      sellerSchema.save((err, seller) => {
   //        if(err) {
   //          console.log("err", err)
   //        }
   //        else {
   //          console.log("success", sellerSchema)
   //          res.send({ data: sellerSchema })
   //        }
   //      });
   // }
   
}

module.exports = sellerController;