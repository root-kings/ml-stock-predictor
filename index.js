var csv = require('node-csv').createParser()
var brain = require('brain.js')
const fs  = require('fs')



var processedData = []



async function processTheData() {
	await csv.mapFile('data/ICICIBANK.NS.csv', function(err, data) {
		data.forEach(day => {
			let processedItem = {
				// date: parseFloat(day.Date),
				open: parseFloat(day.Open),
				high: parseFloat(day.High),
				low: parseFloat(day.Low),
				close: parseFloat(day.Close),
				
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

	
	// const trainingData = []
	const trainingData = [scaledData.slice(0, 30), scaledData.slice(30, 60), scaledData.slice(60, 90), scaledData.slice(90, 120),scaledData.slice(120, 150),scaledData.slice(150, 180)]
	
	// for(let i = 0; i< scaledData.length % 30; i++){
	// 	trainingData.push(scaledData.slice(30*i, 30*(i+1)))
	// }


	// [scaledData.slice(0, 30), scaledData.slice(30, 60), scaledData.slice(60, 90), scaledData.slice(90, 120)]

	console.log('training set:' , trainingData.length , trainingData[0].length)

	let netopts = {
		inputSize: 4,
		hiddenLayers: [8, 16, 12, 8],
		outputSize: 4
	}

	const net = new brain.recurrent.LSTMTimeStep(netopts)

	let trainopts = {
		learningRate: 0.005,
		errorThresh: 0.03,
		// iterations: 400,
		log: stats => console.log(stats)
	}

	net.train(trainingData, trainopts)

	let trainedNet = net.toJSON();

	fs.writeFileSync(__dirname+`/training/${trainingData.length * trainingData[0].length}_${netopts.hiddenLayers}_${trainopts.learningRate}_${trainopts.errorThresh}.json`, JSON.stringify(trainedNet), 'utf8');

	let fore = net.forecast(trainingData[0], 10).map(scaleUp)
	let act = trainingData[1].slice(0,10).map(scaleUp)

	let diff = []

	for (let i=0;i<10;i++){
		diff.push(Math.abs(fore[i].close - act[i].close))
	}

	// console.log('Predicted:', scaleUp(net.run(trainingData[0])), 'Actual:', scaleUp(trainingData[1][0]))

	console.log(diff)
}
