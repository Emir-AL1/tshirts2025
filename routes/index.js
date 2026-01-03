var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница maison */
router.get('/maison', function(req, res, next) {
    res.render('tshirt', {
        title: "Maison Margiela",
        picture: "images/maison.jpg",
        desc: "Футболка Maison Margiela отличается авангардным дизайном, минимализмом, премиальными материалами, аккуратным кроем, подчёркивая индивидуальность, стиль, концептуальность, современную моду высокого класса люкс."
    });
});


/* Страница puma */
router.get('/puma', function(req, res, next) {
    res.render('tshirt', {
        title: "Puma",
        picture: "images/puma.jpg",
        desc: "Футболка Puma сочетает спортивный стиль, комфорт, дышащие ткани, удобную посадку, динамичный дизайн, подходящий для тренировок, активного отдыха и повседневной носки."
    });
});

/* Страница stussy */
router.get('/stussy', function(req, res, next) {
    res.render('tshirt', {
        title: "Stussy",
        picture: "images/stussy.jpg",
        desc: "Футболка Stussy отражает уличную культуру, свободный крой, графические принты, калифорнийский вайб, комфорт, самовыражение, актуальность, молодежный стиль, тренды, свободу движения сегодня."
    });
});


module.exports = router;
