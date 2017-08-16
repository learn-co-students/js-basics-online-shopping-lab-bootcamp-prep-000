var cart = [];
var obj={}



function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item
 var itemPrice = Math.floor(Math.random() * 10)
 var obj = {[itemName]: itemPrice}
 cart.push(obj)
console.log(`${itemName} has been added to your cart.`);

console.log(cart);
console.log(cart.length);
return cart
}



function viewCart() {
var message = ""
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  }
  else {
    var i = 0
    var curObj = cart[i]
    var curObjKey = Object.keys(curObj)
    var curObjPrice = "$" + curObj[curObjKey]
    if (cart.length === 1) {
      console.log(`In your cart, you have ${curObjKey} at ${curObjPrice}.`);
    }
    else {
      if (cart.length === 2) {
        do {
          curObj = cart[i]
          curObjKey = Object.keys(curObj)
          curObjPrice = "$" + curObj[curObjKey]
          message = message + `you have ${curObjKey} at ${curObjPrice} `
          i++
        } while (i< cart.length - 1);
        curObj = cart[i]
        curObjKey = Object.keys(curObj)
        curObjPrice = "$" + curObj[curObjKey]
        console.log(`In your cart, ${message}and ${curObjKey} at ${curObjPrice}.`);
      }
      else {
    do {
      curObj = cart[i]
      curObjKey = Object.keys(curObj)
      curObjPrice = "$" + curObj[curObjKey]
      message = message + `${curObjKey} at ${curObjPrice}, `
      i++
    } while (i< cart.length - 1);
    curObj = cart[i]
    curObjKey = Object.keys(curObj)
    curObjPrice = "$" + curObj[curObjKey]
    console.log(`In your cart, you have ${message}and ${curObjKey} at ${curObjPrice}.`);
  }
}
}
}





function total() {
var sum = 0

  for (var i = 0; i < cart.length; i++) {
    var curObj = cart[i]
    var curObjKey = Object.keys(curObj)
    var curObjPrice = curObj[curObjKey]
    sum = sum + curObjPrice
  }
  return sum
}

function removeFromCart(item) {
var itemIndex = false
for (var i = 0; i < cart.length; i++) {
var curObj = cart[i]
  if (curObj.hasOwnProperty(item)) {
    itemIndex = true
    cart.splice(i,1)
  }
}
  if (!itemIndex) {
    console.log("That item is not in your cart.");

  }
  return cart
}



function placeOrder(cardNumber) {
  if (cardNumber === undefined ) {
    console.log( `Sorry, we don\'t have a credit card on file for you.`);
  }
  else{
    var PT = total()
    PT = "$"+ PT
    cart = []
    console.log(`Your total cost is ${PT}, which will be charged to the card ${cardNumber}.`);
  }
}
