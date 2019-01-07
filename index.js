var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log([item] +" has been added to your cart.");
  return cart;
}

function viewCart() {

  if (cart.length === 0) {
   console.log("Your shopping cart is empty.");
 } else {
      var currentCart = [];
      for (var i = 0; i < cart.length; i++) {
        for (var item in cart[i]) {
            currentCart.push(item + " at $" + cart[i][item]);

          } if (currentCart.length < 2) {
            console.log("In your cart, you have " + currentCart + ".");
          } else if (currentCart.length === 2){
            console.log("In your cart, you have " + currentCart.join(" and ") + ".")
          } else {
            var currentCart = [];
              for (var i = 0; i < cart.length; i++) {
                if (i < cart.length - 1) {
                  for (var item in cart[i]) {
                    currentCart.push(item + " at $" + cart[i][item])
                  }
                } else {
                  for (var item in cart[i]) {
                    currentCart.push("and " + item + " at $" + cart[i][item]);
                  }
                }
              }
              console.log("In your cart, you have " + currentCart.join(", ") + ".");
        }
      }
    }
 }

function total() {
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        total += cart[i][item];
      }
    }
    return total;
}

function removeFromCart(item) {
  var object = 0;
  for (var i = 0; i < cart.length; i++) {
    if(Object.keys(cart[i])[0] === item) {
    object = i;
  }
}
  if (object > 0) {
    cart.splice(object, 1)
  } else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (!!cardNumber === false) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  return cart = [];
}
