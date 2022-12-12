const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser=require('body-parser')
const cors = require('cors');



const app = express();

//Using express.json() to get data
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

app.use(express.json());
const Food = require('./models/foodItems');
const Cart = require('./models/cart');

//PORT
const PORT = process.env.PORT || 4000;

// import routes

const FoodItemRoute = require('./routes/foodItems');
const cartRoute = require('./routes/cart');


app.use(cors({origin: '*'}))
// Connect to mongoDB
 mongoose.connect('mongodb://localhost:27017/cart')
 .then(()=> console.log("Item Database connected"))
 .catch(err => console.log(err));

 mongoose.createConnection('mongodb://localhost:27017/food');
 console.log('Cart Database connected');





app.use('/', FoodItemRoute);
app.use('/', cartRoute);


//Connect to server
app.listen(PORT, ()=>console.log("Connected to server"));
 