const path = require( 'path' );
const utils = require( './utils' );
const targetPath = path.join(__dirname, './lib');


module.exports = utils.readDirJs(targetPath);