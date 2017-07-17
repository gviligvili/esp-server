/**
 * Created by 1 on 7/17/2017.
 */
var express = require('express');
var router = express.Router();
var targetService = require("../services/targets/target.service")

/* GET users listing. */
router.get('/', function(req, res, next) {
    targetService.getTargets().then((data) => {
        res.send(data);
    }, (error) => {
        res.send(error.message);
    })
});

module.exports = router;
