var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({ "itemName": item, "itemPrice": price });
  return item + " has been added to your cart.";
}

function viewCart() {
  var itemsInCart = "In your cart, you have ";
  if( cart.length === 0 ) {
    return "Your shopping cart is empty.";
  }
  else {
    for( let i = 0; i < cart.length; i++) {
      if( cart.length === 1 ) {
        itemsInCart += cart[i].itemName + " at $" + cart[i].itemPrice + ".";
      }
      else if( i !== cart.length-1 ) {
        itemsInCart += cart[i].itemName + " at $" + cart[i].itemPrice + ", ";
      }
      else {
        itemsInCart += "and " + cart[i].itemName + " at $" + cart[i].itemPrice + ".";
      }
    }
    return itemsInCart;
  }
}

function total() {
  var totalValueInCart = 0;
  for( let i = 0; i < cart.length; i++ ) {
    totalValueInCart += parseInt(cart[i].itemPrice);
  }
  return totalValueInCart;
}

function removeFromCart(item) {
  for( let i = 0; i < cart.length; i++ ) {
    if( item ===  cart[i].itemName ) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if( cardNumber !== undefined ) {
    var cartTotal = total();
    cart = [];
    return "Your total cost is $" + cartTotal + ", which will be charged to the card " + cardNumber + ".";
  }
  else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
