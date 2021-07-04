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
 var itemName = item;
 var itemPrice = Math.floor(Math.random()*100);
 cart.push(item = {
   [itemName]: itemPrice})
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var message = "";
  if(cart.length === 0){
    message ="Your shopping cart is empty.";
  }
  else{
    message = "In your cart, you have ";
    for(var i = 0; i < cart.length; i++){
      var items = Object.keys(cart[i]);
      var price = Object.values(cart[i]);
      if(cart.length === 1){
        message += `${items} at $${price}.`;
      }
      else if(i === cart.length-1){
        message += `and ${items} at $${price}.`;
      }
      else if(cart.length === 2){
        message += `${items} at $${price} `
      }
      else{
        message += `${items} at $${price}, `;
      }
    }
  }
  return console.log(message);
}

function total() {
  // write your code here
  var totalPrice = 0;
  for (var i=0; i < cart.length; i++){
    totalPrice += Number(Object.values(cart[i]));
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  //for loop to go through all items in the cart
  for (var i = 0; i < cart.length; i++){
    //If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
    if(i === cart.length-1){
          cart.pop();
          return cart;
        }
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  //if item not in cart print "That item is not in your cart." and return cart.
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0,cart.length);
  }else{
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
