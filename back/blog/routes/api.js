var express = require('express');
var router = express.Router();
var db = require('../database/db')
var SQL = require('../database/sql')

/* GET users listing. */
router.post('/list/select', function(req, res, next) {
  db.find(SQL.SELECT_ARTICLE_LIST,function(err,values,fields){
    if(err){
      res.status(400).json({status:400,code:0,message:err.message})
    }else{
      res.json({status:200,code:1,data:values,message:'ok'})
    }
  });
});

router.post('/list/insert', function(req, res, next) {
  var params = []
  if(req.body){
    console.log(req.body.type)
    if(!req.body.title){
      return res.status(400).json({status:400,code:0,message:'缺少title参数'})
    }else if(!req.body.author){
      return res.status(400).json({status:400,code:0,message:'缺少author参数'})
    }else if(!req.body.summary){
      return res.status(400).json({status:400,code:0,message:'缺少summary参数'})
    }else if(!req.body.type){
      return res.status(400).json({status:400,code:0,message:'缺少type参数'})
    }else{
      params.push(req.body.title)
      params.push(req.body.author)
      params.push(req.body.summary)
      params.push(req.body.type)
    }
  }else{
    return res.status(400).json({status:400,code:0,message:'缺少参数'})
  }
  db.edit(SQL.INSERT_ARTICLE_LIST,params,function(err,vals,fields){
    if(err){
      res.status(400).json({status:400,code:0,message:err.message})
    }
      res.send({status:200,code:1,message:'ok'})
  });
});

router.post('/list/update', function(req, res, next) {
  var params = []
  if(req.body){
    if(!req.body.title){
      return res.status(400).json({status:400,code:0,message:'缺少title参数'})
    }else if(!req.body.author){
      return res.status(400).json({status:400,code:0,message:'缺少author参数'})
    }else if(!req.body.id){
      return res.status(400).json({status:400,code:0,message:'缺少id参数'})
    }else if(!req.body.summary){
      return res.status(400).json({status:400,code:0,message:'缺少summary参数'})
    }else if(!req.body.type){
      return res.status(400).json({status:400,code:0,message:'缺少type参数'})
    }else{
      params.push(req.body.title)
      params.push(req.body.author)
      params.push(req.body.summary)
      params.push(req.body.type)
      params.push(req.body.id)
    }
  }else{
    return res.status(400).json({status:400,code:0,message:'缺少参数'})
  }
  db.edit(SQL.UPDATE_ARTICLE_LIST,params,function(err,vals,fields){
    if(err){
      res.status(400).json({status:400,code:0,message:err.message})
    }
      res.send({status:200,code:1,message:'ok'})
  });
});

router.post('/list/delete', function(req, res, next) {
  var params
  if(req.body){
    if(!req.body.id){
      return res.status(400).json({status:400,code:0,message:'缺少id参数'})
    }else{
      params = req.body.id
    }
  }else{
    return res.status(400).json({status:400,code:0,message:'缺少参数'})
  }
  db.edit(SQL.DELETE_ARTICLE_LIST,params,function(err,vals,fields){
    if(err){
      res.status(400).json({status:400,code:0,message:err.message})
    }
      res.send({status:200,code:1,message:'ok'})
  });
});

module.exports = router;
