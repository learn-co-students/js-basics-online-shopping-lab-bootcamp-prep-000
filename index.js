var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //Creates an item object out of the passed string with a
  //random int price from 1-100, and pushes it to the cart
  var cartItem = {};
  cartItem[item] = Math.floor(Math.random() * 99) + 1;
  cart.push(cartItem);
  //Logs cart addition and returns updated cart
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var tempString = `In your cart, you have `;   //used to output cart contents

  if(cart.length === 1) {
    //then add the single item info to the tempString and output to console
    tempString += Object.keys(getCart()[0])[0] + " at $" + getCart()[0][Object.keys(getCart()[0])[0]] + ".";
    console.log(tempString);
  }
  if(cart.length === 2) {
    //then add both items to the tempString and output to console
    tempString += Object.keys(getCart()[0])[0] + " at $" + getCart()[0][Object.keys(getCart()[0])[0]];
    tempString += " and " + Object.keys(getCart()[1])[0] + " at $" + getCart()[1][Object.keys(getCart()[1])[0]] + ".";
    console.log(tempString);
  }
  //If more than two items are in the cart, then loop through cart, outputting contents to console
  if(cart.length > 2) {
    //begin by adding the first item
    tempString += Object.keys(getCart()[0])[0] + " at $" + getCart()[0][Object.keys(getCart()[0])[0]];
    //loop through for all other items
    for (let i = 1; i < cart.length; i++) {
      //if this is the last item in the list
      if((i + 1) === cart.length) {
          //add the item to the tempString and log the cart contents to the console
          tempString += ", and " + Object.keys(getCart()[i])[0] + " at $" + getCart()[i][Object.keys(getCart()[i])[0]] + ".";
          console.log(tempString);
        }
      else {
        //otherwise add the item to the tempString and keep looping
        tempString += ", " + Object.keys(getCart()[i])[0] + " at $" + getCart()[i][Object.keys(getCart()[i])[0]];
      }
    }
  }
  //If we get this far, the cart is empty, so log cart status to console
  else {
    tempString = "Your shopping cart is empty.";
    console.log(tempString);
  }
}

function total() {
  var tempTotal = 0; //variable used to calculate the total of our cart
  //Step through the cart adding the price to the tempTotal
  for (let i = 0; i < cart.length; i++) {
    tempTotal += getCart()[i][Object.keys(getCart()[i])[0]];
  }
  return tempTotal;
}

function removeFromCart(item) {
  var isThere = 0;
  //Step through the cart checking for matching item
  for (let i = 0; i < cart.length; i++) {
    if(getCart()[i].hasOwnProperty(item)) {
      getCart().splice(i, i);
      isThere = 1;
    }
  }
  //If nothing was removed, log result to console
  if(isThere === 0) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  var tempTotal = total();
  if(typeof cardNumber != 'undefined') {
    console.log(`Your total cost is $${tempTotal}, which will be charged to the card ${cardNumber}.`);
    for (let i = 0; i < cart.length; i++) {
      cart.pop();
      }
  }
  else {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
}
