const {Pirate}= require('../models/pirate.models');

module.exports.findAllPirates=(request,response) =>{
    Pirate.find()
    .then(allPirates =>response.json(allPirates))
    .catch(err => response.json({error:err}));
}

module .exports.newPirate = (request,response) =>{
    const {name,image_url,num_of_treasures,catch_phrase,crew_position,peg_leg,eye_patch,hook_hand} =request.body
    Pirate.create({name,image_url,num_of_treasures,catch_phrase,crew_position,peg_leg,eye_patch,hook_hand})
    .then(pirate => response.json(pirate))
    .catch(err => response.status(400).json(err))
}

module.exports.findOnePirate =(request,response) =>{
    Pirate.findOne({_id:request.params.id})
    .then(pirate => response.json(pirate))
    .catch(err => response.json(err))
}

module.exports.updatePirate= (request,response) =>{
    Pirate.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then(updateThisPiarte =>response.json(updateThisPiarte))
    .catch(err => response.json(err))
}

module.exports.deletePirate = (request,response) =>{
    Pirate.deleteOne({_id:request.params.id})
    .then(deleted => response.json(deleted))
    .catch(err => response.json(err))
}