var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var random_price = Math.floor(Math.random() * 10) + 1;
  cart.push({['itemName']: item, ['itemPrice']: random_price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartItem1 = [];
  var lastItem = cart[cart.length-1]
  let i = 1;
  while (i < (cart.length-1)) {
    cartItem1.push(cart[i].itemName + ` at $` + cart[i].itemPrice);
    i++;
    }
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return (`In your cart, you have ` + cart[0].itemName +  ` at $` + cart[0].itemPrice + `.`);
  } else if (cart.length === 2) {
    return (`In your cart, you have ` + cart[0].itemName + ` at $` + cart[0].itemPrice + `, and ` + cart[1].itemName + ` at $` + cart[1].itemPrice + `.`);
  } else {
    return (`In your cart, you have ` + cart[0].itemName +  ` at $` + cart[0].itemPrice + `, ` + cartItem1 + `, and ` + (lastItem.itemName) + ` at $` + (lastItem.itemPrice) + `.`);
  }
}

function total() {
  let totalCost = 0;
  for (let i=0; (i<cart.length); i++) {
    totalCost += (cart[i].itemPrice);
}
  return totalCost
}

function removeFromCart(item) {
  for (let i=0; (i<cart.length); i++) {
    if (item === (cart[i].itemName)) {
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var total_incart = total()
  if (cardNumber === parseInt(cardNumber)) {
    cart.splice(0,cart.length)
    return `Your total cost is $${total_incart}, which will be charged to the card ${cardNumber}.`
    }
  return `Sorry, we don't have a credit card on file for you.`
}
