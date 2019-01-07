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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
    console.log(`${item} has been added to your cart.`);
  return cart
  }

  function viewCart(){
    if (cart.length === 0) {
      //!cart.length
      console.log("Your shopping cart is empty.");
    } else {
      var itemList = [];
    for(var i = 0; i < cart.length; i++){
      var itemName = Object.keys(cart[i]);
      var itemPrice = cart[i][itemName];
      itemList.push(`${itemName} at $${itemPrice}`)
    }
      console.log(`In your cart, you have ${itemList.join(", ")}.`)
  }
}

function removeFromCart(removeItem) {
  var itemFound = false;
  for (var i = 0, l = cart.length; i < l; i++) {
    var items = cart[i];
    //debugger; to test for problems
    //will need to open html link at bottom of IDE in browser
    if (cart[i].hasOwnProperty(removeItem)) {
      itemFound = true;
      cart.splice(i, 1);
      //use splice instead of slice to edit the original array
    }
  }
      if (itemFound == false) {
    console.log("That item is not in your cart.");
    }
    return cart
  }

function placeOrder(creditCard) {
  if (!creditCard){
    //!creditCard checks to see if there is any value for the parameter
    //if no value then it returns the following statement
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  //if credit card has a value it skips to this part
   console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
   //total() is needed because it is interpolating a function
   cart = []
   //cart is now set to an empty array
  }
