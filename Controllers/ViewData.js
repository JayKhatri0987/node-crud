var { con } = require('../Config/db')
var router = require('express').Router();
var sqlstring = require('sqlstring');
const moment = require("moment");

var Table = 'test_project';

var GETData = (req,res) =>{

    var MySqlQuery =  sqlstring.format(`SELECT id, Title, Description, Target_date,
    Status FROM ${Table} WHERE IsActive = 1 `)

    con.query(MySqlQuery,(err,result)=>{
        if(err){
        var errMessage = `An error occurred Fetch Data`;
        res.status(500).send({Message: errMessage });
        }else{
            res.render('index',{
                title : 'CRUD operations',
                users : result
            })
        }}
    )}

var GETAddView = (req,res) =>{

        res.render('AddDetails',{
        title : 'CRUD operations'
        })
      }

var EditView = (req,res) =>{

        var MySqlQuery =  sqlstring.format(`SELECT id ,Title, Description, Target_date,
        Status FROM ${Table} WHERE IsActive = 1 AND id = ?`,[req.params.id])
    
        con.query(MySqlQuery,(err,result)=>{
            if(err){
            var errMessage = `An error occurred Fetch Data`;
            res.status(500).send({Message: errMessage });
            }else{
                res.render('EditDetails',{
                    user : result[0],
                    moment:moment
                })
            }}
        )}

router.get('/',GETData);
router.get('/add',GETAddView);
router.get('/edit/:id',EditView);

module.exports = router