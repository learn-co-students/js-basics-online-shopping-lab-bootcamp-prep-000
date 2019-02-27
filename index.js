var cart = [];

function getCart() {
 return cart;
}
 
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemCart = { 
  itemName: itemName,
  itemPrice: Math.random() * (100 - 0) + 0
};
cart.push(itemCart);
return `${itemName} has been added to your cart.`;
}

function viewCart() {
  var messageArray = []
  var message = `In your cart, you have `
  messageArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`) 
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else { 
      if (cart.length === 1) {
        `${cart[0].itemName} at $${cart[0].itemPrice}`
     } else if (cart.length === 2) {
       `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}`
     } else if (cart.length === 3); {
       `${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}`
     } else {
       for(var i = 3; i < cart.length; i++) {
        messageArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}` )
        }
       }
      }
  }
return message + messageArray.toString() + `.`;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
