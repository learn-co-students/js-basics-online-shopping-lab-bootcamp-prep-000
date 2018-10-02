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
  var newItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * Math.floor(100)) +1
  }
  cart.push(newItem);
  return `${item} has been added to your cart.`;
  }

function viewCart() {
  // write your code here
  var contents = "In your cart, you have ";
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  for (let i = 0; i < cart.length; i++){
    let current = cart[i];
    contents += `${current.itemName} at $${current.itemPrice}`;
    if (i === cart.length -2){
      contents += ", and ";
    }
    else if (i === cart.length -1){
      contents += ".";
    }
    else{
      contents += ", ";
    }
  }
  return contents;
}

function total() {
  // write your code here
  let value = 0;
  for (let i = 0; i < cart.length; i++){
    let current = cart[i];
    value += current.itemPrice;
  }
  return value;
}

function removeFromCart(item) {
  // write your code here
  
  for (let i = 0; i < cart.length; i++){
    let current = cart[i];
    if (current.itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
  
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    let finalString = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return finalString;
  }
}
