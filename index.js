var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.ceil(Math.random()*100)
 var itemName = {}
	itemName[item] = itemPrice
 cart.push(itemName)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
var cartKeys = [];
var l = cart.length
for (let i = 0; i < l; i++) {
  var obj = cart[i]
  var item = Object.keys(obj)
  var price = obj[item]
  cartKeys.push(`${item} at $${price}`);
}
if (l === 0) {
  console.log(`Your shopping cart is empty.`);
} else if (l === 1) {
    console.log(`In your cart, you have ${cartKeys}.`);
  } else if (l === 2) {
      console.log(`In your cart, you have ${cartKeys[0]} and ${cartKeys[1]}.`);
    } else {
          var sCartKeys = cartKeys.slice(0, l - 1)
          console.log(`In your cart, you have ${sCartKeys.join(", ")}, and ${cartKeys[l - 1]}.`);
  }
}

function total() {
  var priceA = []
  for (let i = 0; i < cart.length; i++) {
    priceA.push(cart[i][Object.keys(cart[i])])
  } function add(a, b) {
    return a + b;
  }
    var sum = priceA.reduce(add, 0)
    return (sum)
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart
    }
  }
  console.log(`That item is not in your cart.`)
  return cart
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart.length = 0
}
