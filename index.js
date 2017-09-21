var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

var itemPrice= getRandomIntInclusive(1,100)
cart.push({[item]:itemPrice})
console.log(`${item} has been added to your cart.`)

   return cart
}


function viewCart() {
  const itemsAndPrices = [];
  let item, price;

if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
else if (cart.length === 1) {
   var item1 = `${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}`
  console.log(`In your cart, you have ${item1}.`)
}
else if (cart.length === 2) {
   item1 = `${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}`
  console.log(`In your cart, you have ${item1} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)
}

else {
  for (var i = 0; i < cart.length; i++) {
    item = Object.keys(cart[i])[0]
    price = cart[i][Object.keys(cart[i])[0]]
    if (i === cart.length - 1) {
      itemsAndPrices.push(`and ${item} at $${price}`)
    } else {
      itemsAndPrices.push(`${item} at $${price}`)
    }
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
}

}

function total() {
const prices= []
for (var i = 0; i < cart.length; i++) {
  prices.push(cart[i][Object.keys(cart[i])[0]])
}
var total = prices.reduce(
  function (
    accumulator,
    currentValue,
  ) {
    return accumulator + currentValue
  }
)
return total
}

function removeFromCart(item) {
  var itemsList = []
for (var i = 0; i < cart.length; i++) {
  let itemsForList=(Object.keys(cart[i]))
  itemsList.push(`${itemsForList}`)
}
  if (itemsList.includes(item) === false) {
    console.log ("That item is not in your cart.")
    return cart
  }
else {
  function findMatch(element){
  return element === item
  }
var spliceStart = itemsList.findIndex(findMatch) // equals index(1) cart= [{Object}, {object}] cart.splice(index,1)
 cart.splice(spliceStart, 1)
 return cart
}
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
  else {
console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
cart= []
}
}
