var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor((Math.random() * 100) + 1);
 cart.push({[item]: price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var itemsAndPrices = []
  var last_element = cart[cart.length - 1];
  var second_to_last_element = cart[cart.length - 2];
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    return console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
  } else if (cart.length === 2) {
    return console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
  } else if (cart.length > 2){
    for (var i = 0; i < cart.length; i++){
      if (cart[i] === last_element){
        itemsAndPrices.push(`and ${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
      } else if (cart[i] === second_to_last_element) {
        itemsAndPrices.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
      } else {
        itemsAndPrices.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
      }
    }
  }
  return console.log(`In your cart, you have ${itemsAndPrices.join(", ")}.`)
}

function total() {
  // write your code here
  var cart_prices = [];
  for (var i = 0; i < cart.length; i++){
    cart_prices.push((Object.values(cart[i])[0]));
  }
  var total = cart_prices.reduce(add, 0);

  function add(a, b) {
      return a + b;
  }

  return total;
}

function removeFromCart(item) {
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    return cart = [];
  }
}
