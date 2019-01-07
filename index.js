var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random()*10);
 cart.push({[item]: price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var printOut = '';
  if (cart.length > 0) {
    printOut = 'In your cart, you have ';
    for (var i = 0; i<cart.length; i++) {
      if (cart.length===2 && i===1) {
        printOut=printOut + ' ';
      }
      if (i===cart.length-1 && cart.length > 1){
        printOut=printOut + 'and ';
      }
      printOut= printOut + `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`;
        if (cart.length > 2 && cart.length -1 > i){
          printOut=printOut + ', ';
        }
        else if (cart.length-1===i) {
          printOut= printOut + '.';
        }
        
      } 
  }
  else {
      printOut = 'Your shopping cart is empty.';
    }
  console.log(printOut);
}
function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total+= cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  var deleted = false;
  var i = 0;
  while (!deleted && i< cart.length) {
    if (cart[i].hasOwnProperty(item)) {
      delete cart[i];
      deleted = true;
    }
  }
  if (!deleted) {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{ 
    console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`)
    while (cart.length!== 0) {
      cart.push();
    }
  }
}

