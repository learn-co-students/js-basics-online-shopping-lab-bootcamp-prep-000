var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var itemName = item
    cart.push(new Object ({[itemName]: itemPrice}));
    console.log(itemName + ' has been added to your cart.');
  return cart;
  }

function viewCart() {
    if (cart.length === 0) {
      return console.log("Your shopping cart is empty.");
    }
    else {
      var cartItems = [];
        for (let i = 0; i < cart.length; i++) {
          let itemInCart = Object.keys(cart[i])[0];
          let priceInCart = cart[i][itemInCart];
            cartItems.push(`${itemInCart} at $${priceInCart}`);
      }
    }

    if (cartItems.length === 1) {
      cartItems;
    }
    else if (cartItems.length === 2) {
      cartItems = cartItems.join(" and ");
    }
    else {
      cartItems[cartItems.length - 1] = "and ".concat(cartItems[cartItems.length - 1]);
      cartItems = cartItems.join(", ");
    }
  return console.log(`In your cart, you have ${cartItems}.`)
}

function total() {
  var cartTotal = 0
    for (let i = 0; i < cart.length; i++) {
      let itemInCart = Object.keys(cart[i])[0];
      let priceInCart = cart[i][itemInCart];
        cartTotal = cartTotal + priceInCart
    }
    return cartTotal
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return console.log ("Sorry, we don't have a credit card on file for you.");
  }
  console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
