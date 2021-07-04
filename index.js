var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 cart.push({itemName: item, itemPrice: price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length===0) {
    return `Your shopping cart is empty.`;
  } else {
    var cartDesc = '';
    for(var i=0; i<cart.length; i++) {
      var cartItemName = cart[i].itemName;
      var cartItemPrice = cart[i].itemPrice;
      if(cart.length===1) {
        cartDesc = cartDesc + `${cartItemName} at $${cartItemPrice}`;
      } else if(i===cart.length-1) {
        cartDesc = cartDesc + `and ${cartItemName} at $${cartItemPrice}`;
      } else {
        cartDesc = cartDesc + `${cartItemName} at $${cartItemPrice}, `;
      }
    }
    return `In your cart, you have ${cartDesc}.`;
  }
}

function total() {
  var totalValueCart = 0;
  for(var i=0; i<cart.length; i++) {
    var cartItemPrice = cart[i].itemPrice;
    totalValueCart = totalValueCart + cartItemPrice;
  }
  return totalValueCart;
}

function removeFromCart(item) {
  var oldCart = cart;
  for(var i=0; i<cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1);
    }
  }
  var newCart = cart;
  if(oldCart===newCart) {
    return `That item is not in your cart.`;
  } else {
    getCart();
  }
}

function placeOrder(cardNumber) {
  if(cardNumber===undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalValueCart = total();
    cart = [];
    return `Your total cost is $${totalValueCart}, which will be charged to the card ${cardNumber}.`;
  }
}
