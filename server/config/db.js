import mongoose from 'mongoose';
import colors from 'colors'

const connection = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white);
    }catch(error){
       console.log(`Errr in MongoDB ${error}`);
    }
} 

export default connection;