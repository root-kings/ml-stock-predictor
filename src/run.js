const fs = require('fs')
const brain = require('brain.js')
const util = require('./util')

const scaledData = JSON.parse(fs.readFileSync(__dirname + '/../data/scaled_ICICIBANK.NS.json'))

let trainingData = []

for (let i = 0; i < Math.floor(scaledData.length / 30); i++) {
	trainingData.push(scaledData.slice(30 * i, 30 * (i + 1)))
}

trainingData = trainingData.slice(0, 3)

const netopts = {
	inputSize: 4,
	hiddenLayers: [5, 5, 5],
	outputSize: 4
}

const trainopts = {
	learningRate: 0.005,
	errorThresh: 0.03,
	// iterations: 400,
	log: stats => console.log(stats)
}

// const net = new brain.recurrent.LSTMTimeStep()

let filepath = __dirname + `/../training/${trainingData.length * trainingData[0].length}_${netopts.hiddenLayers}_${trainopts.learningRate}_${trainopts.errorThresh}.json`

// net.fromJSON(JSON.parse(fs.readFileSync(filepath)))

import trainedNet from ('../training/90_5,5,5_0.005_0.03.js')

console.log('Predicted:', util.scaleUp(trainedNet(trainingData[0]), 411), 'Actual:', util.scaleUp(trainingData[1][0], 411))