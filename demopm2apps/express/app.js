const express = require('express')

const app = express()

const EXPRESS_PORT = 3010

app.get('/',(req,res) =>{
    res.send("hello from express")
})

app.listen(EXPRESS_PORT,err =>{
    if(!err){
        console.log(`express running at port ${EXPRESS_PORT}`)
    }
})