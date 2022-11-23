var express = require('express');
var router = express.Router();

/* GAT home page. */
router.get('/', funtion(req,res, next){
    res.render('miruta',{titule:'MiRuta', titule2:'con EJS',titule3: 'Javier',titule4:'Izquierdo'});
});
module.exports =router;