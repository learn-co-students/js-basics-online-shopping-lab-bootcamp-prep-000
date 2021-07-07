var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100);
 let newObj = {itemName:item, itemPrice:price};
 cart.push(newObj);
 return `${item} has been added to your cart.`;
 
}


function viewCart() {
var cartItems = [];
var string = "In your cart, you have ";
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
     return string + `${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return string + `${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    for (var i = 0; i < cart.length; i++) {
      cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
    var partialArray = cartItems.slice(0, cartItems.length - 1);
    console.log(partialArray)
    var partialReturn = string + partialArray.join(", ");
    console.log(partialReturn)
    var lastItem = " and " + cartItems[cartItems.length - 1] + ".";
    console.log(lastItem)
    return partialReturn + lastItem;
    
  } 
}

function total() {
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
  totalCost = totalCost + cart[i].itemPrice;
 }
return totalCost;
}

function removeFromCart(item) {
  var searchResult;
  for (var i=0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      searchResult = cart[i];
    }
  }
  if (searchResult) {
    var indexOfSearchResult = cart.indexOf(searchResult);
    cart.splice(indexOfSearchResult, 1);
  } else {
    return "That item is not in your cart.";
  } 
}

function placeOrder(cardNumber) {
  if (arguments[0] === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var sumToCharge = total();
    setCart([]);
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`;
  }
}