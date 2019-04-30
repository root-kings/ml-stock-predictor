// const async = require('async')
// const prepareData = require('./src/prepare-data').prepareData
const util = require('./src/util')
const fs = require('fs')
const brain = require('brain.js')
// prepareData(__dirname + '/data/ICICIBANK.NS.csv', 'icici').then((k,v)=>{
//     console.log(v)
// })

const preparedData = JSON.parse(fs.readFileSync(__dirname + '/data/icici.json'))

const scaledData = preparedData.map(x => util.scaleDown(x, 450))

let trainingData = []

for (let i = 0; i < Math.floor(scaledData.length / 30); i++) {
	trainingData.push(scaledData.slice(30 * i, 30 * (i + 1)))
}

// console.log(scaledData.length/30)
// console.log(
// 	scaledData.filter((x, i) => {
// 		if (x.open > 1 || x.high > 1 || x.low > 1 || x.close > 1) {
// 			console.log(i)
// 			return true
// 		} else {
// 			return false
// 		}
// 	})
// )

// console.log(trainingData[1][0])

// console.log('training set:', trainingData.length, 'x', trainingData[0].length)

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

// const net = new brain.recurrent.LSTMTimeStep(netopts)
const net = new brain.recurrent.LSTMTimeStep()

let filepath = __dirname + `/training/${trainingData.length * trainingData[0].length}_${netopts.hiddenLayers}_${trainopts.learningRate}_${trainopts.errorThresh}.json`

let netJ = JSON.parse(fs.readFileSync(filepath))

// console.log()

net.fromJSON(netJ)

// net.train(trainingData, trainopts)

// let trainedNet = net.toJSON();

// fs.writeFileSync(__dirname+`/training/${trainingData.length * trainingData[0].length}_${netopts.hiddenLayers}_${trainopts.learningRate}_${trainopts.errorThresh}.json`, JSON.stringify(trainedNet), 'utf8');

/* let fore = net.forecast(trainingData[15], 10).map(util.scaleUp)
let act = trainingData[16].slice(0,10).map(util.scaleUp)

let diff = []

for (let i=0;i<10;i++){
    diff.push(Math.abs(fore[i].close - act[i].close))
} */
// console.log('Predicted:', net.run(trainingData[0]), 'Actual:', trainingData[1][0])

fs.writeFileSync(__dirname+`/training/net-${trainingData.length * trainingData[0].length}_${netopts.hiddenLayers}_${trainopts.learningRate}_${trainopts.errorThresh}.svg`, brain.utilities.toSVG(net), 'utf8');


console.log('Predicted:', util.scaleUp(net.run(trainingData[0]+trainingData[1]), 450), 'Actual:', util.scaleUp(trainingData[1][0],450))

// console.log(diff)
