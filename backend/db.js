const mongoose=require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/inotebook";

connectToMongo().catch(err => console.log(err));

async function connectToMongo() {
  await mongoose.connect(mongoURI);
  console.log("connected to mongodb!!!");
}


module.exports=connectToMongo;