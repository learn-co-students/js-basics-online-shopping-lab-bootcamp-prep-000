var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = {
   itemName: item, 
   itemPrice: 'item Price',
 }
 item.itemPrice = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
 cart.push(item)
 return item.itemName + ' has been added to your cart.'
}

function viewCart() {
  var itemsInCart = []
  if (cart.length === 1) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
  } else if (cart.length === 2) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + ".";
  } else if (cart.length >= 3) {
    let counter = 0
    while (counter < cart.length - 1) {
      itemsInCart.push(" " + cart[counter].itemName + " at $" + cart[counter].itemPrice)
      counter++
    } return "In your cart, you have" + itemsInCart + ", and " + cart[cart.length - 1].itemName + " at $" + cart[cart.length - 1].itemPrice + ".";
  } else {
    return "Your shopping cart is empty.";
  }
}

function total() {
  var totalPrice = 0
  let i = 0
  for (i = 0; i <= cart.length - 1; i++) {
    totalPrice = totalPrice + cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  let i = 0;
  while (i < cart.length) {
    if (cart[i].itemName !== item) {
      i++;
    } else if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    } 
  } if (i >= cart.length) {
      return "That item is not in your cart.";
    }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
  return "Sorry, we don't have a credit card on file for you.";
  } else if (typeof cardNumber !== undefined) {
    var totalPrice = 0
    let i = 0
    for (i = 0; i <= cart.length - 1; i++) {
     totalPrice = totalPrice + cart[i].itemPrice
    }
    cart = []
    return "Your total cost is $" + totalPrice + ", which will be charged to the card " + cardNumber + ".";
  } 
}
