var express =  require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://preksha:perky@ds161539.mlab.com:61539/mytasklist_preksha', ['tasks']);

router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
            res.json(tasks);
    });

});

module.exports = router;
