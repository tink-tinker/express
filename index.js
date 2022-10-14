const express = require ('express');
const path = require('path');



const logg= require('./middleware/logg');
const members =require('./Members');
const fs = require('fs');
const router = require('./routes/api/members');
const { json } = require('express');

const app = express();
//another middleware function 
//const person=require('/api/members.json');

//inint middleware
app.use(logg);

//Handlebars middleware
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
///too handle url encoded data

//homepage route
app.get('/',function(req,res){
    res.render('index',{
        title: 'Form ',
        members
    })
    //fs.readFileSync()
    //fs.appendFile('contact.txt', members)
});

app.use(express.static(path.join( __dirname , 'public')));

//members api routes
app.use('/api/members',require('./routes/api/members'));
app.use('/api/members/get-members', require('./routes/api/members'));

const PORT=process.env.PORT || 5000;
//when the server deploys he doesnt know if it is availale so we check the environment n its stored in PORT so we check that if 5000 is not available

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`));
//npm i -D nodemon D-> coz for development

