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
  var intro = "In your cart, you have ";
  var list = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  if (cart.length === 1) {
    return (`${intro}` + cart[0]['itemName'] + " at $" + cart[0]['itemPrice'] + ".");
  }
  if (cart.length === 2) {
    for (var i = 0; i < cart.length; i++) {
      list.push(cart[i]['itemName'] + " at $" + cart[i]['itemPrice']);
    }
    return (`${intro}` + list.join(', and ') + ".");
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      list.push(cart[i]['itemName'] + " at $" + cart[i]['itemPrice']);
      
    }
    return (`${intro}` + list[0]['itemName'] + " at $" list[0]['itemPrice'] + ", " + list[1]['itemName'] + " at $" list[1]['itemPrice'] + )
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
