const express = require('express');

const { v4: uuidv4 } = require('uuid');
uuidv4();



const router = express.Router();

let users =[

    // {
    //     firstName : "John",
    //     lastName : "Doe",
    //     age : 25
    // },
    // {
    //     firstName:"Jane",
    //     lastName:"Doe",
    //     age:24
    // }
]

//All routes here are starting with /users
router.get('/',(req,res)=>{
    
    res.send(users)
});

router.post('/',(req,res)=>{
    console.log("post route reached");

    const user = req.body;

   

    const userWithId = {...user,id : uuidv4()} 
    
      users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the database`)
});

router.get('/:id',(req,res)=>{
    const {id} = req.params;

    const foundUser = users.find((user)=>user.id == id);
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    
    users = users.filter((user)=> user.id !== id);
    res.send(`User with id ${id} deleted from the database`)
});

router.patch('/:id',(req,res)=>{
    const {id} =req.params;

    const {firstName,lastName,age} =req.body;

    const user = users.find((user)=>user.id == id);
    
    if(firstName){
        user.firstName = firstName;
    }

    if(lastName){
        user.lastName = lastName;
    }

    if(age){
        user.age = age;
    }

   res.send(`User with ${id} has been updated`)
   


})

module.exports = router;