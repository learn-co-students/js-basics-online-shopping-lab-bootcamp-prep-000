var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObj = {
   'itemName': item,
   'itemPrice': Math.floor(Math.random() * 100)
 }
 cart.push(itemObj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else {
  var inYourCart = `In your cart, you have`
    for (var i = 0 ; cart.length > i ; i++) {
      if (cart.length === 1) {
        inYourCart += " " + cart[i].itemName+ " " + "at" + " " + "$" + cart[i].itemPrice + "." 
      }
      else if (i != cart.length - 1) {
        inYourCart += " " + cart[i].itemName + " " + "at" + " " + "$" + cart[i].itemPrice + ","
     } else {
      inYourCart += " " + "and" + " " + cart[i].itemName + " " + "at" + " " + "$" + cart[i].itemPrice + "."
    }
    }
  }
  return inYourCart  
  }

function total() {
  var total = 0
  for (var i = 0; cart.length > i; i++) {
     total += parseInt(cart[i].itemPrice)
  }
  return total 
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
