function getFlagsResult(flag) {
	const index = process.argv.indexOf(flag) + 1; // pega a posição, mais o próximo.
	return process.argv[index];
}

module.exports = getFlagsResult;
