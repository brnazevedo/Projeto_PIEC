'use strict'

exports.post = (req,res,next) => {
    res.status(201).send(req.body);
};

exports.put = (req,res,next)=>{
    const id = req.params.id;
    const name = req.body.title;
    res.status(200).send({id: id, name: name, item: req.body})};


exports.del = (req,res,next)=>{
    res.status(200).send({
        id: req.params.id, 
        item: req.body, 
        message:"DELETE OK"})
    };
