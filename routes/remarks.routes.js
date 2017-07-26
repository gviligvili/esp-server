var express = require('express');
var router = express.Router();
var json2csv = require('json2csv');
var fs = require('fs');

router.use(express.static('public'));

router.post('/', function(req, res, next) {
    console.log('json sent', req.body);
    var json = req.body;
    var fields = ['groupName', 'remark'];

    try {
        var result = json2csv({ data: json, fields: fields });
        console.log('generated csv', result);

        fs.writeFile('./public/remarks.csv', result, 'utf8', function (err) {
            if (err) throw err;
            console.log('remarks.csv has been saved!');
        });
    } catch (err) {
        console.error(err);
        res.send(error.message);
    }

    res.send();
});

module.exports = router;