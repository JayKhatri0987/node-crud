var { con } = require('../Config/db')
var router = require('express').Router();
var sqlstring = require('sqlstring');

var Table = 'test_project';

var DELETEData = (req,res) =>{

    var MySqlQuery = sqlstring.format(`UPDATE ${Table} SET IsActive = 0 WHERE id = ? `,[req.params.id])

    con.query(MySqlQuery,(err,result)=>{
        if(err){
        var errMessage = `An error occurred Delete Data`;
        res.status(500).send({Message : errMessage});
        }else{
        res.redirect('/');
      }}

)}

router.get('/api/deletedata/:id',DELETEData);

module.exports = router