var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let obj = {
   itemName: item,
   itemPrice: Math.ceil(Math.random()*100)
 }
 cart[cart.length] = obj
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var str = `In your cart, you have `;
  var i;
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
    for (i=0; i < cart.length; i++) {
      str += `${cart[i].itemName} at $${cart[i].itemPrice}`
      if (i == cart.length-2) {
        str += `, and `
      } else if (i != cart.length-1) {
        str += `, `
      } else {
        str += '.'
      }
    }
    return str
  }
}

function total() {
  // write your code here
  var tot = 0;
  var i;
  for (i=0; i<cart.length; i++) {
    tot += cart[i].itemPrice
  }
  return tot
}

function removeFromCart(item) {
  // write your code here
  var ind;
  var i;
  for (i=0; i<cart.length; i++) {
    if (cart[i].itemName == item) {
      ind = i;
    }
  }
  if (typeof(ind) == "undefined") {
    return 'That item is not in your cart.'
  } else {
    cart.splice(ind,1);
    return cart 
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var tot;
  if (cardNumber === undefined) {
    return `Sorry, we don\'t have a credit card on file for you.`
  } else {
    tot = total()
    cart = []
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
    
  }
}
