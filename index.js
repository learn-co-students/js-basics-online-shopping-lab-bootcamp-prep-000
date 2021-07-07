var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here!
 var price = Math.floor(Math.random() * 101) + 1;
 var items = {itemName: item, itemPrice:price}
 cart.push(items)
 return (`${item} has been added to your cart.`)

}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return ('Your shopping cart is empty.')
  }
  if (cart.length === 1) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  }
  if (cart.length === 2) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  }
  if  (cart.length === 3) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`)
  }
}

function total() {
  // write your code here
 	var sum = 0 // new item with price.
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;

  }
return sum
}

function removeFromCart(item) {
  // write your code here
  var key = false
  for (var i =0; i<cart.length; i++) {
  	if (cart[i].itemName === item) {
  		cart.splice(i,1)
  		key = true
  		return getCart()
  	}

  }
   if (key === false) return('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  // write your code here
 var message

  if (cardNumber === undefined) {
    message = ('Sorry, we don\'t have a credit card on file for you.')
  } else{

    message = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
   cart.length = 0
}
return message
}
