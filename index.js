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
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  cart.push({[item]: itemPrice});
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  // write your code here
  var string = "In your cart, you have"

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    var object1 = cart[0]
    var item1 = Object.keys(object1)
    var price1 = object1[item1]
      console.log(`${string} ${item1} at $${price1}.`);
  } else if (cart.length === 2) {
    var object1 = cart[0]
    var item1 = Object.keys(object1)
    var price1 = object1[item1]
    var object2 = cart[1]
    var item2 = Object.keys(object2)
    var price2 = object2[item2]
      console.log(`${string} ${item1} at $${price1} and ${item2} at $${price2}.`);
  } else if (cart.length > 2) {
    var phrases = []
    for (var i = 0; i < cart.length; i++) {
      var objectA = cart[i]
      var itemA = Object.keys(objectA)
      var priceA = objectA[itemA]
      var phrase = `${itemA} at $${priceA}`
      phrases.push(phrase)
    }
    var lastPhrase = ", and " + phrases.pop()
    var fullPhrase = phrases.join(', ')

    console.log(`${string} ${fullPhrase}${lastPhrase}.`);
  }
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var objectA = cart[i]
    var itemA = Object.keys(objectA)[0]
    var priceA = objectA[itemA]
    // we have our total, and the price, if total is 0, and the price is 3, what would we expect the total to be at this point?
    total += priceA
}
return total
}

function removeFromCart(item) {
  // item value is 'pizza'
  // cat's value [{pizza: 24}, {socks: 15}, {iPad: 74}]
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart // exits the function
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
if (cardNumber !== undefined) {
  console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
  return cart = []
} else {
  console.log("Sorry, we don't have a credit card on file for you.")
}
}


// The placeOrder() function accepts one argument, a credit card number.
// If no argument is received, the function should print out Sorry, we don't have a credit card on file for you..
// If a card number is received, the function should print out Your total cost is $71,
// which will be charged to the card 83296759.
// (where 71 is the value returned by total() and 83296759 is the credit card number passed to placeOrder()).
//  Then, it should empty the cart array.
