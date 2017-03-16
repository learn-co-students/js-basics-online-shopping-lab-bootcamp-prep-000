cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item][price]
    }
  }	return t
}


function getCart() {
  return cart
}

function addToCart(item) {
var newItem = new Object();
newItem.item = item
newItem.price = Math.floor(Math.random() * 100)

cart.push(newItem)

  console.log(`${item} has been added to your cart.`)

	return cart;

}

function viewCart(){

if (cart.length === 0) {console.log("Your shopping cart is empty.")}
else {
	var message = `In your cart, you have `
  for (var el in cart){
    message += `${el} at $, `
  }
  message = message.slice(0, -2) + "."
  console.log(message);
}
}

function removeFromCart(item){
	if (cart.hasOwnProp(item)){
		delete cart[item]
	}
	else {console.log("That item is not in your cart.")}

}

function placeOrder(cardNumber){

console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
return cart = [];
}
