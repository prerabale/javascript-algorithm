function bubble(arr) {
    const len = arr.length;
    if(len <= 1) return arr;
    let res = [];
    for(let i = 0; i < len; i++){
        let tmp;
        if(arr[i] > arr[i+1]){
            tmp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = tmp;
        }
    }

    return bubble(arr.slice(0, -1)).concat( [arr[arr.length-1]] );
}

module.exports = bubble;