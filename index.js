var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart() {
  return cart
}

function addToCart(item){
  var price = Math.floor(100*Math.random());
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
    return
  }
  var statement = 'In your cart, you have '
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
      statement += item + " at $" + cart[i][item] + ", "
  }
  statement = statement.slice(0,-2)
  statement += '.'
  console.log(statement);
  return
}

function removeFromCart(item) {
  for(var i= 0; i<cart.length; i++) {
    for (var k in cart[i]) {
      if (k=item) {
        cart.splice(i,1);
        //console.log("Removed " + item)
        return
      }
    }
  }
  console.log("That item is not in your cart.")
  return
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  else {
    console.log('Your total cost is $' + total() + ', which will be charged to the card ' + cardNumber + '.')
    for (var thing in cart) {
      console.log("in for loop")
      removeFromCart(thing);
    }
  }
  return
}
