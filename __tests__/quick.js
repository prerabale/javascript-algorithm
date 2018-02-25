const utils = require( '../utils' );
const quick = require( '../lib/quick' );

test( 'quick', () => {
    let arr = utils.getRandomArray();
    const res = quick( arr ).every( ( num, index, array ) => {
        if( index < arr.length - 1 ) {
            return num <= array[ index + 1 ]
        } else {
            return true
        }
    } );
    expect( res ).toBe( true );
} );