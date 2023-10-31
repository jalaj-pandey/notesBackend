
const mongoose =  require('mongoose');



const connectToMongo=()=>{
    mongoose.connect("mongodb+srv://gyanibanda:physicsMath12@cluster0.7gnrw4m.mongodb.net/?retryWrites=true");
    console.log("connected to mongo");
}

module.exports = connectToMongo;

