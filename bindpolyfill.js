function foo(age, city, phone) {
        console.log(`Hello ${this.name}, your age is ${age}, lives in ${city} and Phone is ${phone}`);
}
//undefined
var p1 = {
    name: 'Rohit'
}
//undefined
foo.bind(p1, 28, 'Delhi', 8476)
ƒ foo(age, city, phone) {
        console.log(`Hello ${this.name}, your age is ${age}, live in ${city} and Phone is ${phone}`);
}
var b1 = foo.bind(p1, 28, 'Delhi', 8476)
//undefined
b1()
//VM5465:2 Hello Rohit, your age is 28, live in Delhi and Phone is 8476
//undefined

var b1 = foo.bind(p1, 28, 'Delhi')
//undefined
b1(1234)
//VM5465:2 Hello Rohit, your age is 28, lives in Delhi and Phone is 1234
//undefined
Function.prototype.mybind = function (context, ...args) {
    if(typeof this !== 'function'){
        throw Error("Error")
    }
    else{
        context.reffunc = this;
        return function(...otherargs) {
            context.reffunc(...args, ...otherargs)
        }
    }
}

var b2 = foo.mybind(p1, 28, 'Delhi')
//undefined
b2(4567)
//VM5465:2 Hello Rohit, your age is 28, lives in Delhi and Phone is 4567
//undefined
