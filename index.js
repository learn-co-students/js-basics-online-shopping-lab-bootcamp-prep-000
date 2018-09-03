var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100) + 1;
  var itemObject = {itemName:item, itemPrice:price};
 cart.push(itemObject);
 return item + " has been added to your cart.";
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  if(cart.length === 1) {
    return "In your cart, you have "  + cart[0].itemName + " at $" + cart[0].itemPrice + ".";}
  if(cart.length === 2) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + ".";
  }
  else {
  for (let i = 1; i < cart.length-1; i++) {
    return "In your cart, you have" + cart[0].itemName + " at $" + cart[0].itemPrice + ", " + cart[i].itemName + " at $" +  cart[i].itemPrice + ", and " + cart[cart.length-1].itemName + " at $" + cart[cart.length-1].itemPrice + ".";
  }
}

function total() {
  var sum = 0;
  for (i = 0; i < cart.length; i++) {
    return sum += cart[i].itemPrice;
  }
}

function removeFromCart(item) {
  for (i = 0; i < cart.length; i++) {
  if (item === cart[i].itemName) {
    cart.splice(i, 1);
    return cart;
  }
  else {return"That item is not in your cart.";
}
}
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you";}
    else {
    return "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber ".";
    cart = [];
  }
}
