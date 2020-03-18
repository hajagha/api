const express = require('express')
const router = express.Router()

const bodyparser = require('body-parser')

type = require('../models/type')
book = require('../models/book')

//redirect
router.get('/' , function(req , res)
{
    res.send('<h1>go to book api end point</h1>')
})


//get type
router.get('/api/type' , function(req , res){
    type.find().exec().then((ress) => {
        res.status(200)
        res.send(ress)
    })   
})



//get book
router.get('/api/book' , function(req , res){
    
    book.find().exec().then((ress) => {
            res.status(200)
            res.send(ress)
        })   
})

//post new book
router.post('/api/book' , function(req , res){
    const a = req.body
    var b =  new book({
        title: a.title,
        price: a.price
     })
     b.save()

     res.status(200)
     res.send('Added to book ...')
})

//post new type 
router.post('/api/type' , function(req , res){
    const a = req.body
    var b =  new type({
        name: a.name,
        time: a.time
     })
     b.save()

     res.status(200)
     res.send('Added to type...')
})


/// uptade the price using title (book)
router.patch('/api/book/:title' ,async function(req , res)
{
    try{
 const p =  await book.updateOne({title : req.params.title} , {
      $set: {
     title : req.params.title, price : req.body.price}})
     res.json(p)
      }catch(err)
      {
          console.log(err)
      }
     
})



/// update the price using name (type)
router.patch('/api/type/:name' ,async function(req , res)
{
    try{
 const p =  await type.updateOne({name : req.params.name} , {
      $set: {
     name : req.body.name ,
     time : req.body.time }})
     res.json(p)
      }catch(err)
      {
          console.log(err)
      }
     
})



//delete type using name
router.delete('/api/type/:name' , async function(req , res){
try {
const d = await type.remove({name : req.params.name})
res.json(d)
}catch(err)
{
    console.log(err)
}
})

// delete book using title 
router.delete('/api/book/:title' , async function(req , res){
    try {
    const d = await book.remove({title : req.params.title})
    res.json(d)
    }catch(err)
    {
        console.log(err)
    }
})
    
    






module.exports = router



