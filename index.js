var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {};
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  newItem[item] = itemPrice;
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartArray = [];
  for (let i = 0; i < cart.length; i++){
    var itemName  = Object.keys(cart[i])[0];
    var itemPrice = cart[i][itemName];
    cartArray.push(`${itemName} at $${itemPrice}`);
  }
  if (cart.length === 0){
    console.log(`Your shopping cart is empty.`);
  } else if (cart.length <= 2){
    console.log(`In your cart, you have ${cartArray.join(' and ')}.`)
  } else if (cart.length >= 3){
    console.log(`In your cart, you have ${cartArray.slice(0, cartArray.length - 1).join(', ')}, and ${cartArray.slice(-1)}.`)
  }
}

function total() {
  var totalCost = 0;
  for (let i = 0; i < cart.length; i++){
    var itemName  = Object.keys(cart[i])[0];
    totalCost += cart[i][itemName];
  }
  return totalCost;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
  return cart;
}

function placeOrder(creditCardNumber) {
  if (creditCardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
