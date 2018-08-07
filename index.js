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
 var items = createCartItem(item)
 getCart().push(items)
 return `${items.itemName} has been added to your cart.` 
}

function viewCart() {
  // write your code here
  return getCart().length === 0 ? "Your shopping cart is empty.": cartDescription()
}

function total() {
  // write your code here
  var total = totalCost()
    
  return total
}

function removeFromCart(itemName) {
  // write your code here
  var itemRemoval = searchItemRemoval(itemName)
    return itemRemoval ? itemCartRemoval(itemName): itemNotInCart()
  
}

function placeOrder(ccNumber) {
  // write your code here
  if (arguments[0] == undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var totalCost = total()
    setCart ([])
    return `Your total cost is $${totalCost}, which will be charged to the card ${ccNumber}.`
  }
}

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function createCartItem (itemName){
  return{
    itemName:itemName, 
    itemPrice:getRandomInt(1, 100)
  }
}

function totalCost() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function cartDescription(){
  var cartDescription = 'In your cart, you have '
  if (getCart().length >=1) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >=2) {
    var cartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++){
      cartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${cartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${cartDescription}.`
}

function searchItemRemoval(itemName) {
  var itemToRemove 
  for (var i = 0; i < getCart().length; i++){
    if (getCart()[i].itemName === itemName) {itemToRemove = getCart()[i]}
  }
  return itemToRemove
}

function itemNotInCart (){
  return 'That item is not in your cart.'
}

function itemCartRemoval(itemToRemove){
  var itemToRemoveIndex = cart.indexOf(itemToRemove)
  getCart().splice(itemToRemoveIndex-1,1)
}