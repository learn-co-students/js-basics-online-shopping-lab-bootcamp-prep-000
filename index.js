var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemToCart = {
    itemName: `${item}`,
    itemPrice: Math.floor(Math.random()*100)

  };
 cart.push(itemToCart);
 return `${itemToCart.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  }
var cartList = "In your cart, you have"
for (var i = 0; i < cart.length; i++) {
  if (cart.length !== 1 && i == cart.length -1){
    cartList += " and"
  }
  cartList += ` ${cart[i].itemName} at $${cart[i].itemPrice}`
  if( i == cart.length -1) {
    cartList += "."
  }
  else {
    cartList += ","
  }
}
return cartList;
}

function total() {
  var sum =0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum;
}

function removeFromCart(item) {
for (var i = 0; i < cart.length; i++) {
  if ( item == cart[i].itemName ){
    cart.splice( i , 1 );
    return cart;
  }
}
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var sum = total();
  cart = [];
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
