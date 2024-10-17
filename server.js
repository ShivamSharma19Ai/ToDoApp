const express= require('express');
const cors=require('cors');
require('./models/config');
const taskroutes = require("./routes/taskroutes.js");

const app = express();
app.use(express.json()); 
app.use(cors()); 

app.use("/api/task", taskroutes);

const PORT= '5000';
app.listen(PORT, ()=>{
    console.log("Server has started on Port 5000")
})