var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.ceil(Math.random() * 100)})
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var firstItem
  var firstKey
  var secondItem
  var secondKey
  var item
  var key

  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1){
    firstItem  = cart[0]
    firstKey  = Object.keys(firstItem)[0]
    console.log(`In your cart, you have ${firstKey} at $${firstItem[firstKey]}.`)
  } else if (cart.length === 2){
    firstItem  = cart[0]
    firstKey  = Object.keys(firstItem)[0]
    secondItem = cart[1]
    secondKey = Object.keys(secondItem)[0]
    console.log( `In your cart, you have ${firstKey} at $${firstItem[firstKey]} and ${secondKey} at $${secondItem[secondKey]}.`);
  } else {
    var longList = "In your cart, you have "
    for(var i=0; i < cart.length-1; i++){
      item = cart[i]
      key = Object.keys(item)[0]
      longList = longList + `${key} at $${item[key]}, `;
    }
    item = cart[cart.length-1]
    key = Object.keys(item)[0]
    longList = longList + `and ${key} at $${item[key]}.`
    console.log(longList)
  }
}


function total() {
var item
var key
var sum = 0
  for(var i=0; i < cart.length; i++) {
    item = cart[i]
    key = Object.keys(item)[0]
    sum = sum + item[key]
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (Object.keys(cart[i])[0] === item) {
      return cart.shift()
    }
  } else {
    return "The item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
}

//addToCart("banana")
//addToCart("apple")
//addToCart("muffins")
viewCart()
