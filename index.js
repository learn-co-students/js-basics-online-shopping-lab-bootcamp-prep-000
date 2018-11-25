var cart = [];
var getCart = () => cart;
var setCart = c => {cart = c; cart;};

function addToCart(item) {
  var price = (Math.floor(Math.random()*100) + 1);
  cart.push({ itemName: item, itemPrice: price });
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (!cart.length) {
    return 'Your shopping cart is empty.';
  } else {
    let combo = [];
    let intro = 'In your cart, you have';
    for (let i = 0; i < cart.length; i++) {
      combo.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    } let last = combo.pop();
      return `${intro}${(cart.length > 1 ? `${combo}, and` : '')}${last}.`;
    }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  } return total;
}

function removeFromCart(name) {
  for (var i = 0; i < cart.length; i++) {
    if (name === cart[i].itemName) {
      return cart.splice(i, 1);
    }
  } return "That item is not in your cart.";
}

function placeOrder(cc) {
  if (!cc) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var receipt = `Your total cost is $${total()}, which will be charged to the card ${cc}.`;
    cart = [];
    return receipt;
  }
}