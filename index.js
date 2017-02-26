var cart;

function setCart(newCart) {
  cart = newCart;
}

function getCart () {
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

function addToCart (item) {
  var price = Math.floor( Math.random() * 100 );
  var object = {}
  object[item] = price;
  cart.push(object)
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart () {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var str = "In your cart, you have ";
    for (var i=0; i < cart.length; i++) {
      for (var item in cart[i]) {
        str += item + " at $" + cart[i][item];
        if (i < cart.length-1) {
          str += ", ";
        }
      }
    }
    console.log(str + ".");
  }
}

function removeFromCart (name) {
  var contains = false;
  for (let i=0; i < cart.length; i++) {
    for (var item in cart[i]) {
      if (item === name) {
        cart.splice(i, 1);
        contains = true;
      }
    }
  }
  if (!contains) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(creditCardNumber) {
  if(arguments.length === 0)
    console.log("We don't have a credit card on file for you to place your order.");
  else {
    console.log(`Your total cost is $${total}, which will be charged to the card ${creditCardNumber}`);
    cart.splice(0);
  }
}
