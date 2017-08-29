var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemName = item
  let itemPrice = Math.floor(Math.random() * 100) + 1
  var itemConstructor = {[itemName]: itemPrice}
  cart.push(itemConstructor)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {console.log ('Your shopping cart is empty.')}
  else {
  var yourCart = 'In your cart, you have '
  var array1 = []
  cart.forEach ((itemObject, index) => {
    var keys = Object.keys(itemObject)[0]
    var values = itemObject[keys]
    array1.push(`${keys} at $${values}`)});
  if (cart.length === 1) {
    yourCart += array1.join() + "."
    console.log(yourCart);
  } else if (cart.length === 2) {
    yourCart += array1.join(' and ') + "."
    console.log(yourCart);
  } else {
    var array2 = array1.splice(-1, 1)
    yourCart += array1.join (', ')
  } console.log(`${yourCart}, and ${array2}.`);
  }
}



function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var price = Object.keys(cart[i])[0]
    total += cart[i][price]
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart;
}
}
