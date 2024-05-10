import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connection from './config/db.js';
import morgan from 'morgan';
import authRoute from './Routes/authRoute.js'
import categoryRoute from './Routes/categoryRoute.js'
import productRoute from './Routes/productRoute.js'
import cors from 'cors';
import path from 'path';

const app = express();

//config env
dotenv.config();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'../client/dist')))

//connection
connection();


//Rest API
app.use('/auth',authRoute);
app.use('/category',categoryRoute)
app.use('/product',productRoute)


app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'../client/dist/index.html'))
})

app.get('/',(req,res) => {
    res.send({
        message:'welcome to ecommerce app'
    })
})

//Portc
const PORT = process.env.PORT;

//run listen
app.listen(PORT,(req,res) => {
    console.log(`server running at PORT ${PORT}`.bgCyan.white);
})
