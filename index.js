var cart = [];

function randomNumber(number) {
  return Math.floor(Math.random()*number)
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let newObj = {[item]: randomNumber(100)};
 cart.push(newObj);
 console.log(`${item} has been added to your cart.`)
 return cart
}

function getKey(index) {
  return Object.keys(cart[index])[0]
}

function getValue(index, key) {
  return cart[index][key]
  }
  
function viewCart() {
  var newString = ""
  if (cart.length === 0) {
    newString = "Your shopping cart is empty."
  } else if (cart.length === 1) {
    var key = getKey(0)
    var value = getValue(0, key)
    newString = `In your cart, you have ${key} at $${value}.`
  } else if (cart.length === 2) {
    var key0 = getKey(0);
    var key1 = getKey(1);
    var value0 = getValue(0, key0);
    var value1 = getValue(1, key1);
    newString = `In your cart, you have ${key0} at $${value0} and ${key1} at $${value1}.`
  } else {
    newString = "In your cart, you have ";
    for (var i = 0; i < (cart.length-1); i++) {
      var keyIndex = getKey(i);
      var valueIndex = getValue(i, keyIndex);
      newString = `${newString}${keyIndex} at $${valueIndex}, `;
    }
    var indexLast = cart.length-1;
    var keyLast = getKey(indexLast)
    var valueLast = getValue(indexLast, keyLast)
    newString = `${newString}and ${keyLast} at $${valueLast}.`
  }
  console.log(newString)
}

function total() {
  // write your code here
  var total = 0;
  for (var i=0; i< cart.length; i++) {
    let key = getKey(i)
    let value = getValue(i, key)
    total = total + value;
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var updatedCart = cart.filter(function(element, index){
    return item != getKey(index)
    })
  if (cart.length === updatedCart.length) {
    console.log("That item is not in your cart.") 
    } else {
      cart = updatedCart
      return cart
      }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    var currentTotal = total();
    console.log(`Your total cost is $${currentTotal}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
