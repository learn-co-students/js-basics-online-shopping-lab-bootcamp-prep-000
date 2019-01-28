

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
  var i = 0
  
  myCart = getCart()
  if(myCart.length > 0 ) {
    for( i = 0; i < myCart.length; i++ ) {
    total += parseInt(myCart.itemPrice[i])
    }
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
