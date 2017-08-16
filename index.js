var cart = [];
var items = [];
var prices = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var r=parseInt(Math.random()*100)
  var itemName = {[item]: r}
  cart.push(itemName)
  items.push(item)
  prices.push(r)
  console.log(item+" has been added to your cart.")
  return cart
}

function viewCart() {
  if(cart.length>0){
    var itemStrings = []
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0] // {pizza: 24}, "pizza", cart[i] which is our object, object[key]
      var price = cart[i][item]
      itemStrings.push(`${item} at $${price}`)
    }
    var formattedItemString = ''
    if (itemStrings.length == 1) {
      // itemStrings == ['pizza at $24']
      formattedItemString = itemStrings[0]
    } else if (itemStrings.length==2) {
      // itemStrings == ['pizza at $24', 'socks at $6']
      formattedItemString = itemStrings.join(' and '); // 'pizza at $24 and socks at $6'
    } else {
      // itemStrings == ['pizza at $24', 'socks at $6', 'iPad at $74']
      // 'pizza at $24, socks at $6, and iPad at $74'
      itemStrings[itemStrings.length - 1] = "and " + itemStrings[itemStrings.length - 1]
      formattedItemString = itemStrings.join(', ')
    }
    console.log(`In your cart, you have ${formattedItemString}.`)

  } else {
    console.log("Your shopping cart is empty.")
    return cart
  }
}

function total() {
  var n = 0
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]) // {pizza: 24}, "pizza", cart[i] which is our object, object[key]
    var price = cart[i][item]
    n = n + price
  }
  return n
}

function removeFromCart(item) {
  let i=0, test=[];
  for(i=0; i<cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        test.push(i);
    }
  }
  if (test.length<1){
    console.log(`That item is not in your cart.`)
  }
}

function placeOrder(cardNumber) {
  var cash = total();
  if (cardNumber>9999999){
    console.log(`Your total cost is $${cash}, which will be charged to the card ${cardNumber}.`)
    cart=[];
  } else{
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
