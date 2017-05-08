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

function getCart() {
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.")

  return cart;
}

function viewCart(){
  let list = [];
  if(cart.length === 0) {
  console.log("Your shopping cart is empty.");
  }

  else {
    for (var i = 0, l = cart.length; i < l; i++) {
    let item = Object.keys(cart[i])[0];
    let object = cart[i];
    let price = object[item];
      list.push(` ${item} at $${price}`);
      }
      console.log(`In your cart, you have${list}.`);
  }
}

function removeFromCart(name) {
  var itemCart = false;
  for(var i = 0; i < cart.length; i++) {
      if(cart[i].hasOwnProperty(name)) {
        var itemCart = true;
        cart.splice(i,1);
      }
    }
      if(!itemCart) {console.log("That item is not in your cart.");
        }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for(var i = 0; i < cart.length; i++) {
        cart.splice(i,1);
      }
  }
}
