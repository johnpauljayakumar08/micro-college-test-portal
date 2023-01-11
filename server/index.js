const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyparser = require('body-parser');
const database = require('mysql');
const { application, request, response } = require('express');

const add = express();
add.use(cors());
add.use(fileupload());
add.use(bodyparser.json());
add.use(express.json());
add.use(bodyparser.urlencoded({extended:true}));
add.use(express.static('public'));

let a = database.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"#Bsabaree1999",
    database:"user"
})

a.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Database Connected")
    }
})

add.post('/add',(request,response)=>{
    let {candidatename,phoneno,email}= request.body;
    let sql = 'insert into microcollege(candidatename,phoneno,email) values (?,?,?)';

    a.query(sql,[candidatename,phoneno,email],(error,result)=>{
        if(error){
            let s={"status":"error"};
            response.send(s);
        }
        else{
            let s={"status":"Success"};
            response.send(s);
        }
    })
})


add.listen(3002,()=>{
    console.log("Server running 3002 port");
})