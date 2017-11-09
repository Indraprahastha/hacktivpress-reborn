let artikel = require('../models/artikel-models')
var mongoose = require('mongoose');

const addArtikel = (req,res) => {
  artikel.create({
    title:req.body.title,
    content:req.body.content,
    category:req.body.category,
    author: req.body.author
  }).then((user)=>{
    res.send(user)
  }).catch((err)=>{
    res.send(err)
  })
}

const getArtikelAll = (req,res) => {
  artikel.find().populate('author','username').then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}

const updateArtikel = (req,res) => {
  artikel.update({
    _id:req.params.id
  },{
    title:req.body.title,
    content:req.body.content,
    category:req.body.category,
    author: req.body.author
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}

const getArtikelOne = (req,res) => {
  artikel.findById({
    _id:req.params.id
  }).populate('author','username').then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}

const getArtikelCategori = (req,res) => {
  artikel.find({
    category:req.params.category
  }).populate('author','username').then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}

const deleteArikel = (req,res) => {
  artikel.remove({
    _id:req.params.id
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}

module.exports = {
  addArtikel,
  getArtikelAll,
  updateArtikel,
  getArtikelOne,
  getArtikelCategori,
  deleteArikel
}
