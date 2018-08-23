var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.random()*100 + 1;
 cart.push({ itemName: `${item}`, itemPrice: price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartDescription = [];
  // cartDescription stores item description and price pushed in.
  
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  if (cart.length === 1) {
    cartDescription.push(`${cart[0].itemName} at $${cart[0].itemPrice}`);
    return `In your cart, you have ${cartDescription}.`;
  } 
  
  if (cart.length === 2) {
    cartDescription.push(`${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}`); 
    return `In your cart, you have ${cartDescription}.`;
  }
  
  if (cart.length > 2) {
    for (var i = 0; i < cart.length; i++) {
        if (i < (cart.length - 1)) {
        cartDescription.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
      } if (i === (cart.length - 1)) {
        cartDescription.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`); 
      } 
    } 
    return `In your cart, you have${cartDescription}.`;
  }
} 

function total() {
  var cartTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    cartTotal = cartTotal + cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  var newCartLength = cart.length; //var newCartLength used to determine if a deletion occurred.
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1);
    }
  }
  newCartLength = cart.length;
  if (newCartLength === cart.length) {
    return `That item is not in your cart.`;
    }
  else {
    return cart;
  }

}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  }
  else {
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
