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
  for (var i = 0; cart.length > i; i++) {
      if (cart[i].itemName === item) {
      var cartChanged = cart.splice(i, 1)
      }
      }
      if (cartChanged) {
        return cartChanged
      } else { 
        return `That item is not in your cart.`
      }
}

function placeOrder(cardNumber) {
   var total = 0
  for (var i = 0; cart.length > i; i++) {
     total += parseInt(cart[i].itemPrice)
  }
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    cart = []
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.` 
  }
}
