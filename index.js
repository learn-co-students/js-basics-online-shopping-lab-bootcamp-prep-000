// var cart = [];
// var cart = [ { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }];
var cart = [ { "orange": 84 }, { "pear": 66 }, { "quince": 40 }];
// var cart = [ { "bananas": 17 }, { "pancake batter": 5 }];
//orange at $84, pear at $66, and quince at $40.'
//In your cart, you have orange at $69, pear at $54, and quince at $74.'
//In your cart, you have orange at $84, pear at $66 and quince at $40.

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100)+1;
 cart.push({[item] : price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length === 0) {console.log("Your shopping cart is empty."); return null;}
  var line = "In your cart, you have "
  for(var i = 0; i<cart.length; i++){
    // line += `${cart[i][0]} at ${cart[i][0]0}`
    var itemKey = Object.keys(cart[i]);
    line += `${ itemKey} at \$${cart[i][itemKey]}`
    if (cart.length === 2 && cart.length > i+1){line += " and "}
    else if (i === cart.length-2){ line += ", and "}
    else if(cart.length > i+1){line+=", "}
  }
  line += "."
  console.log(line); //how do we get first key name?
  return null;
  //     Error: spy was never called with [ 'In your cart, you have mango at $9 and nuts at $34.' ]
//   'In your cart, you have orange at $15, pear at $52, and quince at $49.'
}
// viewCart();
// console.log(cart[0])
// console.log(Object.keys(cart[0])[0]) //to get string of first key

function total() {
  // write your code here
  var totalValue=0;
  for(var i=0;i<cart.length;i++){
    // console.log(  Object.keys(cart[i])[0]  )
    var key = Object.keys(cart[i])[0]; //console.log(`key: ${key}`)
    // console.log(`cost is ${cart[i][key]}`)
    var currentItemValue = Number(cart[i][key]); //console.log(currentItemValue)
    totalValue += currentItemValue
  }
  // console.log("total done " + totalValue )
  //The total() function accepts no arguments, iterates through the cart array, and
  // returns the current total value of the items in the cart.
  return totalValue;
}
// console.log("Calling total()")
// total();

function removeFromCart(item) {
  var itemRemoved = 0;
  for(var i=0;i<cart.length;i++){
    console.log((cart[i]));
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1)//slice? this element
      itemRemoved = 1;
    }
  }
  if(itemRemoved === 0){console.log("That item is not in your cart.")}  //else {console.log(`itemRemoved is ${itemRemoved}`)}
}

function placeOrder(cardNumber) {
    if(cardNumber === undefined){console.log("Sorry, we don't have a credit card on file for you.");return null}
    // var total = 0;
    // for(var i=0;i<cart.length;i++){}
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
// console.log(total())
// placeOrder(12345)
