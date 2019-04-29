// const async = require('async')
// const prepareData = require('./src/prepare-data').prepareData

const fs = require('fs')
const brain = require('brain.js')
// prepareData(__dirname + '/data/ICICIBANK.NS.csv', 'icici').then((k,v)=>{
//     console.log(v)
// })

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


const preparedData = JSON.parse(fs.readFileSync(__dirname + '/data/icici.json'))

const scaledData = preparedData.map(scaleDown)

let trainingData = []

for (let i = 0; i < Math.floor(scaledData.length / 30); i++) {
	trainingData.push(scaledData.slice(30 * i, 30 * (i + 1)))
}

// console.log(scaledData.length/30)
// console.log(trainingData)

console.log('training set:', trainingData.length, 'x', trainingData[0].length)





let netopts = {
    inputSize: 4,
    hiddenLayers: [8, 16, 12, 8],
    outputSize: 4
}

let trainopts = {
    learningRate: 0.005,
    errorThresh: 0.03,
    // iterations: 400,
    log: stats => console.log(stats)
}

const net = new brain.recurrent.LSTMTimeStep(netopts)

net.train(trainingData, trainopts)

let trainedNet = net.toJSON();

fs.writeFileSync(__dirname+`/training/${trainingData.length * trainingData[0].length}_${netopts.hiddenLayers}_${trainopts.learningRate}_${trainopts.errorThresh}.json`, JSON.stringify(trainedNet), 'utf8');

let fore = net.forecast(trainingData[15], 10).map(scaleUp)
let act = trainingData[16].slice(0,10).map(scaleUp)

let diff = []

for (let i=0;i<10;i++){
    diff.push(Math.abs(fore[i].close - act[i].close))
}

// console.log('Predicted:', scaleUp(net.run(trainingData[0])), 'Actual:', scaleUp(trainingData[1][0]))

console.log(diff)