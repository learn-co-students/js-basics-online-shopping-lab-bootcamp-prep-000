var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
	var itemandprice = { [item]: price }
  cart.push(itemandprice);
  	console.log(`${item} has been added to your cart.`)
	return cart;
}

function viewCart() {
 const itemsandprices = []
 let l = cart.length
 if (!l) {
   return console.log("Your shopping cart is empty.")
 }
 else {
   for (let i = 0; i < l; i++) {
     var itemandprice = cart[i]
     var item = Object.keys(itemandprice)
     var price = itemandprice[item]
     itemsandprices.push(`${item} at $${price}`)
   }
   return console.log(`In your cart, you have ${itemsandprices.join(', ')}.`)
 }
}

function removeFromCart(item) {
for (var i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item)) {
    return cart.splice( i, 1);
}
}
console.log(`That item is not in your cart.`)
}

function placeOrder(cardNumber) {
  var N = cardNumber;
  if (0 < N) {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      return cart.splice(0, cart.length)
    }
console.log("We don't have a credit card on file for you to place your order.")
}
