var cart = new Array();

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
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var whatsInside;
  //return "Your shopping cart is empty.";
  if(!cart.length) {
    console.log(`Your shopping cart is empty.`);
  }
  else {
    whatsInside = "In your cart, you have ";
      for (var i = 0; i < cart.length; i++){
        var inCart = Object.keys(cart[i]);
        whatsInside += `${inCart[0]} at $${cart[i][inCart]}${(i+1 == cart.length ? '.' : ', ')}`;
      }
    }
  console.log(whatsInside);
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if(item === Object.keys(cart[i])[0]) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(card) {
  if(!card)
    console.log("We don't have a credit card on file for you to place your order.");
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
    cart = new Array();
  }
}
