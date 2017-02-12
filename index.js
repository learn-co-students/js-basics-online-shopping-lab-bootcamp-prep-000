var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
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

function addToCart(item) {
  var new_item = {
    [item]: Math.floor((Math.random() * 100) + 1)
  }
  cart.push(new_item)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length > 0){
    var text_array = [];
    for (var i = 0; i < cart.length; i++) {
      for(var obj in cart[i]) {
        text_array.push(`${obj} at \$${cart[i][obj]}`);
      }
    }
    console.log("In your cart, you have " + text_array.join(", ") + ".");
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(name) {
  let is_true = false;
  
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(name)) {
      is_true = true;
      cart.splice(i, 1);
    }
  }

  if(!is_true) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(number) {
  if (number) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
    cart = []
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
