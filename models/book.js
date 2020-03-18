const mongoos = require('mongoose')
const bookSchema  = new mongoos.Schema({
    title : {
        type: String,
        required : true
    },
    price: {
        type: String
        
    },
    create_date:{
        type: Date,
        default: Date.now
    }
    }
     ,{
    collection: 'book'
})


const Book = module.exports =mongoos.model('book' ,bookSchema)

