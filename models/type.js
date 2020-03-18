const mongoos = require('mongoose')




const typeSchema  = new mongoos.Schema({
    name : {
        type: String,
        required : true
    },
    time : {
        type : String,
        required : false
    }
    }
     ,{
    collection: 'type'
})


const Type = module.exports =mongoos.model('type' ,typeSchema)
