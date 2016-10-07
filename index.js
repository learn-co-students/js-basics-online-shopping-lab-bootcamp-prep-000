var cart = [];
var items = {};

function setCart(newCart) {
  cart = newCart;
}
function getCart(){

  return cart
}


function addToCart(item){
  var obj = {};


  obj[item] = Math.floor(Math.random() * (100 - 0)) + 0;


  cart.push(obj);



console.log(`${item} has been added to your cart.`)

return cart
}

function viewCart() {
  const itemArray = []
  if(cart.length == 0){
    console.log("Your shopping cart is empty.")
  }
  else{
  for (var i = 0; i < cart.length; i++) {
    var itemAndCost = cart[i]
    var itemSingle = Object.keys(itemAndCost)[0]
    var itemCost = itemAndCost[itemSingle]
    itemArray.push(`${itemSingle} at $${itemCost}`)
  }
}
  console.log(`In your cart, you have ${itemArray.join(', ')}.`)
}

function removeFromCart(item){
  let itemFound = false;
  for (var item in cart) {
    if (cart.hasOwnProperty(item) == true) {
      itemFound = !itemFound
      console.log(item);
      cart.pop(item);
    }
  }

  if (!itemFound) {
    console.log("That item is not in your cart.");
  }

  return cart

}
function placeOrder(cardNumber){
  if (!cardNumber) {
 console.log("We don't have a credit card on file for you to place your order.")
}

console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

 cart = [];
 return cart
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
