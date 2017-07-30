/**
 * Created by 1 on 7/30/2017.
 */
var express = require('express');
var router = express.Router();
var dropDownService = require("../services/dropdowns/dropdowns.service");

/* GET users listing. */
router.get('/', function(req, res, next) {
    dropDownService.getDropDowns().then((data) => {
        res.send(data);
    }, (error) => {
        res.send(error.message);
    })
});

module.exports = router;