var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(100*(Math.random()));
 var itemObj = {itemName: item, itemPrice: price}
 cart.push(itemObj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) 
    return "Your shopping cart is empty."
  if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } else {
      var newCart = []
      for (var i = 0; i < cart.length - 1; i++ ) {
        newCart.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
      } 
    var lastCartItem = []
    lastCartItem.push(` ${getCart()[cart.length - 1].itemName} at $${getCart()[cart.length - 1].itemPrice}`)
    return `In your cart, you have${newCart}, and${lastCartItem}.`
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += getCart()[i].itemPrice
  } return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return getCart();
    }
  } return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber !== null) {
    for (var i = 0; i < cart.length; i++) {
      var cartTotal = total()
      cart.pop(cart[i])
      return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
    }
  } return `Sorry, we don\'t have a credit card on file for you.`
}
