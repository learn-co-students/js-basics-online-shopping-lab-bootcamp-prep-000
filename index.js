var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = generateCartItem(item);
  getCart().push(item);
  return `${item.itemName} has been added to your cart.`;

}

function generateRandomInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function generateCartItem (itemName) {
 return {
   itemName:itemName,
   itemPrice: generateRandomInteger(1,100)
 }
}
  

function viewCart() {
return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription();
}

function generateCartDescription () {
  var cartDescription = 'In your cart, you have'
  if (getCart().length >= 1) {
     cartDescription += ` ${getCart()[0].itemName} at $${getCart()[0].itemPrice}`   
  }  
    if (getCart().length >= 2) {
    var middleCartDescription = '';
    for (let i = 1; i < getCart().length - 1; i++) {
       middleCartDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription +=`${middleCartDescription}, and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}`
  }
  return `${cartDescription}.`
}


function total() {
  //  ITERATE through the ARRAY and RETURN total item price
  let totalItemPrice = 0;
  for (let i = 0; i < getCart().length; i++) {
    totalItemPrice += getCart()[i].itemPrice;
  }
  return totalItemPrice;
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}

function searchCartForItemToRemove (itemName) {
  let searchResult = ""
  for (let i=0; i < getCart().length; i++) {
    if (itemName === getCart()[i].itemName) {
      searchResult = getCart()[i];
    }
  }
   return searchResult;
} 

function removeItemFromCart (itemToRemove) {
  let indexOfItemToRemove = getCart().indexOf(itemToRemove);
  getCart().splice(indexOfItemToRemove,1);
}

function notifyUserThereIsNoItemToRemove () {
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // accepts ONE ARGUMENT 
  // If (NO ARGUEMENT) {Sorry, we don't have a credit card on file for you.
  //If (cardNumber) {Empty getCart(); return `Your total cost is ${total()}, which will be charged to the card ${cardNumber}.
  if (cardNumber === undefined) {
   return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    let sumToCharge = total();
    getCart().splice(0,getCart().length);
   return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`;
}
}
