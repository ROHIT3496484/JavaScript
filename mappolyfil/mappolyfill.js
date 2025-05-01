var arr = [1, 2, 3, 4];

/**arr.map((item) => {
  console.log(item * 2);
});**/

Array.prototype.mymap = function (callback) {
  if (!callback) {
    throw Error("you are not using callback");
  }
  var arr = this;
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newarr.push(result);
  }
};

arr.mymap((item) => {
  console.log(item * 3);
});
