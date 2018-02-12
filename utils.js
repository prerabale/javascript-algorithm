const fs = require( 'fs' );
const path = require( 'path' );

module.exports = {
    getRandomArray(len = 10){
        let arr = [];
        for(let i = 0; i < len; i++){
            arr.push(parseInt(Math.random() * 100))
        }

        return arr
    },
    readDirJs(targetPath){
        const files = fs.readdirSync(targetPath);

        return files.reduce((collect, file) => {
            if(path.extname(file) !== '.js') return collect;
            // if(path.basename(file, '.js') === 'index') return collect;
            collect[path.basename(file, '.js')] = require( require.resolve(path.join(targetPath, file)) );
            return collect
        }, {});
    }
};