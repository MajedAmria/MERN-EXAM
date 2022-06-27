const PirateController = require('../controllers/pirate.controller');
module.exports=function(app){
    app.get('/api/pirates/list',PirateController.findAllPirates);
    app.post('/api/pirate/new',PirateController.newPirate);
    app.get('/api/pirate/:id',PirateController.findOnePirate);
    app.delete('/api/pirate/:id',PirateController.deletePirate);
}