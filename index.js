var cart = [];

function getCart() {
 return cart;
}

function setCart() {
  cart = [];
  return cart;
}

function addToCart(item) {
  var itemObj = {}
  function priced() {
    return Math.floor(Math.random()*101)
  }
  itemObj = {itemName :`${item}`, itemPrice : priced()};
  cart.push(itemObj);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0){
    return `Your shopping cart is empty.`
}
 if(cart.length === 1){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
}else{
var curCart = []
var last = cart.length-1
for(let i = 0; i < last ; i++){
curCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
}
return `In your cart, you have${curCart}, and ${cart[last].itemName} at $${cart[last].itemPrice}.`
}
}

function total() {
  var cartTotal = []
  for(let i = 0; i < cart.length; i++){
  cartTotal = [...cartTotal, cart[i].itemPrice]
}
function sum(cartTotal){
return cartTotal.reduce(function(a,b){
  return a + b
})
  }
  return sum(cartTotal)
}

function removeFromCart(item) {
  for(let i=0; i < cart.length; i ++){
    if(item === `${cart[i].itemName}`){
      cart.splice(i,1)
      return cart
    }
  }
return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
    if(cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var price = total();
    setCart();
  return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
      }
}