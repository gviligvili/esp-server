var express = require('express');
var router = express.Router();
var fs = require('fs');
var remarksService = require('../services/remarks/remarks.service');

router.post('/', function(req, res, next) {
    console.log('json sent', req.body);
    var remarks = req.body;

    remarksService.saveRemarks(remarks).then(() => {
        res.send();
    }, (error) => {
        res.send(error);
    })
});

module.exports = router;