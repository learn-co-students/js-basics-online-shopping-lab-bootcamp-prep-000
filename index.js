var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1)
  console.log(itemPrice)
  var newObject = Object.assign({},{'itemName':itemName},{'itemPrice':itemPrice})
  cart.push(newObject)
  return `${itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.' 
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    var printString=`In your cart, you have`
    for (var i=0; i<cart.length; i++) {
      if (i<cart.length-1){
        printString=`${printString} ${cart[i].itemName} at $${cart[i].itemPrice},`
      }
      if (i===cart.length-1){
        printString=`${printString} and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }      
    }
    return printString
  }
  // write your code here
}

function total() {
   var cartTotal=0
   for (var i=0; i<cart.length; i++) {
    cartTotal=cart[i].itemPrice + cartTotal
   }
   return cartTotal
}

function removeFromCart(item) {
  for (var i=0; i<cart.length; i++) {
    if (cart[i].itemName===item){
      var newArray=[...cart.slice(0,i),...cart.slice(i+1)]
      console.log(newArray)
      console.error(newArray)
      cart=newArray.slice(0)
      return cart
    }
   }
   return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var printString=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart=[]
  return printString
}
