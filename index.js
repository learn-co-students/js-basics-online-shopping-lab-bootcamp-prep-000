var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log( `${item} has been added to your cart.`)
  return cart;
}
function viewCart() {
  var strCart = ``;
  if (!cart.length) {
    console.log(`Your shopping cart is empty.`)
  }
  else {
    strCart = `In your cart, you have`;
    for (var item in cart) {
      var product = Object.keys(cart[item]);
      strCart = strCart + ` ${product} at $${cart[item][product]},`;
    }
    console.log(strCart.slice(0,-1) + ".");
  }
}
function removeFromCart(item) {
  if (!cart.length) {
     console.log(`That item is not in your cart.`);
  }
  else {
     for (var i in cart) {
      if (cart[i].hasOwnProperty(item)) {
        var newCart = [...cart.slice(0,i),...cart.slice(i,cart.length-1)];
        cart = newCart;
      }
      else {
        console.log(`That item is not in your cart.`);
      }
  }
 }
//  return cart;
}
function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function placeOrder(card) {
  if (!card) {
  return console.log(`We don't have a credit card on file for you to place your order.`)
  }
  else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
  cart = [];
  }
}
