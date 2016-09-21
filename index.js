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
  var price = Math.floor(Math.random() * 100);
  //adds item and price as an object to cart then console.log...., and return cart.
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart () {
  // if(!cart.length) if there isn't anything in your cart then console.log ...
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else
  {
    var itemInCart = [];
    for (let i = 0, c = cart.length; i < c; i++) {
      for (var item in cart[i]) {
        itemInCart.push(`${item} at $${cart[i][item]}`);
      }
    }
    console.log(`In your cart, you have ${itemInCart.join(', ')}.`);
  }
}

function removeFromCart(itemName) {
  for ( let i = 0; i < cart.length; i++) {
    var addItem = cart[i].hasOwnProperty(itemName);
    if (addItem) {
      cart.splice(i, 1);
    }
  }
  if (!addItem){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(ccardNumber) {
  if(ccardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccardNumber}.`);
    cart = [];
  }
  return cart;
}
