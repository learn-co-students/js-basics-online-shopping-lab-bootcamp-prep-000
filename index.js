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
    var price  = Math.floor(Math.random() * 100);
    cart.push({[item]: price});
    console.log(`${[item]} has been added to your cart.`);
    return cart;
}

function viewCart() {
    if (cart.length === 0) {
        console.log("Your shopping cart is empty.");
    } else {
        var itemsAndPrice = [];
        for(var i = 0; i < cart.length; i++) {
            var cartItems = Object.keys(cart[i])[0];
            var itemPrice = cart[i][cartItems];
            itemsAndPrice.push(` ${cartItems} at $${itemPrice}`);
        }
        console.log(`In your cart, you have${[itemsAndPrice]}.`);
    }
}

function removeFromCart(item) {
    var hasProp = false;
    for (var items in cart) {
        if(cart[items].hasOwnProperty(item)) {
            cart.splice(item, 1);
            hasProp = true;
        }
    }
    if (hasProp == false) {
        console.log("That item is not in your cart.")
    }
    return cart;
}

function placeOrder(cardNumber) {
    if (cardNumber !== undefined) {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart = [];
    } else {
        console.log("We don't have a credit card on file for you to place your order.");
    }
}
