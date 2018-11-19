var cart = [];

function getCart() {
 return cart;
};

function setCart(c) {
  cart = c;
  return cart;
};


function addToCart(item) {
  var item = newItem(item);
  getCart().push(item);
  return `${item.itemName} has been added to your cart.`;
};

function newItem(itemName){
  return {
    itemName: itemName,
    itemPrice: Math.floor(Math.random(1, 100) * (100 - 1 + 1)) + 1
 };
};

function viewCart() {
var inCart = "In your cart, you have ";
  if (getCart().length === 0){
    return "Your shopping cart is empty."
  }

  if (getCart().length >= 1){
    inCart += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }

  if (getCart().length >= 2) {
    var secondCart = '';
    for (let i = 1; i<getCart().length-1; i++) {
      secondCart += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }

    var lastCart = `, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`

    secondCart += lastCart;
    inCart += secondCart;
  }
return `${inCart}.`
}

function total() {
  var totalCost = 0
  for (let i = 0; i < getCart().length; i++){
    totalCost += getCart()[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  var removedItem = toRemove(item)
  if (item = removedItem){
    var toRemoveIndex = cart.indexOf(removedItem)
    getCart().splice(toRemoveIndex, 1)
  }
  else{
    return "That item is not in your cart."
  }
}
function toRemove(item){
  var toRemove = ""
  for (let i = 0; i < getCart().length; i++){
    if(getCart()[i].itemName === item){
      toRemove = getCart()[i]
      }
  }
  return toRemove;
}


function placeOrder(cardNumber) {
  if (cardNumber == undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    var totalCost = total()
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }

}
