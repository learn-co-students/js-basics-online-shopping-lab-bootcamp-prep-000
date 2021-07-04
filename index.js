var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here.
  var item = cartItem(item)
  getCart().push(item)
  return `${item.itemName} has been added to your cart.`
}

//helper function cartItem
function cartItem(itemName){
  return {
    itemName:itemName,
    itemPrice:Math.floor(Math.random() * 100)
  }
}

function viewCart() {
  // write your code here
  var cartIntro = "In your cart, you have "
  if (!getCart().length) {
    return "Your shopping cart is empty."
  } else if (getCart().length === 1) {
      return cartIntro += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } else {
      return largeCartList()
    }
}

function largeCartList() {
  var cartIntro = 'In your cart, you have '
  if (getCart().length >= 1) {
    cartIntro += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length > 1) {
    var extraItems = ''
    for (var i=1; i<getCart().length -1; i++) {
      extraItems += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartIntro += `${extraItems}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${cartIntro}.`
}


function total() {
  // write your code here
  var sum = 0
  for (let i = 0; i < getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  let cart  = getCart()
  for (var i = 0; i < getCart().length; i++) {
    if (cart[i].itemName === item) {
      console.log(cart);
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var chargeYaBoy = total()
    cart = []
    return `Your total cost is $${chargeYaBoy}, which will be charged to the card ${cardNumber}.`
  }
}
