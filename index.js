var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);
    cart.push({ [item]: price});
    console.log(`${item} has been added to your cart.`)
    return cart
}


function viewCart() {
    var key1 = Object.keys(cart[0]);
    var value1 = Object.values(cart[0]);
    var key2 = Object.keys(cart[1]);
    var value2 = Object.values(cart[1]);
  if (cart.length === 0){console.log('Your shopping cart is empty.')}
  else if (cart.length === 1) {
    console.log(`In your cart, you have ${key1} at $${value1}.`)}
  else if (cart.length === 2) {
    console.log(`In your cart, you have ${key1} at $${value1} and ${key2} at $${value2}`)}
  else if (cart.length > 2) {
    for (var i = 0; i < cart.length-2; i++){          //-2 because we need to leave space for last item
      var objectx = cart[i]
      var itemx = Object.keys(cart[i])
      var pricex = Object.values(cart[i])
      var itemsandprices = []
      itemsandprices.push(itemx +' at $'+ pricex)
      var sentence = itemsandprices.join(' ,')
      var lastkey = Object.keys(cart[cart.length-1])
      var lastvalue = Object.values(cart[cart.length-1])
     console.log(`In your Cart, you have ${sentence} and ${lastkey} at $${lastvalue} `)
     }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
