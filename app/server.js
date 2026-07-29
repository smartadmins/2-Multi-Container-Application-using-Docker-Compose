const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if(err){
        console.log(err);
    }else{
        console.log("Connected to MySQL");
    }
});

app.get('/api', (req,res)=>{

    db.query("SELECT NOW() AS time",(err,result)=>{

        if(err){
            return res.json(err);
        }

        res.json({
            status:"Application Running",
            database:"Connected",
            serverTime:result[0].time
        });

    });

});

app.listen(3000,()=>{

console.log("Backend Running");

});