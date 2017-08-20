var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObject = {[item]: Math.floor(Math.random() * 100) + 1}
 cart.push(itemObject);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length === 0){
      console.log("Your shopping cart is empty.");
  }
  else{
    var currentCart = "In your cart, you have ";
    for(let i = 0; i < cart.length; i++){
      let itemKey = Object.keys(cart[i]).join();
      let itemValue = cart[i][itemKey];
      if(cart.length === 1){
        currentCart = currentCart + itemKey + " at $" + itemValue + ".";
      }
      else if(cart.length === 2){
          if(i === 0){
            currentCart = currentCart + itemKey + " at $" + itemValue;
          }
          else{
            currentCart = currentCart + " and " + itemKey + " at $" + itemValue + ".";
          }
      }
      else{
        if(i === cart.length-1){
          currentCart = currentCart + "and " + itemKey + " at $" + itemValue + ".";
        }
        else{
          currentCart = currentCart + itemKey + " at $" + itemValue + ", ";
        }
      }
    }
    console.log(currentCart);
  }
}

function total() {
  let itemKey = Object.keys(cart[0]).join();
  let itemValue = cart[0][itemKey];//value of first item in cart array
  for(let i = 1; i < cart.length; i++){
    itemKey = Object.keys(cart[i]).join();
    itemValue = itemValue + cart[i][itemKey];
  }
  return itemValue;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");//if cart does not contain a matching item
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else if(Number.isInteger(cardNumber)){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
