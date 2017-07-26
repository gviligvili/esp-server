/**
 * Created by 1 on 7/26/2017.
 */
/**
 * Created by 1 on 7/17/2017.
 */
const json2csv = require('json2csv');
const path = require('path');
const fs = require('fs');
const csvFilePath = path.join(__dirname, 'remarks.csv');

function saveRemarks(json) {
    return new Promise((resolve, reject) => {
        var fields = ['groupName', 'remark'];

        try {
            var result = json2csv({ data: json, fields: fields });
            console.log('generated csv', result);

            fs.writeFile(csvFilePath, result, 'utf8', function (err) {
                if (err) throw err;
                console.log('remarks.csv has been saved!');
                resolve()
            });
        } catch (err) {
            console.error(err);
            reject(err.message);
        }
    })
}

module.exports = {
    saveRemarks: saveRemarks
}
