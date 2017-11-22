//import modules 
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require ('./routes/route');

//Connect to mongodb 
//mongodb://Cesar:cesar@ds117495.mlab.com:17495/project1
//connect to local 
//'mongodb://localhost:27017/new_project'

mongoose.connect('mongodb://Cesar:cesar@ds117495.mlab.com:17495/project1');

//on conection 
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb Database');
});

mongoose.connection.on('error', (err)=>{
    if(err)
    {
        console.log('Error in database connection' +err);
    }
});

//port no. 
const port = 3000; 

//adding middleware - cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files 
app.use(express.static(path.join(__dirname, 'public')));

//routes 
app.use('/api', route);

//testing server 
app.get('/',(req, res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server started at port: '+port);
});