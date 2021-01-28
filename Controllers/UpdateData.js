var { con } = require('../Config/db')
var router = require('express').Router();
var sqlstring = require('sqlstring');
var CurrentDateTime = require('../Helper/CurrentDateTime');


var Table = 'test_project';

var UPDATEData = (req,res) => {

    ModifyDate = CurrentDateTime();
    console.log(req.body)
    MySqlQuery = sqlstring.format(`UPDATE ${Table} SET Title = ?, Description = ?, Target_date = ?,
    ModifyDate = ? , Status = ? WHERE id = ? `,[req.body.Title, req.body.Description, 
    req.body.CreatedDate, ModifyDate , req.body.Status ,req.body.id])


     con.query(MySqlQuery,(err,result)=>{
        if(err){
        var errMessage = `An error occurred Update Data`;
        res.status(500).send({ message: errMessage });
        }else{
            res.redirect('/');
      }}
)}

router.post('/api/edit',UPDATEData);

module.exports = router