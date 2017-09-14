console.log("test")
var obj1 = {bananas:10}
var obj2 = {apples:5}
var obj3 = {pears:2}

var testArray = []
console.log(testArray[0])
testArray[0]=obj1;
testArray[1]=obj2;
testArray[2]=obj3;
var output = "You have"
for (let i = 0; i < testArray.length; i++) {
  var item = Object.keys(testArray[i])
  output = `${output} ${item} that costs $${testArray[i][item]}`


}

console.log(output)
