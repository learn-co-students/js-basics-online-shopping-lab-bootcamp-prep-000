var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item;
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 var itemWithPrice = { [itemName]: itemPrice };
 cart.push(itemWithPrice);
 console.log(`${itemName} has been added to your cart.`);
 return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    if (cart.length === 1){
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
    } else if (cart.length === 2){
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
    } else {
      var cartStr = "In your cart, you have ";
      for(var i = 0; i < cart.length; i++) {
        if (i === cart.length - 1) {
          cartStr = cartStr + `and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
        } else {
          cartStr = cartStr + `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
        }
      }
    console.log(cartStr)}
  }
}

function total() {
  var cartTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    cartTotal = cartTotal += cart[i][Object.keys(cart[i])]
  } return cartTotal
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      console.log(cart);
      return cart
    }
  }
      console.log("That item is not in your cart.");
      return cart
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var cartTotal = 0;
    for(var i = 0; i < cart.length; i++) {
      cartTotal = cartTotal += cart[i][Object.keys(cart[i])]
    }
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don\'t have a credit card on file for you.")
    }
}
