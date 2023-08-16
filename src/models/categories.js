const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name:{
        type:String
    },
    image:{
        type: String
    },
    imageBanner:{
        type: String
    },
    desc: {
        type: String
    },
}, { timeseries: true })


const Categories = mongoose.model('categorie', categorySchema)
module.exports = Categories