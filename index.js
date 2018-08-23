var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newCart = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
 cart.push(newCart);
 return `${item} has been added to your cart.`;
 
}

function viewCart() {
  var n = cart.length;
  var m = 0;
  var cartString = "In your cart, you have";
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else { 
    while(n > 0) {
      cartString = cartString + ` ${cart[m].itemName} at $${cart[m].itemPrice}`;
      m++;
      n--;
      if (n === 1) {
        cartString = cartString + ", and";
      } else if(n > 0) {
        cartString = cartString + ",";
      } else {
        cartString = cartString + ".";
      }
    }
  }  
  return cartString;
}

function total() {
  var n = cart.length;
  var m = 0; 
  var myBill = 0;
  while (n > 0) {
    myBill = myBill + cart[m].itemPrice;
    m++;
    n--;
  }
  return myBill;
}

function removeFromCart(item) {
  var n = cart.length;
  var m = 0; 
  while (n > 0) {
    if(cart[m].itemName === item) {
      cart.splice(m,m);
      return cart;
    }
    m++;
    n--;
  }
  return "That item is not in your cart.";
  
}

function placeOrder(cardNumber) {
  var n = cart.length;
  var m = 0; 
  var tot = total();
  if(cardNumber) { 
    while (n > 0) {
      cart.pop()
      n--;
    }
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don\'t have a credit card on file for you."
  }  
}
