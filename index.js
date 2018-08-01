var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.ceil(Math.random() * 100)
var newcartitem = {itemName: item, itemPrice: price}
cart.push(newcartitem)
return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length == 1){return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`} 
  else if(cart.length == 2){return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`} 
  else if(cart.length == 0){return `Your shopping cart is empty.`}
  else{
    var a = `In your cart, you have `
    var d = `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    for(var i = 0; i < cart.length -1; i++){
    if(i === 0){var c = `${cart[i].itemName} at $${cart[i].itemPrice}, `} else{
    var c = c + `${cart[i].itemName} at $${cart[i].itemPrice}, `}
    }
  return a + c + d}
}

function total() {
  
  let num = 0 
  for(let j = 0; j < getCart().length; j++){
  num += getCart()[j].itemPrice
  }
return num}

function removeFromCart(item) {
  let cart = getCart()
  for (let x = 0; x < cart.length; x++){
    if (cart[x].itemName === item ){
      return cart.splice(x, 1)
      }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  let cart = getCart()
  if(cardNumber != null){
    for(var l = 0; l < cart.length; l++){
    if(l === 0){var cardtotal = `${cart[l].itemPrice}`
    } else{
    var cardtotal = cardtotal + `${cart[l].itemPrice}`
    }
    }
  cart.splice(0, cart.length + 1)
  return `Your total cost is $${cardtotal}, which will be charged to the card ${cardNumber}.`}
  else{return "Sorry, we don't have a credit card on file for you."}
}
