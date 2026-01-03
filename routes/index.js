var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница maison*/
router.get('/maison', function(req, res, next) {
    res.send("<h1>Страница Maison Margiela</h1>")
});
/* Страница puma*/
router.get('/puma', function(req, res, next) {
    res.send("<h1>Страница Puma</h1>")
});
/* Страница stussy*/
router.get('/stussy', function(req, res, next) {
    res.send("<h1>Страница Stussy</h1>")
});

module.exports = router;
