var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var ingredients = { 
   itemName: item,
   itemPrice: (Math.round(Math.random() * 100)),
 }
 cart.push(ingredients);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return("Your shopping cart is empty.")
  }
  else if (cart.length === 1) {
    var singleItem = cart[0]
    var singleItemName = singleItem.itemName
    var singleItemPrice = singleItem.itemPrice
    return "In your cart, you have " + singleItemName + " at $" + singleItemPrice + "."
    //return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
    var array =  [];
    for (var i = 0; i < cart.length-1; i++) {
      var item = cart[i]
      var itemName = item.itemName
      var itemPrice = item.itemPrice
      var string = itemName + " at $" + itemPrice
      array.push(string);
      // array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    } 
    var lastItem = cart[cart.length-1] 
    var lastItemName = lastItem.itemName
    var lastItemPrice = lastItem.itemPrice
    var join = array.join(", ")
    var res = "In your cart, you have " + join + ", and " + lastItemName + " at $" + lastItemPrice + "."
    return res
    // return `In your cart, you have ${array.join(", ")}, and ${lastItemName} at $${lastItemPrice}.`
  }
}
/* after defining lastItem, can define lastItemName and lastItemPrice
*/

function total() {
  var sum = 0;
  for (var x = 0; x < cart.length; x++) {
    var item = cart[x]
    var itemPrice = item.itemPrice
    sum = sum + item.itemPrice
   // sum += cart[x].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart
    } 
  } 
  return "That item is not in your cart."
} 

/* don't need an else if after the if. that means it will iterate through, return "That item is not in your cart" and stop after */

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } 
  else {
    var sum = total();
    cart = [ ];
    return "Your total cost is $" + sum + ", which will be charged to the card " + cardNumber + "."
  } 
}

