var cart = [];

function getCart() {
 return cart;
}
 
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemCart = { 
  itemName: itemName,
  itemPrice: Math.random() * (100 - 0) + 0
};
cart.push(itemCart);
return `${itemName} has been added to your cart.`;
}

function viewCart() {
  var messageArray = []
  var message = `In your cart, you have`
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
        messageArray.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`)
     } else if (cart.length === 2) {
       messageArray.push(` ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}`)
     } else {
       for(var i = 0; i < cart.length; i++){
        if (i < cart.length -1){
        messageArray.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
        } else messageArray.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}` )
}
}
return message + messageArray.toString() + `.`;
}

function total() {
    var sum = 0
    for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
    }
      return sum
 
}

function removeFromCart(item) {
 
  for (var i = 0; i < cart.length; i++)
  if (cart[i].itemName === item) {
     cart.splice(i,1)
     } 
     return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
 var cartTotal = total()
  if (cardNumber == null) {
    return `Sorry, we don't have a credit card on file for you.`
  } else { 
    cart.length = 0
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}
