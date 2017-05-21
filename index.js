
var cart = [];

function getCart() {
  return cart;
}


function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var newItem = { };
  newItem[item] = price;
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.")
   } else {
     var items = [];
     for (var i = 0; i < cart.length; i++) {
       for (var item in cart[i]) {
         items.push(item + " at $" + cart[i][item])
       }
     }
     console.log("In your cart, you have " + items.join(", ") + ".");
  }
 }


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


function removeFromCart(item) {
  if (cart.length === 0) {
    console.log("That item is not in your cart.")
  } else {
    cart.splice(0, cart.length)
  }
  return cart;
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart.splice(0, cart.length)
  return cart
}
