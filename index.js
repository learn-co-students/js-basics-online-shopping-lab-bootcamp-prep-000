var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var items = {itemName: item};
  //random number between 1 and 100
  var price = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  //assigning another key, value for items object
  items['itemPrice'] = price;
  //items will now have two keys w their respective values.
  //adding the items object into the cart array.
  cart.push(items);
  //message indicating item has been added.
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  if (cart.length === 0) {
    return "Your cart is empty.";
  }
  else {
    var intro = "In your cart, you have ";
    var list = [];
    for (var i = 0; i < cart.length; i++) {
      list.push(cart[i]['itemName'] + " at $" + cart[i]['itemPrice']);
    }
    return (`${intro}` + list.join(', ') + ".");
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
