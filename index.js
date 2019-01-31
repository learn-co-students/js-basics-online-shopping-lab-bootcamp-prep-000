a

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
 var itemPrice = Math.floor(Math.random() * 101)
 var myItems = {}
 var itemName = item
 Object.assign(myItems, {itemName, itemPrice})
 var result = `${item} has been added to your cart.`
 cart.push(myItems)
 return result
}

function viewCart() {
  // write your code here
  var myCart = {};
  myCart = getCart();
  var result = ""
  var i = 0;
  
  if(cart.length <= 0) {
    return "Your shopping cart is empty."
  } 
  
  //If cart has one item
  else if (cart.length === 1) {
    result = `In your cart, you have ${myCart[0].itemName} at $${myCart[0].itemPrice}.`
    return result
  } 
  
  // If cart has two items
  else if (cart.length === 2) {
    result = `In your cart, you have ${myCart[0].itemName} at $${myCart[0].itemPrice}, and ${myCart[1].itemName} at $${myCart[1].itemPrice}.`
    return result
  }
  
  // If cart has multiple items
  else {
    result = `In your cart, you have ${myCart[0].itemName} at $${myCart[0].itemPrice}, `
    for(i = 1; i < myCart.length -1; i++) {
      result += `${myCart[i].itemName} at $${myCart[i].itemPrice}, `
    }
    
    result += `and ${myCart[i].itemName} at $${myCart[i].itemPrice}.`
  }
  return result
  
} 

function total() {
  // write your code here
  var total = 0
  var myCart = {}
  var j = 0
  
  myCart = getCart()
  if(myCart.length > 0 ) {
    for( j = 0; j < myCart.length; j++ ) {
      total += myCart[j].itemPrice
    }
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var found = 0;
    for(var i = 0; i < cart.length; i++ ) {
      if(cart[i].itemName === item) {
        found = 1;
        cart.splice(i, 1)
      }
    }
    if( found === 0 ) {
      return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === null) {
    return "Sorry, we don\'t have a credit card on file for you."
  }
  
  else {
   cart = []
  var totalCost = total()
   var result = `Your total cost is ${totalCost}, which will be charged to the card ${cardNumber}.`
  }
  
}
