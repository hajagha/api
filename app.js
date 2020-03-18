const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = mongoose.connection
const Router = require('./routes/api')
const Book = require('./models/book')
const cors = require('cors')


app.use(cors())
const Type = require('./models/type')
app.use(bodyParser.json())

app.use(Router)

mongoose.connect('mongodb://localhost/bookstorejadid' , { useNewUrlParser: true } ,function(err){
  if(err)
  {
      console.log(err)
  }
})



try
{
app.listen(PORT)
}catch(err)
{
  console.log(err)
}
console.log(`Server is running on port: ${PORT} ...`)

 
