const fs = require('fs')
const brain = require('brain.js')
const util = require('./util')

const scaledData = JSON.parse(fs.readFileSync(__dirname + '/../data/scaled_ICICIBANK.NS.json'))

let trainingData = []

for (let i = 0; i < Math.floor(scaledData.length / 30); i++) {
	trainingData.push(scaledData.slice(30 * i, 30 * (i + 1)))
}

trainingData = trainingData.slice(0,3)

const netopts = {
	inputSize: 4,
	hiddenLayers: [5,5,5],
	outputSize: 4
}

const trainopts = {
	learningRate: 0.005,
	errorThresh: 0.03,
	// iterations: 400,
	log: stats => console.log(stats)
}

const netJSPath = __dirname + `/../training/${trainingData.length * trainingData[0].length}_${netopts.hiddenLayers}_${trainopts.learningRate}_${trainopts.errorThresh}.js`
const netJSONPath = __dirname + `/../training/${trainingData.length * trainingData[0].length}_${netopts.hiddenLayers}_${trainopts.learningRate}_${trainopts.errorThresh}.json`
const netSVGPath = __dirname + `/../training/${trainingData.length * trainingData[0].length}_${netopts.hiddenLayers}_${trainopts.learningRate}_${trainopts.errorThresh}.svg`

const net = new brain.recurrent.LSTMTimeStep(netopts)

net.train(trainingData, trainopts)


fs.writeFileSync(netJSPath, `export default ${ net.toFunction().toString() };`, 'utf8')
// fs.writeFileSync(netJSONPath, JSON.stringify(net.toJSON()), 'utf8')
// fs.writeFileSync(netSVGPath, brain.utilities.toSVG(net), 'utf8')

console.log(`Training finished. Network placed at ${netJSONPath}.`)

console.log('Predicted:', util.scaleUp(net.run(trainingData[0]), 411), 'Actual:', util.scaleUp(trainingData[1][0], 411))
