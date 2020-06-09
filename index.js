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
 cart.push({itemName: item, itemPrice: Math.ceil(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  var str = "In your cart, you have"
  // write your code here
  if(cart.length==0){
    return `Your shopping cart is empty.`
  }
  else if(cart.length==1){
    return `${str} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else{
    for(var i=0;i<cart.length-1;i++){
      str+=` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    str+= ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return str
  }
}

function total() {
  // write your code here
  var str=0
  for(var i=0;i<cart.length;i++){
    str+= cart[i].itemPrice
  }
  return str
}

function removeFromCart(item) {
  // write your code here
  for(var i=0;i<cart.length;i++){
    if(cart[i].itemName==item){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber===undefined) return "Sorry, we don't have a credit card on file for you."
  else{
    var t = total()
    cart = []
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
  }
}
