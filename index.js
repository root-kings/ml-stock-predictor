var csv = require('node-csv').createParser()
var brain = require('brain.js')
var processedData = []

function avg(a, b) {
	return (a + b) / 2
}

async function processTheData() {
	await csv.mapFile('data/ICICIBANK.NS.csv', function(err, data) {
		data.forEach(day => {
			let processedItem = {
				// date: parseFloat(day.Date),
				open: parseFloat(day.Open),
				high: parseFloat(day.High),
				low: parseFloat(day.Low),
				close: parseFloat(day.Close),
				// average: avg(parseFloat(day.High), parseFloat(day.Low))
			}

			processedData.push(processedItem)

			// console.log(processedItem)
		})

		predictTheFuture()
		// console.log(processedData);
	})
}

processTheData()

// console.log(processedData)

// rawData = [{ open: number, high: number, low: number, close: number }]

function scaleDown(step) {
	// normalize
	return {
		open: step.open / 425,
		high: step.high / 425,
		low: step.low / 425,
		close: step.close / 425
		// // average: step.average / 425
	}
}

function scaleUp(step) {
	// denormalize
	return {
		open: step.open * 425,
		high: step.high * 425,
		low: step.low * 425,
		close: step.close * 425
		// // average: step.average * 425
	}
}

function predictTheFuture() {
	const scaledData = processedData.map(scaleDown)

	const trainingData = [scaledData.slice(0, 30), scaledData.slice(30, 60), scaledData.slice(60, 90), scaledData.slice(90, 120)]

	// console.log(trainingData)

	const net = new brain.recurrent.LSTMTimeStep({
		inputSize: 4,
		hiddenLayers: [8, 8, 8, 8],
		outputSize: 4
	})

	net.train(trainingData, {
		learningRate: 0.05,

		errorThresh: 0.03,
		log: stats => console.log(stats)
	})

	console.log('Predicted:', scaleUp(net.run(trainingData[0])), 'Actual:', scaleUp(trainingData[1][0]))
}
