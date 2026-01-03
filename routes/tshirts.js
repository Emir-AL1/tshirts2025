var express = require('express');
var router = express.Router();
var Tshirts = require('../models/tshirt').Tshirts;
var checkAuth = require("../middlewares/checkAuth.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с tshirts');
});
/* Страница футболок*/
router.get("/:nick", checkAuth, async function(req, res, next) {

   var tshirts = await Tshirts.find({nick: req.params.nick});
   console.log(tshirts)
   if(!tshirts.length) return next(new Error("Нет такой футболки в наличии"))
       var tshirt = tshirts[0];
       res.render('tshirt', {
           title: tshirt.title,
           picture: tshirt.avatar,
           desc: tshirt.desc
       })
});
module.exports = router;