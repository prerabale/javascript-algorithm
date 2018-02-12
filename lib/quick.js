function quick(arr) {
    if(arr.length <=1) return arr;

    let pointer_index = Math.floor(arr.length/2);
    let pointer = arr.splice(pointer_index, 1)[0];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pointer){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [].concat( quick(left), [pointer], quick(right) )
}

module.exports = quick;