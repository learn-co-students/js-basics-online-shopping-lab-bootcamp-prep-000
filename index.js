var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 let itemPrice = Math.floor(Math.random()*100);
 let itemConstructor = {[itemName]: itemPrice};
 cart.push(itemConstructor);
 //let itemConstructor = getCart()[0].constructor
 //let itemName = Object.keys(getCart()[0])[0];
 //let itemPrice = getCart()[0][itemName];
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var sum = [];
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0];
    var s = `${key} at $${cart[i][key]}`
    sum.push(s)
  }

  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length < 3) {
    console.log('!!!!!!!!!!!!!!!!')
    console.log(sum)
    console.log(sum.join(' and '))
      console.log(`In your cart, you have ${sum.join(" and ")}.`)
    }
  else {
    var joined = sum.slice(0,-1).join(", ")
    var last = sum[sum.length - 1];

    // var last = cart.length - 1
    // var last_key = Object.keys(cart[last])[0]
    // var last_value = cart[last][last_key]
    // var joined2 = `${joined}, and ${last_key} at $${last_value}`

    console.log(`In your cart, you have ${joined}, and ${last}.`)
  }
}

function total() {
  // write your code here
  var results = 0
  for (var i = 0; i < cart.length; i++) {
    var key=Object.keys(cart[i])[0]
    results += cart[i][key]
  }
  return results
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      // delete cart[i] //[item]
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
