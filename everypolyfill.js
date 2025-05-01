k
//(5) [1, 2, 3, 4, 5]
var m = [4, 5, 6, 7]
//undefined
k.every((item)=>{
    return item>3
})

//false
m.every((item)=>{
    return item>3
})
//true

Array.prototype.myevery = function (callback) {
    if(!callback){
        throw Error("Error")
    }
    else{
        var arr = this;
        for(let i=0; i<arr.length; i++){
            const result = callback(arr[i], i, arr)
            if(!result){
                return false;
            }
        }
    }
    return true;
}

m.myevery((item)=>{
    return item>3
})
//true
k.myevery((item)=>{
    return item>3
})

//false
