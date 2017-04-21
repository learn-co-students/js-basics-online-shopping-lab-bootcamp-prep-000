var cart;

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
  var num = Math.random()*100;
  var price = Math.floor(num);
  var object = {};
  object[item] = price;
  cart.push(object);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var array = [];
  if (cart.length>0){
    for(var i=0; i<cart.length; i++) {
      var cartNamesi = Object.keys(cart[i])
      array.push(` ${cartNamesi} at $${cart[i][cartNamesi]}`)
        }
    console.log(`In your cart, you have${array}.`)
  }
  if (cart.length===0) {
    console.log(`Your shopping cart is empty.`)
  }
}

function removeFromCart(item) {
  for(var i=0; i<cart.length; i++) {
    var cartNamesi = Object.keys(cart[i])
      if (cart[i].hasOwnProperty(item)) {
      cart.pop()
    }
  }
    if (cart.length===0) {
      console.log(`That item is not in your cart.`)
    } else {
      console.log(`That item is not in your cart.`)
    }
  }

  function placeOrder(card) {
    if(!card) {
      console.log(`We don't have a credit card on file for you to place your order.`)
    }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
    cart = [];
  }
