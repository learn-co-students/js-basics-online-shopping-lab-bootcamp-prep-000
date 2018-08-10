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
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = { itemName: item, itemPrice: price}
  cart.push(item_object)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  else {
  var contents = "In your cart, you have"
  var itemsAndPrices = []
  for (var i = 0; i < cart.length; i++) {
    itemsAndPrices.push(cart[i]["itemName"] + " at $" + cart[i]["itemPrice"])
      }
  }
//for more than 1 item
  var lastItem
  var allItems = " "
  if (itemsAndPrices.length > 1){
   for (var i = 0; i < itemsAndPrices.length; i++)
     if (i === (itemsAndPrices.length-1)){ //if there's 2 objects, 0 and 1 index, and length = 1, then this will come back true for index 1
		lastItem = "and " + itemsAndPrices[i] 
     }
     else {
     	allItems = allItems + itemsAndPrices[i] + ", "	
     }
    return contents + allItems + lastItem + "."
   }
   else{
   return contents + " " + itemsAndPrices + "."  
   }
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total = total + cart[i]["itemPrice"]
  }
  return total
}

/*function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    if(cart[i]["itemName"] === item){
      cart = cart.splice(i, 1)
    }
  }
  return cart
}*/

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]["itemName"] === item) {
      cart.splice(i, 1);
      return cart
    }
  }
  return "That item is not in your cart."
}  

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var thatsIt = total()
    cart = []
    return "Your total cost is $" + thatsIt + ", which will be charged to the card " + cardNumber + "."
  }
}
