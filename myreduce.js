k
//(5) [1, 2, 3, 4, 5]
k.reduce((accumulator, currvalue)=>{
    return accumulator+currvalue;
}, 0)
//15
Array.prototype.myreduce = function (callback, initialval) {
    if(typeof callback !== 'function'){
        throw Error("ERROR")
    }
    else{
        var arr = this;
        for(let i = 0; i < arr.length; i++){
            const ans = callback(initialval, arr[i], i, arr)
            initialval = ans
        }
    }
    return initialval
}

k.myreduce((accumulator, currvalue)=>{
    return accumulator+currvalue;
}, 0)
//15
