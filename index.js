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
 var itemObject = new Object();

 itemObject.itemName = item;
 itemObject.itemPrice = Math.floor(Math.random() * 101);

 cart.push(itemObject);
 return `${itemObject.itemName} has been added to your cart.`
}

function viewCart() {
  var text = "In your cart, you have"
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    text = text + ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
    //var oneItem = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}`;
    return text;
  }
  else if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        text = text + ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }else {
        text = text + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
      }
  }
  return text;
  }

}




function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var total = total + cart[i].itemPrice
  }
  return total;

}

function removeFromCart(item) {
  // write your code here
  var numOfItemsToBeRemoved = 0

    for (var i = 0; i < cart.length; i++){
      if (cart[i].itemName === item){
        cart.splice(i, 1)
        numOfItemsToBeRemoved += 1
      }
    }
    if (numOfItemsToBeRemoved === 0) {
      return "That item is not in your cart."
    }else{
      return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
   return "Sorry, we don't have a credit card on file for you."
 }else{
   var totalCost = total()
   cart = []
   return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
 }
}
