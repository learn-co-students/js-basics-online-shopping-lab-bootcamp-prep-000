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

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random()*100)
  cart.push({[item]:price})
  console.log(item + ' has been added to your cart.');
  return cart
}

function viewCart(){
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var pairs = ''
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        pairs = pairs + item + ' at $' +cart[i][item]
        if (i < cart.length -1){
        	pairs = pairs + ', '
		    }
      }
    }
    console.log(`In your cart, you have ${pairs}.`);
  }
}

function removeFromCart(item){
  var items = []
  var match = null
  for (var i = 0; i < cart.length; i++) {
    for (var thing in cart[i]) {
      if (thing === item) {
        match = item
        cart.splice(i,1)
      }
      items[i] = thing
    }
  }
  if (match === null) {
    console.log('That item is not in your cart.');
  } else {
    return cart
  }
}

function placeOrder(cardNumber){
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = []
}
