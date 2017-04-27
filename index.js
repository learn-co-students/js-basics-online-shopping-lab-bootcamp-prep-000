var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(product){
  var price = Math.floor(Math.random() * 100);
  const myObject = {[product] : price};
  cart.push(myObject);
  console.log(`${product} has been added to your cart.`);
  return cart;
}

function viewCart(){
  //print each item in the cart and their cost
  if (!cart.length) {
    console.log('Your shopping cart is empty.');
  }

  else {
    const stuffInCart = [];
    for (var i = 0; i < cart.length; i++) {
      var myThing = Object.keys(getCart()[i]);
      stuffInCart.push(` ${myThing} at $${getCart()[i][myThing]}`);
      // `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
    }
    console.log(`In your cart, you have${stuffInCart}.`);
  }
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function hasItem(c, item) {
  for (var i = 0; i < c.length; i++) {
    var currentItem = getCart()[i];
    if (currentItem.hasOwnProperty(item)) {
      return true
    }
  }
  return false
}

function removeFromCart(item){
    if (hasItem(cart, item)){
      for (var i = 0; i < cart.length; i++) {
        var currentItem = getCart()[i];
        if (currentItem.hasOwnProperty(item)) {
          //delete cart[i];
          cart.splice(i, 1);
        }
      }
      return cart;
    }

    else {
      console.log('That item is not in your cart.');
    }
}


function placeOrder (creditCardNum){
    if (!creditCardNum) {
      console.log("We don't have a credit card on file for you to place your order.");
    }
    else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNum}.`);
    }
    cart = [];
  }
