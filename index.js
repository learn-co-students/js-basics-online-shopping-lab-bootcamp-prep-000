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
  var price = Math.floor(Math.random()*100);
  cart.push( { [item]: price } );
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
    return cart;
  }

  var intro = ["In your cart, you have "];
  var reply = [];

  for (var i = 0, l = cart.length; i < l; i++ ) {
      var item = Object.keys(cart[i])
      var itemAndPrice = `${[item]} at $${cart[i][item]}`
      	reply.push(itemAndPrice)
  }
    var reply = reply.join(", ")

    console.log(intro + reply + ".");

}

function removeFromCart(removedItem) {
   var checker = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(removedItem)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      var checker = checker + 1;
      return cart
    }
  }
      if (checker == 0) {
       console.log("That item is not in your cart.")
     }

 }
//
// function removeFromCart(item) {
//   let itemInCart = false
//
//   for (let i = 0, l = cart.length; i < l; i++) {
//     if (cart[i].hasOwnProperty(item)) {
//       itemInCart = true
//       cart = cart.slice(0, i).concat(cart.slice(i + 1))
//     }
//   }
//
//   if (!itemInCart) {
//     console.log("That item is not in your cart.")
//   }
//
//   return cart
// }
function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
