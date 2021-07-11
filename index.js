var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var grocery = {};
 grocery["itemName"] = item;
 grocery["itemPrice"] = Math.floor(Math.random()*100+1);
 cart.push(grocery);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var inYourCart = "In your cart, you have "
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  for(var i=0;i<cart.length;i++){
    inYourCart = inYourCart + `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if(i === cart.length - 2){
      inYourCart += ", and "
    }else if (i !== cart.length-1) {
      inYourCart += ", ";
    }
  }
  inYourCart += "."
  return inYourCart;
}

function total() {
  var totalCost = 0;
  for(var i = 0; i < cart.length ; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      itemInCart = true;
    }
  }
  if(itemInCart){
    return cart;
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  var totalCost = total();
  cart = [];
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
}
