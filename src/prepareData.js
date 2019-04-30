const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')

const util = require('./util')

module.exports = function(inputFilePath) {
	let MAX = 0
	let cleanedData = []
	fs.createReadStream(inputFilePath)
		.pipe(csv())
		.on('data', data => {
			let record = {
				open: parseFloat(data.Open),
				high: parseFloat(data.High),
				low: parseFloat(data.Low),
				close: parseFloat(data.Close)
			}

			let values = [MAX, record.open, record.high, record.low, record.close]

			if (!values.includes(NaN)) {
				MAX = Math.max(...values)
				cleanedData.push(record)
			}
		})
		.on('end', () => {
			console.log(`MAX: ${MAX}`)
			const scaledData = cleanedData.map(x => util.scaleDown(x, MAX))

			const outputFileName = path.basename(inputFilePath, '.csv')

			const cleanedPath = __dirname + `/../data/cleaned_${outputFileName}.json`
			const scaledPath = __dirname + `/../data/scaled_${outputFileName}.json`

			fs.writeFile(cleanedPath, JSON.stringify(cleanedData), 'utf8', function(err) {
				if (err) throw err
				console.log(`Prepared file: ${cleanedPath}`)
			})
			fs.writeFile(scaledPath, JSON.stringify(scaledData), 'utf8', function(err) {
				if (err) throw err
				console.log(`Prepared file: ${scaledPath}`)
			})
		})
}
