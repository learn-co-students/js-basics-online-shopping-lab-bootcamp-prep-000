var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random()*100)+1);
 var itemObject = {itemName: item, itemPrice: price};
 cart.push(itemObject);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  
  var itemList = [];
  if(cart[0] === undefined) {
    return "Your shopping cart is empty.";
  }
  else {
    
    var tempString = [];
    
    for(var i = 0; i < cart.length; i++) {
     
     if(i > 0 && cart[i+1]===undefined) {
      tempString = ` and ${cart[i].itemName} at $${cart[i].itemPrice}`;
     }
     else {
      tempString = ` ${cart[i].itemName} at $${cart[i].itemPrice}`;
     }
      
      itemList.push(tempString);
    }
    
    return `In your cart, you have${itemList}.`;
  }
}

function total() {
  var totalAmount = 0;
  for(var i = 0; i < cart.length; i++) {
    totalAmount += parseInt(cart[i].itemPrice);
  }
  return totalAmount;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  }
      return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var tempString = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return tempString;
  }
}
