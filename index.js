var cart = [];

function getCart() {

 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

 var itemPrice = Math.floor(Math.random() * 100) + 1;

 cart.push ({[item] : itemPrice});

 console.log (`${item} has been added to your cart.`);

 return cart
}

function viewCart() {

  const l = cart.length;

  var inYourCart = [];

  for (let i = 0; i < l; i++) {  //cart = [{ttoys: 25}, {socks:5}, {detergent:12}]
    var currentItem = cart[i]
    var itemName = Object.keys(currentItem)[0]
    var itemPrice = currentItem[itemName]
    inYourCart.push (`${itemName} at $${itemPrice}`);
  }

  if (l === 0) {
    console.log (`Your shopping cart is empty.`);
  }
  else if (l === 1) {
    console.log (`In your cart, you have ${inYourCart[0]}.`);
  }
  else if (l === 2) {
    console.log (`In your cart, you have ${inYourCart[0]} and ${inYourCart[1]}.`);
  }
  else {
    var slicedCart = inYourCart.slice(0, l - 1)
    console.log (`In your cart, you have ${slicedCart.join(", ")}, and ${inYourCart[l - 1]}.`);
  }
}

function total() {
  var totalPrice = 0
  for (let i =0; i < cart.length; i++) {
    var currentItem = cart[i]
    var itemName = Object.keys(currentItem)[0]
    var itemPrice = currentItem[itemName]
    totalPrice += itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
