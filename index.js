var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor(Math.random() * 100);

  var cartItem = { [itemName]: itemPrice};

  cart.push(cartItem);

  console.log(`${itemName} has been added to your cart.`);

  return cart;
}

function viewCart() {

  var leadIn = "In your cart, you have";

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1){
    var itemName = Object.keys(cart[0])
    var itemPrice = cart[0][itemName]

    var statement = leadIn.concat(` ${itemName} at $${itemPrice}.`)
    console.log(statement)
  }
  else if (cart.length === 2){
    var cartItems = [leadIn]

    for (var i = 0; i < cart.length; i++){
      var itemName = Object.keys(cart[i])
      var itemPrice = cart[i][itemName]

      if (i === 1){
        cartItems.push(`and ${itemName} at $${itemPrice}.`)
      }
      else {
        cartItems.push(`${itemName} at $${itemPrice}`)
      }
      console.log(cartItems.join(' '))

    }
  }
  else {
    var cartItems = [leadIn]

    for (var i = 0; i < cart.length; i++){
      var itemName = Object.keys(cart[i])
      var itemPrice = cart[i][itemName]

      if (i === (cart.length - 1)){
        cartItems.push(`and ${itemName} at $${itemPrice}.`)
      }
      else {
        cartItems.push(`${itemName} at $${itemPrice},`)
      }
      console.log(cartItems.join(' '))

    }
  }
}


function total() {
  var cartTotal = 0
  for (var i = 0; i < cart.length; i++){
    var itemName = Object.keys(cart[i])
    var itemPrice = cart[i][itemName]
    cartTotal += itemPrice
  }
  return cartTotal
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++){

    if (cart[i].hasOwnProperty(item)){
      console.log(cart[i][item])
      cart.splice(i,1)
      return cart
    }
  }

  console.log('That item is not in your cart.')

}

function placeOrder(cardNumber) {

  if (cardNumber){
    var totalCost = total()
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)

    cart = []
  }
  else{
    console.log("Sorry, we don't have a credit card on file for you.")
  }


}
