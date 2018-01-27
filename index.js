var cart = [];

function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1
}

function getCart() {

 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var key = item
 cart.push({ [key]: getRandomInt() });
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {

  var result = ''


    if(cart.length === 0) {
      console.log( `Your shopping cart is empty.`)
    } else if (getCart().length === 1) {
      console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}.`)
    } else if (getCart().length === 2) {
      console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]} and ${Object.keys(getCart()[1])[0]} at $${getCart()[1][Object.keys(getCart()[1])[0]]}.`)

    } else {
      for (var i = 1; i < getCart().length -1; i++) {
      result = result + ` ${Object.keys(getCart()[i])[0]} at $${getCart()[i][Object.keys(getCart()[i])[0]]},`
    }

console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]},` + result + ` and ${Object.keys(getCart()[getCart().length -1])[0]} at $${getCart()[getCart().length -1][Object.keys(getCart()[getCart().length -1])[0]]}.`)

}
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum = sum + getCart()[i][Object.keys(getCart()[i])[0]]
  }
  return sum;
}

// The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
//     + If the cart does not contain a matching item, the function should print out `That item is not
//     in your cart.` and return the unchanged cart.
//     + If the item *is* present in the cart, the function should remove the object from the cart and
//     then return the updated cart.
//     + ***HINT***: Check each object's key (the name of the item) to see if it matches the parameter,
//     then remove it if it matches. You might find [hasOwnProperty](https://developer.mozilla.org/en-US/do
//       cs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) to be useful.
function removeFromCart(item) {
  var result = '';
for (var i = 0; i < cart.length; i ++) {
 if (cart[i].hasOwnProperty(item)) {
   result = cart.splice(cart.indexOf(cart[i]), 1);
 }
}
if(result.length === 0) {
  console.log(`That item is not in your cart.`)
} else {
  return cart;
}
}

// The `placeOrder()` function accepts one argument, a credit card number.
//     + If no argument is received, the function should print out `Sorry,
//     we don't have a credit card on file for you.`.
//     + If a card number is received, the function should print out `Your total
//     cost is $71, which will be charged to the card 83296759.` (where `71` is the value
//       returned by `total()` and `83296759` is the credit card number passed to `placeOrder()`).
//       Then, it should empty the `cart` array.
function placeOrder(cardNumber) {

  if(arguments.length === 0){
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart.splice(0,cart.length);
}
