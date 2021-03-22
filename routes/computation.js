var express = require('express');
var router = express.Router();

/* GET computation. */
router.get('/', function(req, res, next) {

  var x = 0;
  var y = 0;
  if(Object.keys(req.query).length === 0){
  min = Math.ceil(1);
  max = Math.floor(20);

  powMin = Math.ceil(0);
  powMax = Math.floor(6);
   
  x = Math.floor(Math.random() * (max - min) + min);
  y = Math.floor(Math.random() * (powMax - powMin) + powMin);
  }
  else{
    x = req.query.x;
    y = req.query.y;
  }
  var pow = Math.pow(x, y);
  res.render('computation', { title: 'Math.pow' , x: x, y: y , pow: pow});
});

module.exports = router;
