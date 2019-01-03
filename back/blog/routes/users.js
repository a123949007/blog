var express = require('express');
var router = express.Router();
var URL = require('url');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getCity',function(req,res,next){
  var city = {}
  var params = URL.parse(req.url,true).query.id;
  if(params === '1'){
    city.cityName='北京'
  }else{
    city.cityName='秦皇岛'
  }
  var response = {status:1,data:city}
  res.send(JSON.stringify(response))
});

module.exports = router;
