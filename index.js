var cart=[];

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
  return cart;
}

function addToCart(item) {
 var obj = {};
 obj[item] = Math.floor(Math.random()*100);
 cart.push(obj);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var log = 'In your cart, you have'
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        log +=` ${item} at $${cart[i][item]},`
      }
    }
    console.log(log.slice(0,log.length-1)+'.');
  }
}

function removeFromCart(item) {
 for (var i = 0, l = cart.length; i < l; i++) {
   var v = Object.keys(cart[i])[0].toString();
   console.log(`v = ${v}`);
   if (item === v) {
    console.log("got it");
    cart.splice(i,1);
    return cart;
   }
 }
 console.log("That item is not in your cart.");
 return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
