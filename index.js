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
 var newItem = { 
   itemName: `${item}`,
   itemPrice: Math.floor(Math.random() * 101)
 };
 cart.push(newItem);
 return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var inCartNow = [];
  if (cart.length === 0) {
      return "Your shopping cart is empty."
  }
  for (let i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      inCartNow.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    } else if (i === cart.length - 1) {
      inCartNow.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
    } else {
      inCartNow.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
  }
  return `In your cart, you have${inCartNow}.`
}

function total() {
  // write your code here
  var totalValue = 0
  for (let i = 0; i < cart.length; i++) {
    totalValue = totalValue + cart[i].itemPrice;
  }
  return totalValue
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === `${item}`) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var yourTotal = total();
    cart = [];
    return `Your total cost is $${yourTotal}, which will be charged to the card ${cardNumber}.`
  }
}
