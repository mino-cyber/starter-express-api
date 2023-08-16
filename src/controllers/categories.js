const Categories = require('../models/categories.js')
const mongoose = require('mongoose')

module.exports.AllCategories = (req, res) => {
    Categories.find()
        .then(response => {
            res.header('Access-Control-Allow-Origin', '*');
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
            })
        })
}

module.exports.CreateCategory = async (req, res, next) => {
    let body = req.body

    let category = new Categories({
        name: body.name,
        image: body.image,
        imageBanner: body.imageBanner,
        desc: body.desc,
    })
    category.save()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            console.log(error)
            res.json({
                message: 'An error Occured!'
            })
        })
}
module.exports.UpdateCategory = async (req, res) => {
    let _id = new mongoose.Types.ObjectId(req.params.id)
    const body = req.body
    await Categories.findOneAndUpdate({ _id: _id }, body, { new: true }).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        return res.json({ message: "Error" })
    })
}

module.exports.DeleteCategory = async (req, res) => {
    let _id = new mongoose.Types.ObjectId(req.params.id)
    await Categories.deleteOne({ _id: _id }).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        return res.json({ message: "Error" })
    })
}

module.exports.getCategory = async (req, res) => {
    let _id = new mongoose.Types.ObjectId(req.params.id)

    await Categories.findById(_id).then(e => {
        res.header('Access-Control-Allow-Origin', '*');
        return res.json(e)
    }).catch(err => {
        return res.json({ message: "Error" })
    })
}