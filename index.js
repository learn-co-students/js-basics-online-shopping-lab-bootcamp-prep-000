var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newAdd = {[item]: Math.floor(Math.random()*100)}
 cart.push(newAdd)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var retString = ""
  if (cart.length === 0){
    retString = "Your shopping cart is empty.";
  } else {
    retString = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++) {
      var tempKey = Object.keys(cart[i])[0]
      retString += `${[tempKey]} at $${cart[i][tempKey]}`;
      if (i === cart.length-1) {
        retString += ".";
      } else if (i === cart.length -2 ) {
        if(cart.length >2) {
          retString += ",";
        }
        retString += " and ";
      } else {
        retString += ", ";
      }
    }
  }
  console.log(retString)
}

function total() {
  var tempSum = 0
  for (let i = 0; i < cart.length; i++){
    var tempKey = Object.keys(cart[i])[0]
    tempSum += cart[i][tempKey]
  }
  return tempSum
}

function removeFromCart(item) {
  var initLen = cart.length
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
    }
  }
  if (cart.length === initLen){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
