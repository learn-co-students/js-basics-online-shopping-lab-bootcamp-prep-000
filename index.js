var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return;
  }
  else {
    var output = "In your cart, you have"
    for (let i = 0; i < cart.length; i++) {
      if (i > 0 && i === cart.length - 1) {
        output = output + " and"
      }
      var item = Object.getOwnPropertyNames(cart[i])[0]
      output = output + ` ${item} at $${cart[i][item]}`;
      if (cart.length >= 3 && i < cart.length - 1) {
        output = output + ",";
      }
    }
    output = output + ".";
    console.log(output);
    return;
  }
}

function total() {
  var price = 0;
  for (let i = 0; i < cart.length; i++) {
    price = price + cart[i][Object.getOwnPropertyNames(cart[i])[0]];
  }
  return price
}

function removeFromCart(item) {
  var items = [];
  for (let i = 0; i < cart.length; i++) {
    items.push(Object.getOwnPropertyNames(cart[i])[0]);
  }
  console.log(cart)
  console.log(items)
  var index = items.indexOf(item)
  console.log(index)
  if (index >= 0) {
    return cart.splice(index,1);
  }
  else {
    console.log("That item is not in your cart.");
    return;
  }
}

function placeOrder(cardNumber) {
  if (arguments.length < 1) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  }
  else {
    var cost = total()
    cart = [];
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`);
    return;
  }
}
