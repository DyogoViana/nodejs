const getFlagsResult = require("./flags");

console.log(`Oi ${getFlagsResult('--name')}. ${getFlagsResult('--greeting')}`);
