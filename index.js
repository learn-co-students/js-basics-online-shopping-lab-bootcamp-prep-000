var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// A note for all of these functions: it's better to call getCart() instead of calling cart directly.

function addToCart(item) {/*Note: The instructions say to look into Math.floor(), but Math.ceil() is more appropriate for this. */
  
  cart.push({ itemName: `${item}`, itemPrice: Math.ceil(Math.random()*100) }); 
  // Add the item to the cart, choose a random price from $1 <= price <= $100
  /* That whole expression gets a random number in the range 0 <= number < 1, multiplies it by 100, and rounds it up to the next integer. */
  /* Remember: `${template literals}` are only needed for variables, not strings and numbers */
  
  return `${item} has been added to your cart.`;
}

function viewCart() { //List the items in the cart and their prices
  var cartDescription = [];
  
  if(cart.length === 0){ //The cart is empty
    cartDescription = "Your shopping cart is empty.";
  }
  else if (cart.length === 1){ //The cart has exactly one item in it
    cartDescription = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else{ //The cart has two or more items
    for(let i = 0; i < cart.length; i++) { //Cycle through the items
      if(i === 0){ //First item
        cartDescription = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
      else if(i === cart.length - 1) { //Last item
        cartDescription += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else { //The other items
        cartDescription += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
    }
  }
  return cartDescription; //return the list of items and prices
}

function total() { //Add up the cost of each item and return the total
  var totalCost = 0;
  
  for(let i = 0; i < cart.length; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) { //Search the cart for an item and remove it
  var cartInitialLength = cart.length;
  
  for(let n = 0; n < cart.length; n++){ //Cycle through the cart
    //console.log(`cart[${n}].itemName: ${cart[n].itemName}`);
    
    if (cart[n].itemName === item){ //The item was found!
      cart.splice(n,1); //Remove the item if it is found in the cart
      n--; /* <--- I added this statement so that the function could remove two or more of the same item. */
      //console.log(cart);
      //console.log(`n = ${n}, cart.length = ${cart.length}`);
      }
    else{
      //Do nothing; this part may not be needed
    }
  }
  
  if(cart.length === cartInitialLength){ //The cart's length did not change because the item was neither found in it nor removed from it.
    return "That item is not in your cart.";
  }
  else{
  return cart; //Return the updated cart;
  }
}

function placeOrder(cardNumber) {
  //console.log(`The cardNumber is ${cardNumber}`);
  var totalCost = total();
  //console.log(totalCost);
  
  if(cardNumber === undefined){
    //console.log("No credit card number was received");
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    cart.splice(0);
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
    //console.log(cart);
    //console.log(cart.length);
  }
}
/*Final note: next time, use console.log() on the variables when debugging these functions.*/