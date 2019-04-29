exports.scaleDown = function(step, max) {
	// normalize
	return {
		open: step.open / max,
		high: step.high / max,
		low: step.low / max,
		close: step.close / max
	}
}

exports.scaleUp = function(step, max) {
	// denormalize
	return {
		open: step.open * max,
		high: step.high * max,
		low: step.low * max,
		close: step.close * max
	}
}
