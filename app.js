const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const sequelize=require('./util/database');

const Order=require('./models/Order')
var cors=require('cors');

const app = express();

app.use(cors());


const orderRoutes=require('./routes/order');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(orderRoutes);



sequelize.sync({force:true}).then(result=>{
    //console.log(result);
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})