var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100)
  var itemRep = { [item] : itemPrice}
  cart.push(itemRep)
  console.log( item + " has been added to your cart.")
  return cart
}

function viewCart() {
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for(var i = 0; i < cart.length; i++){
      for(var item in cart[i]){
        items.push(item + " at $" + cart[i][item])
      }
    }
    if(cart.length === 1){
      console.log("In your cart, you have " + items.join(", ") + ".");
    } else if(cart.length === 2){
      console.log("In your cart, you have " + items.join(" and ") + ".");
    } else{ //this is where I'm working - how to add "and" into the mix
      var finalString = "In your cart, you have "
      //console.log("In your cart, you have " + items[0] + ", " + items[1] + ", and " + items[2] + ".")
      for(var a = 0; a < items.length; a++){

          if(a === items.length - 2){
          finalString += items[a] + ", and "
        } else if(a === items.length - 1){
          finalString += items[a] + "."
        } else {
          finalString += items[a] + ", ";
        }
      }
      console.log(finalString)
    }
  }
}

function total() {
  // iterate through cart array and return total value of items in cart
  var total = 0;
  for(var i = 0; i < cart.length; i++){ //iterate through cart elements
    for(var item in cart[i]){ //iterate through items in cart at element
      total += cart[i][item]; //add price value
    }
  }
  return total;
}

function removeFromCart(item) {
  var notIn = true; //initialize boolean variable

  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){ //search cart for item
      notIn = false;
      cart.splice(i,1); //remove item from cart at array element i
    }
  }
  if(notIn){
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber !== undefined){
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
    cart.length = 0;
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
