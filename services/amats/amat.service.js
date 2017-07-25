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
	rowObject.radius_small = Number(rowObject.radius_small);
	rowObject.radius_big = Number(rowObject.radius_big);
	amats.push(rowObject);
})
.on('done', (error) => {
		if (error) {
			console.error(error.message);
			reject(error)
		} else {
			resolve(amats)
		}
		console.log('csv file reading ended')
})
})
}

module.exports = {
	getAmats: getAmats
}
