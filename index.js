var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomPrice(min, max) {
  return Math.random() * (max - min) + min;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: getRandomPrice(0, 100) });
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if( cart.length === 0 ) {
    return `Your shopping cart is empty.`;
  }
  
  var msg = `In your cart, you have `;
  
  for( var i = 0; i < cart.length; i++ ) {
      if( cart.length > 1 && i === (cart.length - 1)  ){
        msg += `and ${cart[i].itemName} at $${cart[i].itemPrice}`;
      }else if( i === (cart.length - 1)  ){
        msg += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
      else {
        msg += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
  }
  
  return `${msg}.`;
}

function total() {
  if( cart.length === 0 ) {
    return 0;
  }
  
  var total = 0;
  for( var i = 0; i < cart.length; i++ ) {
    total += parseFloat(cart[i].itemPrice);    
  }
  
  return total;
}

function removeFromCart(item) {
  var itemRemoved = false;
  
  for( var i = 0; i < cart.length; i++ ) {
    if( cart[i].itemName === item  ) {
      itemRemoved = true;
      cart.splice(i, 1);
    }
  }

  if( itemRemoved ) {
    return cart;    
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  var totalAmount = total();
  
  if( cardNumber !== 'undefined' && totalAmount > 0 ) {
    cart.length = 0;
    return `Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`
  }
  return `Sorry, we don't have a credit card on file for you.`;
}
