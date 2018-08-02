var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function addToCart(item) {
 // function to add a new item object to the shopping cart

 getCart().push({itemName: item, itemPrice: getRandomInt(1, 100) });
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // return the contents of the cart
  
  const cart = getCart();
  let contents = (cart.length ===0 ? "Your shopping cart is empty." :
    "In your cart, you have ");
    
  for (let i=0; i < cart.length; i++) {
    contents += `${cart[i].itemName} at \$${cart[i].itemPrice}`;
    
    if (i === cart.length - 1) {
      contents += ".";
    }
    else {
      contents += ", ";
      if (i >= cart.length - 2) contents += "and ";
    }
  }
    
  return contents;
}

function total() {
  // function to return the total value of the items in the cart
  const cart = getCart();
  let total = 0;
  
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // remove the specified item from the cart if it exists
  cart = getCart();
  let removed = false;
  
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1);
      removed = true;
    }
  }
  return (removed ? cart : "That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // Empty cart and process order
  
  cart = getCart();
  let returnString = "";
  
  if (cardNumber === undefined) {
    returnString =  "Sorry, we don't have a credit card on file for you.";
  }
  else {
    returnString = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
  }
  return returnString;
}
