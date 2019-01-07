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
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  if (cart == undefined || cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    let string = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
     for (var key in cart[i]) {
        string += key + " at $" + cart[i][key];
        }
        if (cart.length-1 !=i){
          string += ", "
        } else {
          string += "."
        }
      }
    console.log(string);
    }
}

function removeFromCart(item) {
  let itemInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
    if (!itemInCart) {
      console.log("That item is not in your cart.")
    }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
