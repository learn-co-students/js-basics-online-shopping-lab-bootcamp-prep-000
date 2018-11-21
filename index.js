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

 cart.push({"itemName": item, "itemPrice": Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`

}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  }
  else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if(cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else if(cart.length === 3){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
}

function total() {
  // write your code here
  var total = 0
  for (var i=0;i<cart.length;i++){
    total += parseInt(`${cart[i].itemPrice}`)
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var removeItem = ""
  for (var i=0;i<cart.length;i++){
    if(item === cart[i].itemName){
      removeItem = cart[i].itemName
      cart.splice([i],1)
    }
  }
  if(removeItem === item){
    return cart
  }
  else{
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var totalCost = total()
  console.log(totalCost)
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    cart.length = 0
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
