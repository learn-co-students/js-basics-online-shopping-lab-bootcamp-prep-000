var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  // write your code here
  
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  var item = new Object({[itemName]: itemPrice});
  
  cart.push(item);
  
  console.log(itemName + " has been added to your cart.");
  return cart;
}

function viewCart() {
  // write your code here
  var cartItems = "In your cart, you have ";
  if (cart.length === 0) {
    cartItems = "Your shopping cart is empty.";
  }
  else if (cart.length == 1){
    cartItems = cartItems + 
    Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] +".";
  }
  else if (cart.length == 2){
    cartItems = cartItems +  
    Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + " and " +
     Object.keys(cart[1]) + " at $" + cart[1][Object.keys(cart[1])] + ".";
  }else if (cart.length >=3){
     
    for (let i = 0; i < cart.length; i++) {
      cartItems = cartItems + 
      Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])]; 
      
      if (i+1 < cart.length){
        cartItems = cartItems +  ", ";
      }
      if (i+2 == cart.length){
        cartItems = cartItems +  "and ";
      }
      
    }
    cartItems = cartItems + ".";
  }
  console.log(cartItems);
}

function total() {
  // write your code here
  var cartValue = 0;
  for (let i=0; i<cart.length; i++) {
    cartValue = cartValue + cart[i][Object.keys(cart[i])];
  }
  console.log("$" + cartValue);
  return cartValue;
}

function removeFromCart(item) {
  // write your code here
  var ind = 0;
  var found = false;
  
  for (let i=0; i<cart.length; i++) {
    console.log(cart[i]);

    if (cart[i].hasOwnProperty(item)){
      found = true;
      ind = i;
    }
  }
  
  if (found === true){
    //delete cart[i].item;
    cart.splice(ind, 1);
    console.log(cart);
    return cart;
  }   
  else{
    console.log("That item is not in your cart.");
    return cart;
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
  
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
    console.log(cart);
  }
}

addToCart('banana');
addToCart('orange');
addToCart('cherry');
//addToCart('banana');

//viewCart();

total();

removeFromCart('cherry');

placeOrder("");


