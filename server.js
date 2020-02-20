const express = require('express')
const {MongoClient, ObjectID} =require ('mongodb')
const bodyParser= require('body-parser')
const assert=require('assert')

const app= express()
app.use(bodyParser.json()) 


const mongo_url = 'mongodb://localhost:27017'
const dataBase='contact'
MongoClient.connect(mongo_url, (err,client)=>{
    assert.equal(err, null , 'data base connection failed')
    const db =client.db(dataBase)
    app.get('/contacts',(req,res)=>{
        db.collection('contactlist').find().toArray((err,data)=>{
            if (err) res.send('cant fetch product')
            else res.send(data)
        })
    })
    app.post('/add_contact',(req,res)=>{
        let newContact=req.body
        db.collection('contactlist').insertOne(newContact,(err,data)=>{
            if (err) res.send('cant add product')
            else res.send('product added')
        })
    })
    app.delete('/delete_product/:id',(req,res)=>{
        let ContactToRemove=ObjectID(req.params.id)
        db.collection('contactlist').findOneAndDelete({_id : ContactToRemove},(err,data)=>{
            if (err) res.send('cant delete the contact')
            else res.send('contact deleted')
        })
    })
    app.put('/modify_contact/:id',(req,res)=>{
        let id=ObjectID(req.params.id)
        let modifiedContact=req.body
        db.collection('contactlist').findOneAndUpdate({_id :id},{$set:{...modifiedContact}},(err,data)=>{
            if (err) res.send('ERROR')
            else res.send(data)
        })
    })

// const {name,phone,email}=req.body


})    
app.listen(4000,(err)=>{
    if (err) console.log('server err')
    else console.log('server is running on port 3000')
})