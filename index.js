var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {}
 obj["itemName"] = item;
 obj["itemPrice"] = Math.floor(Math.random()*100 + 1)
 cart.push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
   if(cart.length === 0 ) {
     return "Your shopping cart is empty."
   }
   else if (cart.length === 1) {
     return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`
   }
   else if (cart.length === 2) {
     return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}, and ${cart[1].itemName} at \$${cart[1].itemPrice}.`
   }
   else if (cart.length >= 3) {
     var str = `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}`
     for (let i = 1; i < cart.length-1; i++) {
       str += `, ${cart[i].itemName} at \$${cart[i].itemPrice}`
     }
     str += `, and ${cart[cart.length-1].itemName} at \$${cart[cart.length-1].itemPrice}.`
     return str;
   }
   
   
}

function total() {
  var tot = 0;
  for (let i = 0; i < cart.length; i++) {
    tot += cart[i].itemPrice;
  }
  return tot;
}

function removeFromCart(item) {
  var found = false;
  for (let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i,1)
      found = true;
      return cart
    }
  }
  if(!found) 
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(!cardNumber) 
    return "Sorry, we don't have a credit card on file for you."
  else {
    var str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return str
  }
}
