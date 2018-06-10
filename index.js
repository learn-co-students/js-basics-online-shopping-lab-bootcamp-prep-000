var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random() * 100) + 1);
 cart.push(new Object({ itemName: item, itemPrice: price }))
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if(cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else 
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
}

function total() {
  var sum = 0; 
  for(var i = 0; i < cart.length; i += 1) {
    sum = sum + cart[i].itemPrice; 
  }
  return sum; 
}

function removeFromCart(item){

  for(var i = 0, l = cart.length; i < l; i++){

  for(var list in cart[i]){
      if(item === list){
        cart.splice(i,1)
        return cart
       }
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
if (cardNumber === undefined){
  console.log("We don't have a credit card on file for you to place your order.")
}
else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart }
}