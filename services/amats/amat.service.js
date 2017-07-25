/**
 * Created by talgvili on 25/07/2017.
 */
'use strict';

const csv = require('csvtojson');
const path = require('path');
const csvFilePath = path.join(__dirname, 'amats.csv');

function getAmats() {
	return new Promise((resolve, reject) => {
			let amats = [];
	csv()
		.fromFile(csvFilePath)
		.on('json', (rowObject) => {
		rowObject.lat = Number(rowObject.lat);
	rowObject.lon = Number(rowObject.lon);
	amats.push(rowObject);
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
	getAmats: getAmats
}
