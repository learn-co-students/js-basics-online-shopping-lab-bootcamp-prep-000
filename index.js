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
  let newItem = {
    itemName: `${item}`,
    itemPrice: Math.floor(Math.random() * Math.floor(100))
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var inYourCart = "In your cart, you have ";
  if (cart.length > 1) {
    for ( let i = 0; i < cart.length - 1; i++) {
    inYourCart += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    inYourCart += `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  }
  else if (cart.length === 1) {
    inYourCart += `${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  }
  else { 
    return "Your shopping cart is empty.";
  }
	return inYourCart;
}

function total() {
  // write your code here
  var totalCost = 0;
  for (let i = 0; i <= cart.length-1; i++) {
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
let cartTemp = cart.length;
for(let i = cart.length-1;i >= 0;i--) {
  if(item === cart[i].itemName) {
    cart.splice(i,1);
    }
}
  if(cart.length === cartTemp) {
    return "That item is not in your cart.";
  }
  else { return cart;}
  }


function placeOrder(cardNumber) {
  // write your code here
  if(isNaN(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var sum = total()
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
  }
}
