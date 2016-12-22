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
  var price;
  price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart[0] != null) {
    var list = [];
    for (var i = 0, l = cart.length; i < l; i++) {

      const itemName = Object.keys(cart[i])[0];
      const price = cart[i][itemName];
      list.push(itemName + " at $" + price);
  }
  console.log("In your cart, you have " + list.join(", ") + ".");
  //return cart;
}
else {
  console.log("Your shopping cart is empty.");
}
}

function removeFromCart(item) {
  while (cart.length != 0){
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) == false && i == cart.length - 1) {
    //  console.log('That item is not in your cart.');
      console.log(cart[i]);
    }
    else if (cart[i].hasOwnProperty(item) == true){
      cart = [...cart.slice(0,i),...cart.slice(i+1)];
      return cart;
    }
  }
}
console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
