var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cart = getCart();
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100 + 1)})
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var cart = getCart();
  var statement = "In your cart, you have ";
  if(cart.length > 0){
    for (var i = 0; i < cart.length; i++){
      if(i === cart.length - 1 && cart.length > 1) {
        statement += "and ";
      }
      statement += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      if(i < cart.length - 1){
        statement += ", ";
      } else {
        statement += ".";
      }
    }
    return statement;
  } else {
    return "Your shopping cart is empty.";
  }
}

function total() {
  var cart = getCart();
  var total = 0;
  
  for(var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  cart = getCart();
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber){
    var cost = total();
    setCart([]);
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
