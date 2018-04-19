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
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
