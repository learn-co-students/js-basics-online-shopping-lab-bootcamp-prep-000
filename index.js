var cart = [];

function addToCart(itemToPurchase) {
  var price = Math.floor(Math.random() * 100);
  var object = {[itemToPurchase]: price};
    cart.push(object);
    console.log(`${itemToPurchase} has been added to your cart.`);
    return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
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

function viewCart() {
  var itemCount = "In your cart, you have ";
if(typeof(cart[0]) === "object") {
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      itemCount += `${item} at $${cart[i][item]}, `;

    }
  }
}else{
    console.log("Your shopping cart is empty.");
  }
  itemCount = itemCount.slice(0, -2);
  console.log(itemCount + ".");
}

function removeFromCart() {
  if(typeof(cart[0]) === "object") {
    cart.pop();
    return cart;
  }else{
    console.log("That item is not in your cart.");
  }
}

function placeOrder(creditCardNumber) {

  if(creditCardNumber !== 123) {
    console.log("We don't have a credit card on file for you to place your order.");
  }else{

    console.log(`Your total cost is $${total()}, which will be charged to the card 123.`);
    cart = [];
  }
}
