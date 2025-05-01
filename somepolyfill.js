var k= [1, 2, 3, 4, 5]

//undefined
k.some((item)=>{
    return item>2
})
//true
Array.prototype.mysome = function (callback) {
    if(!callback){
        throw Error("Error")
    }
    else{
        var arr = this;
        for(let i=0; i<arr.length; i++){
            const result = callback(arr[i], i, arr)
            if(result){
                return true
            }
        }
    }
    return false   
}
k.mysome((item)=>{
    return item>2
})
//true
