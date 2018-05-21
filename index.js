var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var cartObject = {
    itemName: item,
    itemPrice: price
  };
  
  cart.push(cartObject);
  return(`${item} has been added to your cart.`);
}

function viewCart() {
  var array = [];
  var newArray = [];
  var inYourCart = "In your cart, you have";

  for (let i = 0; i < cart.length; i++)
  {array.push(cart[i].itemName + " at $" + cart[i].itemPrice)}
  
  for (let i = 0; i < cart.length - 1; i++)
  {newArray.push(cart[i].itemName + " at $" + cart[i].itemPrice)}

  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  
  else if (cart.length === 1) {
    return `${inYourCart} ${array}.`;
  }
  
  else if (cart.length === 2) {
    return `${inYourCart} ${array.join(", and ")}.`;
  }
  
  else {
    return `${inYourCart} ${newArray.join(", ")}, and ${array.slice(-1)}.`;
  }
}  

function total() {
  var array = [];
  var myTotal = 0;
  
  for (let i = 0; i < cart.length; i++)
  {array.push(cart[i].itemPrice);
  myTotal += array[i];}
  return myTotal;
}
 
function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
  
  if (item === cart[i].itemName) {
  cart.splice(i, 1);
  return cart;}
  }
  
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
var myCost = total();
cart = [];

  if (cardNumber !== undefined) {
  return `Your total cost is $${myCost}, which will be charged to the card ${cardNumber}.`;
  }
  else return `Sorry, we don't have a credit card on file for you.`;
}