var fs = require('fs');
var inputFileName = process.argv[2];
var buf = fs.readFileSync(inputFileName);
var lines = buf.toString().split('\n');

console.log(lines.length-1);