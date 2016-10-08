var cart = [];

function setCart(newCart) {
  cart = newCart;
}

var getCart = () => {return cart};

function addToCart(item) {
  var price = Math.round(Math.random() * 100);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`)
  return cart;
} //need to put item in [] in order for the var value to be added to object

function viewCart() {
  if (!cart || cart.length == 0) {
    console.log(`Your shopping cart is empty.`);
  }
  else {
    var b = "In your cart, you have ";
    for (var x = 0; x < cart.length; x++) {
      var a = Object.keys(cart[x]);
      b += `${a} at $${cart[x][a]}${x == cart.length -1 ? '.' : ', '}`
    }
    console.log(b);
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i);
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
  if (!arguments) {
    console.log(`We don\`t have a credit card on file for you to place your order.`);
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    return cart = [];
  }
}
