var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random()*100 +1)
  var itemObject = {
    [itemName] : itemPrice
  }
  cart.push(itemObject)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  var numberOfItems = cart.length
  var midStatement = ''
 if (numberOfItems === 0) {
   console.log(`Your shopping cart is empty.`);
 } else if (numberOfItems == 1) {
   var item = Object.keys(cart[0])
   var price = Object.values(cart[0])
   console.log(`In your cart, you have ${item} at $${price}.`)
 } else if (numberOfItems == 2) {
   var item = Object.keys(cart[0])
   var price = Object.values(cart[0])
   var item2 = Object.keys(cart[1])
   var price2 = Object.values(cart[1])
   console.log(`In your cart, you have ${item} at $${price} and ${item2} at $${price2}.`)
 } else if (numberOfItems >= 3) {
   for (var i = 0; i < cart.length-1; i++) {
     var item = Object.keys(cart[i])
     var price = Object.values(cart[i])
     midStatement = `${midStatement}${item} at $${price}, `
   }
   var item = Object.keys(cart[numberOfItems-1])
   var price = Object.values(cart[numberOfItems-1])
   console.log(`In your cart, you have ${midStatement}and ${item} at $${price}.`);
 }
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum = sum + parseInt(Object.values(cart[i]))
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log(`That item is not in your cart.`);
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []
  }
}

//
//
//
//
// //
// addToCart('testItem')
// addToCart('testItem2')
// addToCart('testItem3')
// addToCart(`testItem4`)
//
// viewCart()
