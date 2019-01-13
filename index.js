var cart = [];

function getCart(item) {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var price = Math.floor(Math.random()*100);
 cart.push(new Object({ itemName: itemName, itemPrice: price}));
 return (`${itemName} has been added to your cart.`);
}

function viewCart() {
  if (cart.length === 0) {
    return ("Your shopping cart is empty.");
  }
  
  if (cart.length ===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  
 var newStr = ""
 for(var i=0; i<cart.length; i++) {
   var currentItem = cart[i];
   if (cart.length-1 === i) {
      newStr += `and ${currentItem.itemName} at $${currentItem.itemPrice}.`;
  } else {
      newStr += `${currentItem.itemName} at $${currentItem.itemPrice}, `;
  }
}
 return "In your cart, you have " + newStr;
}

function total() {
  var totalVal = 0;
  for (var j=0; j<cart.length; j++) {
    totalVal += cart[j].itemPrice;
  }
return totalVal
}

function removeFromCart(item) {
  for (var k = 0; k < cart.length; k++) {
    if (cart[k].itemName === item) {
      cart.splice(k, 1);
      return cart
    }

  }
  return "That item is not in your cart."

}

function placeOrder(cardNumber) {
  // write your code here
}
