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
 
 var price = Math.floor(Math.random() * 100) + 1;
 var cartItem = {
   itemName: `${item}`,
   itemPrice: price
 }
 cart.push(cartItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  
  var cartMessage = ""
  var cartItemCount = getCart().length
  if(cartItemCount === 0) {
    cartMessage = "Your shopping cart is empty."
  } 
  else {
    cartMessage = "In your cart, you have "
    for(var i = 0; i < cartItemCount; i++) {
      if (i === 0) {
        cartMessage = cartMessage + cart[i].itemName + " at $" + cart[i].itemPrice
      } else if(i === 1 && cartItemCount === 2) {
        cartMessage = cartMessage + ", and " + cart[i].itemName + " at $" + cart[i].itemPrice
        } else if(i < cartItemCount-1 && cartItemCount > 2) {
          cartMessage = cartMessage + ", " + cart[i].itemName + " at $" + cart[i].itemPrice
          } else if(i === cartItemCount-1) {
              cartMessage = cartMessage + ", and " + cart[i].itemName + " at $" + cart[i].itemPrice
            }
    }
    cartMessage += ".";
  }
  return cartMessage
}

function total() {
  // write your code here

  var total = 0
  var cartItemCount = getCart().length
  for(var i = 0; i < cartItemCount; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here

  var itemCount = getCart().length;

  for(var i = 0; i < itemCount; i++) {
    if(item == cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    } 
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here

  var cost = total();
  
  if(cardNumber !== undefined) {
    cart = []
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  } 
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
