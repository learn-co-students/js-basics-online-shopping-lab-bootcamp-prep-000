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
 var price = Math.floor(Math.random() * 101)
 cart.push({[item] : price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    return console.log("Your shopping cart is empty.")
  }
  var itemPrice = []
  for (let i = 0, l = cart.length; i < l; i++) {
    var itemPrices = cart[i]
    var item = Object.keys(itemPrices)[0]
    var price = itemPrices[item]
    itemPrice.push(`${item} at \$${price}`)
  }
  switch(itemPrices.length) {
    case 1:
      break;
    case 2:
      itemPrice = itemPrice.join(" and ");
      break;
    default:
      itemPrice[cart.length-1] = "and ".concat(itemPrice[cart.length-1]);
      itemPrice = itemPrice.join(", ");
  }
  console.log(`In your cart, you have ${itemPrices}`)
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
