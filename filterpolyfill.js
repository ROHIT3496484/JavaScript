var arr = [1, 2, 3, 4, 5];
arr.filter((item, index, self) => {
  return item > 2;
});

//(3) [3, 4, 5]

Array.prototype.myfilter  = function (callback) {
    if(!callback){
        throw Error ("Error")
    }
    var arr = this; //here this keyword is taking array from callback function and this assign to arr
    let newarr = [];// used for adding values in newarr if condition satisfied
    for (let index = 0; index < arr.length; index++) {
        const result = callback(arr[index], index, arr)//callback function
        if(result){ // condition
            newarr.push(arr[index])
        }
    }
    return newarr
}


var arr = [1, 2, 3, 4, 5];
arr.myfilter((item, index, self) => {
  return item > 2;
});
//((item, index, self) => {return item > 2;}); // callback function

//(3) [3, 4, 5]
