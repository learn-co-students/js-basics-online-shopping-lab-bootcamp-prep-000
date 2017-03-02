var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(10 * Math.random());
  var obj = {[item] : price};
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
} else {
  var itemAtPrice = [];
  for (var i = 0; i < cart.length; i++) {
    var itemName = Object.keys(cart[i])[0];
    var itemPrice = cart[i][itemName]
    itemAtPrice.push(`${itemName} at $${itemPrice}`);
    var shoppingCart = itemAtPrice.join(', ')
}
  console.log(`In your cart, you have ${shoppingCart}.`);
}
}

function removeFromCart(item) {
  let itemInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (item === Object.keys(cart[i])[0]) {
      itemInCart = true;
      cart.splice(i,1).concat(cart.splice(i, 0));
    }
    }
    if (itemInCart === false) {
      console.log("That item is not in your cart.");
  }
  return cart;
  }

function placeOrder(cardNumber){
  let number = false;
  if (cardNumber != number) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  for (let i = 0; i < cart.length; i++){
    if (i < cart.length) {
      number = true;
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    }
}
  return (cart = [])
}
