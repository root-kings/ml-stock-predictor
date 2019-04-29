const csv = require('csv-parser')
const fs = require('fs')

exports.prepareData = async function(path, outputname) {
	let output = []
	fs.createReadStream(path)
		.pipe(csv())
		.on('data', data => {
			let record = {
				// date: parseFloat(data.Date),
				open: parseFloat(data.Open),
				high: parseFloat(data.High),
				low: parseFloat(data.Low),
				close: parseFloat(data.Close)
				// average: avg(parseFloat(data.High), parseFloat(data.Low))
			}
			output.push(record)
		})
		.on('end', () => {
			// console.log(output)
			let newpath = __dirname + `/../data/${outputname}.json`
			fs.writeFile(newpath, JSON.stringify(output), 'utf8', function(err) {
				if (err) throw err
				console.log(`Prepared file: ${newpath}`)
				return output
			})
		})
}
