var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt() {
  var min = Math.ceil(1);
  var max = Math.floor(101);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
  var itemPrice = getRandomInt()
  var newObj = { [item]: itemPrice }
  cart.push (newObj)
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var string = []
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      let currentItem = cart[i]
      var itemName = Object.keys(currentItem)[0]
      var itemPrice = currentItem[itemName]

      string.push(`${itemName} at $${itemPrice}`)
    } if (cart.length === 1) {
      console.log("In your cart, you have " + string + ".")
    } else if (cart.length === 2) {
      console.log("In your cart, you have " + string.join(" and ") + ".");
    } else if (cart.length > 2) {
string[string.length-1] = "and " + string[string.length-1]
      console.log("In your cart, you have " + string.join(", ") + ".");
    }
} else {
  console.log (`Your shopping cart is empty.`)
}

return cart
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    let currentItem = cart[i]
    var itemName = Object.keys(currentItem)[0]
    var itemPrice = currentItem[itemName]
    total = itemPrice + total
  }
return total
}

function removeFromCart(item) {
  {
 for (var i = 0; i < cart.length; i++) {
   if (cart[i].hasOwnProperty(item)) {
     cart.splice(i, 1);
     return cart;
   }
 }  return console.log("That item is not in your cart.");
}
}

function placeOrder(ccNum)  {
  var emptyArray = [];
  if (ccNum === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`)
    setCart(emptyArray)
  }
}
