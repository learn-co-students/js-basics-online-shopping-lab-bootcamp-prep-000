var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemName = item
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
  var added = {[itemName]: getRandomInt(1,100)};
  cart.push(added)
  var addmessage = [itemName] + " has been added to your cart."
  console.log(addmessage)
  return cart
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length == 1){
    var element1 = cart[0]
    var item1 = Object.keys(element1)
    var item1$ = element1[item1]
    console.log(`In your cart, you have ${item1} at $${item1$}.`)
  } else if (cart.length == 2) {
    var element1 = cart[0]
    var item1 = Object.keys(element1)
    var item1$ = element1[item1]
    var element2 = cart[1]
    var item2 = Object.keys(element2)
    var item2$ = element2[item2]
    console.log(`In your cart, you have ${item1} at $${item1$} and ${item2} at $${item2$}.`)
  } else {
    var item = Object.keys(cart[0])
    var itemPrice = cart[0][item]
    var message = `In your cart, you have ${item} at $${itemPrice}`
    for (var i=1; i < cart.length - 1; i++) {
      var element = cart[i]
      var item = Object.keys(element)
      var itemPrice = element[item]
      var message = message + `, ${item} at $${itemPrice}`
    }
    var item = Object.keys(cart[cart.length-1])
    var itemPrice = cart[cart.length-1][item]
    var message = message + `, and ${item} at $${itemPrice}.`
    console.log(message)
  }
}

function total() {
  var element = cart[0]
  var item = Object.keys(element)
  var itemPrice = element[item]
  var total = itemPrice
  for (var i=1; i < cart.length; i++) {
    var element = cart[i]
    var item = Object.keys(element)
    var itemPrice = element[item]
    var total = total + itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++ ) {
    var check = Object.keys(cart[i])
    if (check.hasOwnProperty(item)){
      var cart = [...cart.slice(0,i-1), ...cart.slice(i)]
    } else {
      console.log(`That item is not in your cart.`)
    }
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    var pay = total()
    console.log(`Your total cost is $${pay}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  }
}
