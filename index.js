var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

/**
 * This function creates the item object and adds the item to the cart
**/
function addToCart(item) {
 /**
  * This function sets a price, a random number between 0 and the input max number
 **/
 function setPrice(max){
   return Math.floor(Math.random() * Math.floor(max));
 }


  //This creates an object, itemAdded, which contains the item name and sets a price
  var itemAdded = {
    itemName: item,
    itemPrice: (setPrice(99) + 1) //This function call gets a number between 0-99 then adds 1 to make it 1-100
  }

  cart.push(itemAdded); //Add the item to the cart
  return `${itemAdded.itemName} has been added to your cart.` //Return string stating success
}

/**
 * This function looks at the cart and recites each item and it's price.
**/
function viewCart() {
  var numItems = cart.length;
  var lastItem = cart.length - 1;
  var multipleItems = "";

  switch(numItems){
    case 0:
    //return sentence with empty cart
    return `Your shopping cart is empty.`;

    case 1:
    //return sentence with single item
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;

    case 2:
    //return sentence with two items
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`

    default:
      //Loop all items except last item and add them to multipleItems for sentence
      for(let i = 0; i < lastItem; i++){
        multipleItems += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      //Add the vernacular for the final sentence to multpipleItems
      multipleItems += `and ${cart[lastItem].itemName} at $${cart[lastItem].itemPrice}.`
      //Return final sentence
    return `In your cart, you have ${multipleItems}`;
  }
}

/**
 * This function adds the prices of every item in the cart
**/
function total() {
  var totalPrice = 0;
  for(let i = 0; i < cart.length; i++){
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

/**
 * This function removes an item from the cart
**/
function removeFromCart(item) {
  //Boolean to check whether or not the item is in the cart
  var itemPresent = false;

  //loop each item in the cart
  for(let i = 0; i < cart.length; i++){
    //check if the itemName is the same as the item we want to remove
    if(cart[i].itemName === item){
      cart.splice(i, 1); // Remove the item
      itemPresent = true; // let us know that the item was in the cart
    }
  }
  //If item was not in the cart let us know, otherwise return the cart
  if(!itemPresent){
    return `That item is not in your cart.`
  } else {
    return cart;
  }
}

/**
 * This function empties the cart and cahrges the customer
**/
function placeOrder(cardNumber) {
  var cost = total();
  for(let i = 0; i < cart.length; i++){
    cart.shift();
  }
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
