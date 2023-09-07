const connectToMongo=require('./db');
connectToMongo();
const express=require('express');
const app=new express();
const port=5000;
app.use(express.json())


// Available routes
app.get('/',(req,res)=>{
    res.send("Hello World!")
});

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port,()=>{
    console.log(`Backend Listening at http://127.0.0.1:${port}`)
})