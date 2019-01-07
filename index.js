var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {}
  newItem[item] = Math.floor(Math.random()*100 + 1);
  console.log(`${item} ` + "has been added to your cart.")
  return cart.push(newItem);
}

var check1 = addToCart('cheese');
var check2 = addToCart('paper');
var check3 = addToCart('chair');
var check4 = addToCart('pants');
//console.log("item " + `${Object.keys(cart[0])}`);

function viewCart() {
  if (!cart.length){
    return "Your shopping cart is empty.";
  }
  if (cart.length == 1){
    let firstObj = cart[0];
    let firstKey = Object.keys(firstObj);
    let firstValue = firstObj[firstKey];
    return "In your cart, you have " + `${firstKey} ` + 'at ' + '$' + `${firstValue}.`;
  }
  if (cart.length == 2){
    let firstObj = cart[0];
    let firstKey = Object.keys(firstObj);
    let firstValue = firstObj[firstKey];

    let secondObj = cart[1];
    let secondKey = Object.keys(secondObj);
    let secondValue = secondObj[secondKey];
    return "In your cart, you have " + `${firstKey} ` + 'at ' + '$' + `${firstValue} ` + 'and ' + `${secondKey} ` + 'at ' + '$' + `${secondValue}.`;
  }
  if (cart.length > 2){
    var message = ["In your cart, you have "]
    for (i=0;i<cart.length;i++){
        let myObj = cart[i];
        let myKey = Object.keys(myObj);
        let myVal = myObj[myKey]
        if (i != cart.length - 1){
          message.push(`${myKey} ` + 'at ' + '$' + `${myVal}, `)
        }
        if (i == cart.length - 1){
          message.push('and ' + `${myKey} ` + 'at ' + '$' + `${myVal}. `)
        }
    }
    return message;
  }
}

var check = viewCart(cart);
console.log(check);

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
