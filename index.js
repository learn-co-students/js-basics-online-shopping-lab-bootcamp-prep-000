
var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var b = Math.floor(Math.random()*100)
  var d = {itemName: item, itemPrice: b};
  cart.push(d);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var a = ""
    for (let i=0;i<cart.length - 1;i++) {
     a = `${a}${cart[i].itemName} at $${cart[i].itemPrice}, `
    } return `In your cart, you have ${a}and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return `In your cart, you have ${items[1]} at $${prices[1]}.`
  }
}

function total() {
  var c = 0 
  for (let i=0;i<cart.length;i++) {
    c = c + cart[i].itemPrice
  }
  return c
}

function removeFromCart(item) {
  var cart2 = cart
  for (let i=0; i < cart.length; i++) {
   if (cart[i].itemName === item) {
     cart.splice(i,1)
     return cart
   } else { }
  } 
  //return ((cart === cart2) ? `That item is not in your cart.` : null)
  if (cart === cart2) { return `That item is not in your cart.`
  } else { }
}


function placeOrder(cardNumber) {
  if (!isNaN(cardNumber)) {
    var c = total()
    cart = []
    return `Your total cost is $${c}, which will be charged to the card ${cardNumber}.`
  } else {return `Sorry, we don't have a credit card on file for you.`}
}
