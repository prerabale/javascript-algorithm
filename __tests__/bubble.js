const utils = require( '../utils' );
const bubble = require( '../lib/bubble' );

test( 'bubble', () => {
    let arr = utils.getRandomArray();
    const res = bubble( arr ).every( ( num, index, array ) => {
        if( index < arr.length - 1 ) {
            return num <= array[ index + 1 ]
        } else {
            return true
        }
    } );
    expect( res ).toBe( true );
} );