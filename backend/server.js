const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

const router = require('./routers/sellerRouter')

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/mydb',{ useNewUrlParser: true });

router(app);
 
app.listen(port, () => {
    console.log(`server is running on port:  ${port}`);

})