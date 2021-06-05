
const bodyParser = require('body-parser')
const express =require('express');
const app = express();
const portNum = process.env.PORT_NUM||5000;
const URL = require('./config/key');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cors = require('cors')


const memberRouter = require('./router/members');
const loginRouter = require('./router/login');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/login', loginRouter);
app.use('/members', memberRouter);

app.get('/test', (req,res)=>res.send("test"));

mongoose.connect(URL.mongoURL,{
	useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false
}).then(()=>console.log("mongoDB is connected...")).catch(err=>console.log(err));

app.listen(portNum, ()=>{
	console.log("Server is running....");
})