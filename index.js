var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {[item]: Math.floor(Math.random() * 100) + 1}
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var str = "In your cart, you have "
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    for(let i = 0;i < cart.length;i++){
      let itemName = Object.keys(getCart()[i])[0];
      let itemPrice = getCart()[i][itemName];
      str = str + `${itemName} at $${itemPrice}`
      if(i !== cart.length-1 && cart.length > 2){
        str += ","
      }
      if(i !== cart.length-1){
        str += ' '
      }
      else{
        str += '.'
      }
      if(i === cart.length-2){
        str += "and "
      }
    }
    console.log(str)
  }
}

function total() {
  var num = 0
  for(let i = 0;i < cart.length;i++){
    let itemName = Object.keys(getCart()[i])[0];
    let itemPrice = getCart()[i][itemName];
    num += itemPrice
  }
  return num
}

function removeFromCart(item) {
  var found = false;

  for(let i = 0;i < cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      found = true
    }
  }

  if(found === false){
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if(arguments.length === 0){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  while(cart.length !== 0){
    cart.pop()
  }
}
