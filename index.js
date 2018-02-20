var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random()*100)+1);
  var newObject = {[itemName]: itemPrice};
  cart[cart.length] = newObject;
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

var itemList = [];

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    var key = Object.keys(cart[0])[0];
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][key]}.`);
  } else if (cart.length === 2) {
    var firstKey = Object.keys(cart[0])[0];
    var secondKey = Object.keys(cart[1])[0];
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][firstKey]} and ${Object.keys(cart[1])[0]} at $${cart[1][secondKey]}.`);
  } else {
    var n=0;
    var itemList = []
    do{
      itemList[itemList.length] = ` ${Object.keys(cart[n])[0]} at $${cart[n][Object.keys(cart[n])[0]]}`;
      n++;
    }
    while(n<cart.length-1)
    console.log(`In your cart, you have${itemList.toString()}, and ${Object.keys(cart[cart.length-1])[0]} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]}.`)
}
}


function total() {
  var i = 0;
  var totalValue = [0];
  do{
    totalValue[0] = totalValue[0] + parseInt(cart[i][Object.keys(cart[i])[0]]);
    i++;
  }
  while(i<cart.length);
  return totalValue[0]
}



function removeFromCart(item) {
  var keysOnly = []
  var n = 0;
  while(n<cart.length){
    keysOnly[keysOnly.length] = Object.keys(cart[n])[0];
    n++;
  }
   if (keysOnly.indexOf(item)===-1){
      console.log("That item is not in your cart.")
    } else {
    cart.splice(keysOnly.indexOf(item), 1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  }else{
    var i = 0;
  var totalValue = [0];
  do{
    totalValue[0] = totalValue[0] + parseInt(cart[i][Object.keys(cart[i])[0]]);
    i++;
  }
  while(i<cart.length);
  console.log(`Your total cost is $${totalValue[0]}, which will be charged to the card ${cardNumber}.`)
    cart = [];
}
}
