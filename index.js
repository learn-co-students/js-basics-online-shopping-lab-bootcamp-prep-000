var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*10)
  var itemName = item
  item = {[itemName]: itemPrice};
  cart.push(item);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length===0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var sentence = `In your cart, you have `
    for(var i=0; i < cart.length; i++){
      var itemsAndPrice = cart[i]     //a single object in the cart {socks: 42}
      var itemName = Object.keys(itemsAndPrice)[0]
      var itemPrice = itemsAndPrice[itemName]
      if ((i+1 < cart.length|| cart.length===1) && cart.length!==2){
        sentence += `${itemName} at $${itemPrice}, `}
      else if (i+1 < cart.length && cart.length===2) {
          sentence += `${itemName} at $${itemPrice} `
      }
      else {
          sentence += `and ${itemName} at $${itemPrice}  `
      }
    }

    sentence = sentence.slice(0, sentence.length - 2) + "."
    console.log(sentence)
  }

}


function total() {
  var cartTotal = 0
  for (var i = 0; i < cart.length; i++) {
    var itemsAndPrice = cart[i]     //a single object in the cart {socks: 42}
    var itemName = Object.keys(itemsAndPrice)[0]
    var itemPrice = itemsAndPrice[itemName]
    cartTotal = cartTotal + itemPrice
  }
  return cartTotal
}


function removeFromCart(itemName) {
var foundIt = false
  for (var i = 0; i < cart.length; i++) {
  if (Object.keys(cart[i])[0] === itemName){
      console.log(cart[i]);
      cart.splice(i, 1);
     foundIt = true
    }
  }
  if (!foundIt) {
      console.log("That item is not in your cart.");
  }
  return cart;
}
function placeOrder(cardNumber){
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
cart.length = 0
return cart
  }
