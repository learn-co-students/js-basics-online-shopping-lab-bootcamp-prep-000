var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(thing) {
  var itemName = [thing];
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var item = new Object ({ [itemName] : itemPrice });
  cart.push(item);
  console.log (`${thing}`+` has been added to your cart.`);
  return cart
}

function viewCart() {
  var array = []
  if (cart.length===0) {
    console.log ("Your shopping cart is empty.");
  }
  else {
    for (var i = 0; i < cart.length; i++){
      var currentObject = cart[i]
      var currentName = Object.keys(currentObject)[0]
      var currentPrice = currentObject[currentName]
      array.push (`${currentName} at $${currentPrice}`);
    }

    var base = 'In your cart, you have'

    if (cart.length === 1){
      console.log (`${base} ${array[0]}.`)
    } else if (cart.length === 2){
      var twoItemCart = array.join(' and ')
      console.log (`${base} ${twoItemCart}.`)
    } else {
      var lastItem = array.pop()
      var firstItems = array.join(', ')
      console.log (`${base} ${firstItems}, and ${lastItem}.`)
    }
  }
}

function total() {
  var prices = []
  for (var i = 0; i < cart.length; i++){
    var currentItem = cart[i]
    var currentName = Object.keys(currentItem)[0]
    var currentPrice = currentItem[currentName]
    prices.push(currentPrice);
  }
  var total = prices.reduce(function(sum, value) {
  return sum + value;
  }, 0);
return total
}

function removeFromCart(itemRemove) {
  for (var i = 0; i < cart.length; i++){
    var cartItems = cart[i]
    if (cartItems.hasOwnProperty(itemRemove))  {
      cart.splice(i,1)
      return cart
    }
  }
  console.log ('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log ("Sorry, we don't have a credit card on file for you.")
  }
  console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart.length = 0
  return cart
}
