/**
 * Created by 1 on 7/30/2017.
 */
const csv = require('csvtojson');
const path = require('path');
const csvFilePath = path.join(__dirname, 'dropdowns.csv');

function getDropDowns() {
    return new Promise((resolve, reject) => {
        let targets = [];
        csv()
            .fromFile(csvFilePath)
            .on('json', (rowObject) => {
                rowObject.lat = Number(rowObject.lat);
                rowObject.lon = Number(rowObject.lon);
                rowObject.direction = Number(rowObject.direction);
                rowObject.distance = Number(rowObject.distance);
                targets.push(rowObject);
            })
            .on('done', (error) => {
                if (error) {
                    console.error(error.message);
                    reject(error)
                } else {
                    resolve(targets)
                }
                console.log('csv file reading ended')
            })
    })
}

module.exports = {
    getDropDowns: getDropDowns
}
