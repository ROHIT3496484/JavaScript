function ap(age, city) {
    console.log(`Your name is ${this.name}, your age is ${age} and lives is ${city}`)
}
//undefined
p1
//{name: 'rohit', reffunc: ƒ}
ap.apply(p1, 28, `delhi`)
//VM4847:1 Uncaught TypeError: CreateListFromArrayLike called on non-object
//    at <anonymous>:1:4
//(anonymous) @ VM4847:1Understand this error
ap.apply(p1, [28, `delhi`])
//VM4642:2 Your name is rohit, your age is 28 and lives is delhi
//undefined
Function.prototype.myapply = function (context, args) {
    if(typeof this !== 'function'){
        throw Error ("Error")
    }
    else{
        context.reffunc = this;
        context.reffunc(...args);
    }
}

ap.apply(p1, [28, `delhi`])
//VM4642:2 Your name is rohit, your age is 28 and lives is delhi
//undefined
ap.myapply(p1, [28, `delhi`])
//VM4642:2 Your name is rohit, your age is 28 and lives is delhi
//undefined
