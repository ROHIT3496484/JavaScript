var a = [1, 2, [3, 4]]
//undefined
a.flat();
//(4) [1, 2, 3, 4]
Array.prototype.myflat = function () {
    const arr = this;
    const result = [];
    function flat(arr) {
        for(let i=0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                flat(arr[i]); //[3,4]
            }
            else{
                result.push(arr[i]); [1,2]
            }
        }
    }
    flat(arr);
    return result
}
//ƒ () {
//    const arr = this;
//    const result = [];
//    function flat(arr) {
//        for(let i=0; i<arr.length; i++){
//            if(Array.isArray(arr[i])){
//                flat(arr[i]); //[3,4]
//      …
a.flat();
//(4) [1, 2, 3, 4]
a.myflat();
//(4) [1, 2, 3, 4]


Array.prototype.myflatiterative = function () {
    const stack = [...this];
    const result = [];
    while(stack.length){
        const popedElem = stack.pop();
        if(Array.isArray(popedElem)){
            stack.push(...popedElem);
        }
        else{
            result.push(popedElem);
        }
    }
    return result;
    
}
