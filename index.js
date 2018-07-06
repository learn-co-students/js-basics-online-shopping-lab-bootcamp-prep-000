var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var items = {'itemName': item,
 'itemPrice':Math.round(Math.random()*100 + 1)
 };
 getCart().push(items);
   return `${items.itemName} has been added to your cart.`

}

function viewCart() {
 if(cart.length !== 0){
  var cartDescription = 'In your cart, you have '
  if ( cart.length >= 1 ) {
    cartDescription += `${cart[0].itemName} at $${cart[0].itemPrice}`
  }
  if ( cart.length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<cart.length -1; i++) {
      middleCartItemsDescription += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`
  }
    return `${cartDescription}.`
 }else{
   return 'Your shopping cart is empty.'
 }
}

function total() {
var total = 0;
 for(let i =0; i<cart.length;i++){
 total += cart[i].itemPrice;
 } 
 return total;
}
function placeOrder(cardNumber) {
 if (cardNumber !== undefined){
var Total = total();
cart = [];
  return `Your total cost is $${Total}, which will be charged to the card ${cardNumber}.`;
}else{
  return "Sorry, we don't have a credit card on file for you.";
}
}

function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}
function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOfItemToRemove,1)
}
function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove): 'That item is not in your cart.'
}