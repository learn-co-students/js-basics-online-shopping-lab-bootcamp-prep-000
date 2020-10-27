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
 
 let o = { itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1) };
 cart.push(o);
 return `${o.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1 ) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else {
    let myCart = "In your cart, you have";
    for (let i = 0; i < cart.length; i++) {
      if (i <= (cart.length - 2)) {
        myCart += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
      else {
        myCart += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
    }
    return myCart;
  }
  
}

function total() {
  // write your code here
  let totalValue = 0;
  
  for (let i = 0; i < cart.length; i++){
    totalValue += cart[i].itemPrice;
  }
  
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
  
  if (cart.length >= 1) {
    for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  }
  else {
    return "That item is not in your cart."
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
  
  if (cardNumber === undefined || cardNumber.length === 0) {
    return  "Sorry, we don't have a credit card on file for you."
  }
  else {
    let totalCost = total();
  cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
  
  
}
