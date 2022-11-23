//**
const{ Pool, ClientBase } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,ssl:{
        rejectUnauhotied:  false
    }
});
//** 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res)=> {
    try{
        const client = await pool.connect();
        const result = await ClientBase.query('SELECT * FROM test_table');
        const results = {'results': (results) ? results.row : null};
        res.render('db',results);
        client.release();
    }catch (err){
        console.error(err);
        res.send("Error"+err);
    }
})
module.exports = router;