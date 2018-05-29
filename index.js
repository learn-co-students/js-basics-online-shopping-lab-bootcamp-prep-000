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
 var thisPrice = Math.floor(Math.random() * 100);
 var thisItem = {itemName: item, itemPrice: thisPrice};
 cart = [...cart, thisItem];
 return item + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  var inCart = "";
  if (cart.length===0) {
      return "Your shopping cart is empty.";
  }
  else {
    for (var i=0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        inCart = inCart + `${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else if (i === cart.length - 2) {
        inCart = inCart + `${cart[i].itemName} at $${cart[i].itemPrice}, and `;
      }
      else {
        inCart = inCart + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    return "In your cart, you have " + inCart;
  }
}

function total() {
  // write your code here
  var totalPrice = 0;
  for (var i=0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      return cart.splice(i, 1);
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var totalCost = total();
    cart = [];
    return "Your total cost is $" + totalCost + ", which will be charged to the card " + cardNumber + ".";
  }
  return "Sorry, we don't have a credit card on file for you.";
}
