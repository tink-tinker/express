const express = require('express');

const uuid = require('uuid');//to generate id

const router = express.Router();

const members=require('../../Members');

const {redirect}= require('statuses');

const fs = require('fs');




//middle ware are functtions that have access to req n res n we can add things by this 
//this route gets all members

router.get('/',(req,res)=>res.json(members));

router.get('/',async(req,res)=>{

     res.json(members)

    let resData ;

    fs.readFile('.test.json','utf8',(err,data)=>{

        console.log('Reading file',data)

        resData = data;

        res.json(JSON.parse(resData))

        })

    console.log(resData,'resdta=======')
    if(resData===this.param.name){
        console.log(this.name);
    }

   

});

/*
//get single member
router.get('/:id',(req,res)=>{
    //res.send(req.params.id);
    const found = members.some(member =>member.id === parseInt(req.params.id));
    //some will give true or false if theat id is present then it will be equal n give true
    if (found){
        res.json(members.filter(member=>member.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg:`no member with id of ${req.params.id}`});
        
    }

    
    // req.params.id->sends string so we neet to parse it as int//=== means both type should be equal
    
    });
  */  

router.get('/.test.json', (req, res)=>json(temp));

router.get('/:name', function(req, res) {

    const found = members.some(member=>member.name === (req.params.name));

    Object.keys(members).forEach(key => {
        console.log(key, members[key]);
    });

    if( found ) {

        res.json(members.filter(member=>member.name === (req.params.name)));
    }
    else{
        res.status(400).json({msg:`nothing found ${req.params.name}`});
    }
});

 
 router.post('/.test.json', function(req, res){
        console.log(req.body);
        const newMember ={
            id: uuid.v4(),

            name: req.body.name,

            surname: req.body.surname,

            email: req.body.email,

            Phone: req.body.Phone,

            Address: req.body.Address,

            key: req.body.key,

            status: 'active'
        }      
        

   

    if(!newMember.name || !newMember.email){

        return res.status(400).json({msg:'Please include a name and email'});

    }

    });



    /*router.get('/:id',(req,res)=>{

        fs.readFile('./test.json',(err,data)=>{

        })
        const found = members.some(member =>member.id === parseInt(req.params.id));
        if (found){
            res.json(members.filter(member=>member.id === parseInt(req.params.id)));
        }

        else{

            res.status(400).json({msg:`no member with id of ${req.params.id}`});
        }
        });*/




   




   router.post('/',(req,res)=>{

    const newMember ={

      id:uuid.v4(),

      name:req.body.name,

      surname:req.body.surname,

      email:req.body.email,

      Phone:req.body.Phone,

      Address:req.body.Address,

      key:req.body.key,

      status : 'active'       }    
    

    if(!newMember.name || !newMember.email){

        return res.status(400).json({msg:'Please include a name and email'});

    }





   fs.readFile('.test.json','utf8',(err,data)=>{

        var temp = {};

        console.log('data====',data)

        if(data != '')

        try {

            temp = JSON.parse(data)

;        } catch(err){

            console.log('err',err);

} 

//  let foundData;

// data.forEach((index,ele) => {

// ///match is founf

// foundData = ele;



// })



// res.json(foundata)

        temp[newMember.name] = newMember

        console.log('temp===',temp)

        fs.writeFile('.test.json',JSON.stringify(temp),err=>{

            console.log('err====',err)

        })

    })

   
members.push(newMember);   
members.push(newMember);

   

    res.json(members);

    console.log(members);

    });





   

router.put('/:id',(req,res)=>{

    const found = members.some(member =>member.id === parseInt(req.params.id));

    if (found){

        const updateMember=req.body;

        members.forEach(member=>{

            if(member.id === parseInt(req.params.id)){

              member.name= updateMember.name? updateMember.name :member.name;

              member.email=updateMember.email? updateMember.email: member.email;





             res.json({msg:'member was updated',member});

            }

        });

    }  

    

    else{

        res.status(400).json({msg:`no member with id of ${req.params.id}`});

       

    }

   

    // req.params.id->sends string so we neet to parse it as int//=== means both type should be equal

   

    });

    router.delete('/:id',(req, res)=>{

        const found = members.some(member =>member.id === parseInt(req.params.id));

    if (found){

        res.json({msg:'Member deleted',members:members.filter(member=>member.id  !== parseInt(req.params.id))

    });

    }

    else{

        res.status(400).json({msg:`no member with id of ${req.params.id}`});

       

    }

   

   

    });

   





module.exports=router;


