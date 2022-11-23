var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('miruta',{titule:'MiRuta', titule2:'con EJS'
            ,titule3: 'Javier',titule4:'Izquierdo'});
});
module.exports =router;