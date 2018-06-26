var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor((Math.random() * 100) + 1)
 var item = {
   itemName: item,
   itemPrice: price
 };
 cart.push(item);
 return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cartContents = 'In your cart, you have '
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    return cartContents + `${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    var multiple = '';
    for (var i = 0; i < cart.length - 1; i++) {
      //var iInt = parseInt(i);
      //var singleItem = cart[iInt].itemName
      //var singlePrice = cart[iInt].itemPrice
      var single = `${cart[i].itemName} at $${cart[i].itemPrice}, `
      multiple += single
    }
    return cartContents = cartContents + multiple + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + parseInt(cart[i].itemPrice)
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  const cartTotal = total();
  // write your code here
  if (cardNumber) {
    cart = []
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  } else {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
}
