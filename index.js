var cart;
cart=[];
function getCart() {
  return cart;
}
function addToCart(itemUserWantsToPurchase) {
  var itemPriceObject = {};
  var priceForThisItem = Math.floor(Math.random()*100);
  itemPriceObject[itemUserWantsToPurchase] = priceForThisItem;
  cart.push(itemPriceObject);
  console.log(`${itemUserWantsToPurchase} has been added to your cart.`);
  return cart;
}
function viewCart() {
  var outputSentence = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  for (var i = 0; i < cart.length; i++) {
    var itemName = Object.keys(cart[i]).toString();
    outputSentence.push(`${itemName} at $${cart[i][itemName]}`);

  }
  console.log("In your cart, you have " +  outputSentence.join(", ") + ".");
}
function removeFromCart(itemWishtoRemove) {
  for (var i = 0; i < cart.length; i++){
    if ( Object.keys(cart[i]).toString() === itemWishtoRemove ) {
      cart.splice(i,1)
      return cart;
    }
  }
  console.log('That item is not in your cart.');

}
function placeOrder(creditCardNum) {
  if (creditCardNum === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNum}.`);
    return cart = [];
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
