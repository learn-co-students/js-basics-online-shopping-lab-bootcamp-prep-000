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
  var price = Math.floor(Math.random() * (100) + 1);
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.");
   }
   var list = [];
   for (var i = 0; i < cart.length; i++) {
     for (var item in cart[i]) {
       list.push(`${item} at \$${cart[i][item]}`)
     }
   }
   console.log("In your cart, you have " + list.join(", ") + ".");
 }

function removeFromCart(item) {
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        itemInCart = true;
        cart.splice(i,1);
      }
    }
      if (itemInCart === false) {
      console.log("That item is not in your cart.");
  }
}

function placeOrder(card) {
  var cardNumber = card;
  if (cardNumber === null || cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
