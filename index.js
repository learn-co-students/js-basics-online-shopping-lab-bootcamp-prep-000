var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newCart = {};
 var itemPrice = Math.floor(Math.random() * (100 - 1)) + 1;
 newCart[item] = itemPrice;
 cart.push(newCart);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var viewCartArray = [];
  var lastItem = [];
  for (var i = 0; i < cart.length; i++) {
    viewCartArray.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
  }
    if (viewCartArray.length === 0) {
      console.log("Your shopping cart is empty.");
  } else if (viewCartArray.length === 1) {
      console.log(`In your cart, you have${viewCartArray}.`);
  } else if (viewCartArray.length === 2) {
      console.log(`In your cart, you have${viewCartArray[0]} and${viewCartArray[1]}.`);
  } else {
      lastItem.push(viewCartArray[viewCartArray.length - 1]);
      viewCartArray.pop(viewCartArray[viewCartArray.length - 1]);
      console.log(`In your cart, you have${viewCartArray}, and${lastItem}.`);
  }
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum += parseInt(Object.values(cart[i]))
  }
  return sum
}

function removeFromCart(item) {
  var empty = []
  for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        empty.push(item);
        cart.splice(i, 1);
        return cart;
      }
  }
    if (empty = []) {
    console.log("That item is not in your cart.")
    }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0;
  }
}
