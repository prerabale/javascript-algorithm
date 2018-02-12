const algorithm = require( './algorithm' );
const utils = require( './utils' );

const example = utils.getRandomArray();

console.log('example:', example);
console.log(algorithm.quick(example.slice()));
