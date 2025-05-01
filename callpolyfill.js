function foo(age) {
    console.log(`your name ${this.name} and your age is ${this.age}`)
}
//undefined
var p1 = {
    name: "rohit"
}
//undefined
foo.call(p1, 28)
//VM4078:2 your name rohit and your age is undefined
//undefined
function foo(age) {
    console.log(`your name ${this.name} and your age is ${age}`)
}
//undefined
var p1 = {
    name: "rohit"
}
//undefined
foo.call(p1, 28)
//VM4199:2 your name rohit and your age is 28
//undefined
Function.prototype.mycall = function (context, ...args) {
    if(typeof this !== 'function'){
        throw Error("Error")
    }
    context.reffunc = this;
    context.reffunc(...args);
}

foo.mycall(p1, 28)
//VM4199:2 your name rohit and your age is 28
//undefined
