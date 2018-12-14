var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ itemName: item, itemPrice: parseInt(Math.random()*100, 10) })
 return item + " has been added to your cart."
}


function viewCart() {
  var vc = []
   if (cart.length == 0) {
    return "Your shopping cart is empty."
  }
  if (cart.length == 1) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + "."
  }
  if (cart.length == 2) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice +

    ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + "."
  }
  if (cart.length == 3) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice +
    ", " + cart[1].itemName + " at $" + cart[1].itemPrice +
    ", and " + cart[2].itemName + " at $" + cart[2].itemPrice + "."
  }
}

function removeFromCart(item) {
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1)
       return cart
    }
}
  return "That item is not in your cart."
}

function total() {
  var t = 0
for (let i = 0, l = cart.length; i < l; i++) {
  t = t + cart[i].itemPrice
}
return t
}

function placeOrder(n) {
  var before = total()
  if (n === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
else {
  cart = []
  return "Your total cost is $"+ before + ", which will be charged to the card "  + n + "."
}}
