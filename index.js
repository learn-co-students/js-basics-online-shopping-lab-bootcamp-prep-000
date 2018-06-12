var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() *100) +1)
  var obj = Object.assign({}, {'itemName': item, 'itemPrice': price})
  cart.push(obj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var clen = cart.length
  var text = ''
  let i = 0
  var itemsdict = {}
  var x = []
  for (let i = 0; i < clen; i++) {
    itemsdict[cart[i].itemName] = cart[i].itemPrice
  } var items = Object.keys(itemsdict)
    var prices = Object.values(itemsdict)
    if (clen > 0) {
      for (let n = 0; n<clen; n++) {
        if (clen === 1) {
          text = `In your cart, you have ${items[0]} at $${prices[0]}.`
        } if (clen === 2) {
          text = `In your cart, you have ${items[0]} at $${prices[0]}, and ${items[1]} at $${prices[1]}.`
        } if (clen >= 3) {
          text = `In your cart, you have ${items[0]} at $${prices[0]}, ${items[1]} at $${prices[1]}, and ${items[n]} at $${prices[n]}.`
        }
    }} else {
      text = 'Your shopping cart is empty.'
    } return text
  }

function total() {
  var itemdict = {}
  for (let i = 0; i < cart.length; i++) {
    itemdict[cart[i].itemName] = cart[i].itemPrice
  } var prices = Object.values(itemdict)
  var sum = 0
  for (var p in prices) {
    sum += prices[p]
  } return sum
}

function removeFromCart(item) {
  for (let b = 0; b < cart.length; b++) {
    if (cart[b].itemName === item) {
      var x = cart[b]
      var tf = cart[b].itemName === item
    }} if (tf){
      var itemindex = cart.indexOf(x)
        cart.splice(itemindex,1)
        var incart = cart
    } else {
      var incart = 'That item is not in your cart.'
    } return incart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    var info = "Sorry, we don't have a credit card on file for you."
  } else {
    var info = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
  } return info
}
