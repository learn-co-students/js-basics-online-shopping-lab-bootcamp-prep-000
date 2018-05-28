var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 //create object containing two key-value pairs
 var obj = {  
    itemName: item,  
    // generate random integer between 1 and 100
    itemPrice: Math.floor(Math.random() * (100 - 1) + 1) 
  };
  //add object to cart array
  cart.push(obj);
  //return 'item' has been added to your cart
  return `${item} has been added to your cart.`
}

function viewCart() {
  //if cart is empty, return following
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }
  //if cart length is 1, return following
  else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  //if cart length is 2, return following
  else if(cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  //otherwise, perform following
  else {
    //create blank array to store copy of cart
    var newCart = [];
    //get last item in cart and store it to variable lastItem
    var lastItem = cart.slice(-1)[0]; 
    //iterate through every item in cart except for last item
    for(let i = 0; i < cart.length-1; i++){
      //add following to newCart
      newCart += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    //return following
    return `In your cart, you have ${newCart}and ${lastItem.itemName} at $${lastItem.itemPrice}.`
  }
}

function total() {
  //create total variable to store running total
  var total = 0;
  //iterate through cart array
  for(let i = 0; i < cart.length; i++) {
    //add itemPrice of current item to total
    total += cart[i].itemPrice;
  }
  //once loop has finished, return total value
  return total;
}

function removeFromCart(item) {
  // iterate through cart array
  for(let i = 0; i < cart.length; i++) {
    // if itemName === item
    if(cart[i].itemName === item){
      // remove item from cart array
      cart.splice(i, 1);
      // return updated cart
      return cart;
    }
  }
  // else return 'that item is not in your cart'
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  //if no argument, print following
  if(cardNumber === undefined) {
    return "Sorry, we don\'t have a credit card on file for you.";
  }
  //otherwise
  else {
    // store total cost and credit card number in response variable
    var response = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    // empty cart array
    cart = [];
    // return response
    return response;
  }
}
