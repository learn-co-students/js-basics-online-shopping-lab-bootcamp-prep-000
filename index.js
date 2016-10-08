var cart = [];

function setCart(newCart) {
  cart = newCart;
}

var getCart = () => {return cart};

function addToCart(item) {
  var price = Math.round(Math.random() * 100);
  cart.push({item:price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
var b = "In your cart you have ";
  if (cart.length !== 0) {
    for (var x = 0; x < cart.length -2; x++) {
      b += `${cart[x].key} at $${cart[x].item}, `
    }
    b += `${cart[cart.length - 1].key} at $${cart[cart.length -1].item}.`;
    console.log(b);
  }
  else {
    console.log(`Your shopping cart is empty.`);
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart.hasOwnProperty('item')) {
      delete cart[i].item;
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
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

function placeOrder(cc) {
  if (!cc || cc.length == 0) {
    console.log(`We don\`t have a credit card on file for you to place your order.`);
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
  }
  return cart = [];
}
