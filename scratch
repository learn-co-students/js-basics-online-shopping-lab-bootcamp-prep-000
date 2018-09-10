var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push( { itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100 + 1) } )
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
    var string = "In your cart, you have"
    var index = 0 
    while (index <= cart.length - 2) {
      string += ` ${cart[index].itemName} at $${cart[index].itemPrice},`
      index += 1
    }
    string += ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    return string 
  }
}

function total() {
  var index = 0
  var sum = 0 
  while (index < cart.length) {
    sum += cart[index].itemPrice
    index += 1 }
  return sum
}

function removeFromCart(item) {
 for  (let index = 0; index < cart.length; index++) {
  if (cart[index].itemName === item) {
    cart.splice(index, 1)
    return cart 
  }
  else {
    return "That item is not in your cart."
  } 
 }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
   return "Sorry, we don't have a credit card on file for you."
  }
   else {
     var t = total();
     cart.splice(0, cart.length);
     return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`; 
   }
}
