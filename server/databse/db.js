import mongoose from 'mongoose';

const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-tltuzri-shard-00-00.6vsnghi.mongodb.net:27017,ac-tltuzri-shard-00-01.6vsnghi.mongodb.net:27017,ac-tltuzri-shard-00-02.6vsnghi.mongodb.net:27017/?ssl=true&replicaSet=atlas-qmw88p-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log(error);
    }
}

export default Connection;