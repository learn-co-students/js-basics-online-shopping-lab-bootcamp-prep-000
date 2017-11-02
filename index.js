var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var test = {[item]: Math.floor(Math.random() * 100) + 1};
  cart.push(test);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var inCart = "In your cart, you have"
  var test = [];
  var last = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i])[0]
      var price = cart[i][key]
      test[i] = `${key} at $${price}`
    }
    if (cart.length === 1) {
      console.log(`${inCart} ${test}.`)
    } else if (cart.length === 2) {
      var output = test.join(" and ");
      console.log(`${inCart} ${output}.`)
    } else if (cart.length > 2) {
      test[test.length - 1] = "and " + test[test.length - 1]
      var output = test.join(", ")
      console.log(`${inCart} ${output}.`)
    }
  }
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])
    sum = sum + cart[i][key]
  }
  return sum
}

function removeFromCart(item) {
  if (cart.hasOwnProperty(item) === false) {
    console.log("That item is not in your cart.")
  }
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1);
      return cart;
    }
  }
}

function placeOrder(cardNumber) {
  var test = total()
  if (cardNumber === undefined) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${test}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
