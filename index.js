var cart = [];

function setCart(newCart) {
  cart = newCart;
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
  var text = "";

  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for(let i = 0; i < cart.length; i++) {
      var cartItem = getCart()[i];

      for(var x in cartItem) {
        text += x + " at $" + cartItem[x] + (i < cart.length-1 ? ", " : ".");
      }
    }
      console.log("In your cart, you have " + text);
    }
  }

  function removeFromCart(item) {

    for(let i = 0; i < cart.length; i++) {
        var cartItem = Object.keys(getCart()[i])

        if(getCart()[i].hasOwnProperty(item))
        var index = i
        else
        index = null
      }

    if(index == null) {
      console.log("That item is not in your cart.")
   } else {
      cart.splice(index, 1)
  }
     return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([]);
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }

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
