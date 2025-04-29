//let arr = [1, 2, 3, 4];
/**console.log(arr);

arr.forEach((item, index, self)=>{
    console.log(item, index, self)
}) **/

Array.prototype.myforeach = function (callback) {
  if (!callback) {
    throw Error("Error  undefined");
  }
  const arr = this; //here the this keyword(myarray) is used for the array, which we are calling from outside
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

var myarr = [1, 3, 5, 7, 9];
myarr.myforeach((item, index, self) => {
  console.log(item, index, self);
});
