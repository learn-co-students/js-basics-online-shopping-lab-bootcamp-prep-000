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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }else{
    var str = [];
    for (var i = 0; i < cart.length; i++) {
        var itemObject = cart[i]
        var item = Object.keys(itemObject)[0]
        var price = itemObject[item]
        str.push(`${item} at $${price}`)
      }
      var new_str = str.join(", ");
      console.log(`In your cart, you have ${new_str}.`)
}
}

function removeFromCart(name){
  var foundIt = false;// foundIt is a boolean variable that we have used
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(name)) {
       cart.splice(i, 1)
       foundIt = true
    }
  }
    if (foundIt === false){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber){
  if (cardNumber) {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
   } else{
      console.log('We don\'t have a credit card on file for you to place your order.')
  }
  cart.splice(0, cart.length)
  return cart
}
