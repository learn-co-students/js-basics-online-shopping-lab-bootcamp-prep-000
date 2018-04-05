var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName:item, itemPrice: Math.floor(Math.random()*100)+1})
  return `${item} has been added to your cart.`
}

addToCart("apples")
addToCart("pears")
addToCart("avocados")

function viewCart() {
  if(cart.length===0){
    return ("Your shopping cart is empty.")
  }else if (cart.length===1) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  }else if (cart.length===2) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  }else if (cart.length>2){
    var cartList = "In your cart, you have"
    for(var i=1; i<=cart.length; i++){
      if(i<cart.length){
        cartList += ` ${cart[i-1].itemName} at $${cart[i-1].itemPrice},`
      }else if(i===cart.length){
        cartList += ` and ${cart[i-1].itemName} at $${cart[i-1].itemPrice}.`
      }
    }
    return cartList
  }
}

function total() {
  var totalPrice=0
  for(var i=0; i<cart.length; i++){
    totalPrice += cart[i].itemPrice 
  }
  return totalPrice
}
//total()

console.log(cart)

function removeFromCart(item) {
  var indexToRemove
  for(var i=0; i<cart.length; i++){
    if(cart[i].itemName===item){
      indexToRemove = i
    }
  }
  if (indexToRemove !== undefined){
    cart.splice(indexToRemove,1)
    return cart
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  var order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return order
}