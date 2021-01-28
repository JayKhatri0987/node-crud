var { con } = require('../Config/db')
var router = require('express').Router();
var sqlstring = require('sqlstring');

var Table = 'test_project';

var POSTData = (req,res) => {

    Title = req.body.Title;
    Description = req.body.Description;
    CreatedDate = req.body.CreatedDate;
    Status = req.body.Status;

    var MySqlQuery = sqlstring.format(`INSERT INTO ${Table} (Title, Description, Target_date,
    Status) VALUES (?,?,?,?)`, [Title, Description, CreatedDate, Status])


    con.query(MySqlQuery,(err,result)=>{
        if(err){
        var errMessage = `An error occurred Enter Data`;
        res.status(500).send({Message: errMessage });
        }else{
          res.redirect('/');
          }}
    )}

router.post('/api/postdata', POSTData);


module.exports = router