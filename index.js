var cart = {};

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
};

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var displayItem = {item : price};
  cart.push(displayItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
};

/*
function viewCart() {
  var itemNames = Object.keys(cart);
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
      for (var i = 0, l = itemNames.length; i < l; i++) {
        itemAtPriceArray.push(`${itemNames[i]} at ${cart[itemNames[i]]} `);
      }
      for (var i = 0, l = cart.length; i < l; i++) {
        return `In your cart, you have ${itemAtPriceArray}.`
      };
  };
};

function removeFromCart(item) {
  if () { // condition: item is in cart === true
   console.log("That item is not in your cart.")
  } else {
    //delete item from array
  }
  return cart;
};

//HINT: Check each object's key to see if it matches the parameter, then remove it if it matches.
//You might find hasOwnProperty to be useful.

function placeOrder(cardNumber) {
  if () { //condition: no argument is received
    return "We don't have a credit card on file for you to place your order."
  } else {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
  //empty the cart array at the end
};

*/
