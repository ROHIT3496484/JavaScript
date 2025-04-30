var l  = [1, 2, 3, 4]

//undefined
l.find((item)=>{
    if(item ==2)
        return item;
})
//2
Array.prototype.myfind = function (callback) {
    if (!callback) {
        throw Error("Error")
    }
    else{
        var arr = this;
        for(let i = 0; i<arr.length; i++){
            const result = callback(arr[i], i, arr);
            if(result){
                return arr[i]
            }
        }
    }
    
}

l.myfind((item)=>{
    if(item ==2)
        return item;
})
// 2
