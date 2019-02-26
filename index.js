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
 var price = Math.floor(((Math.random() * 10)+1) * ((Math.random() * 10)+1))
 var itemObj = {itemName: item, itemPrice: price}
 cart.push(itemObj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return `Your shopping cart is empty.`
  }
  else if(cart.length === 1){
    var bar = cart[0]
    var str = `In your cart, you have ${bar.itemName} at $${bar.itemPrice}.`
    return str
  }
  else if(cart.length === 2){
    var bar = cart[0]
    var foo = cart[1]
    var str = `In your cart, you have ${bar.itemName} at $${bar.itemPrice}, and ${foo.itemName} at $${foo.itemPrice}.`
    return str
  }
  else{
    var strStart = `In your cart, you have `
    for(var i=0; i < cart.length; i++){
      if(i === cart.length - 1){
        var bar = cart[i]
        var str1 = `and ${bar.itemName} at $${bar.itemPrice}.`
        strStart = strStart + str1
      }
      else{
        var bar = cart[i]
        var str1 = `${bar.itemName} at $${bar.itemPrice}, `
        strStart = strStart + str1
      }
    }
    return strStart
  }
}

function total() {
  // write your code here
  var master = 0
  for(var i = 0; i < cart.length; i++){
    var bar = cart[i]
    var temp = bar.itemPrice
    master = master + temp
  }
  return master
}

function removeFromCart(item) {
  // write your code here
  var keeper = 0
  for(var i = 0; i < cart.length; i++){
    var bar = cart[i]
    if(bar.itemName === item){
      var newCart = cart.splice(i, 1)
      keeper + 1
    }
  }
  if(keeper !== 0){
    return newCart
  }
  else{
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  }
  else{
    var cartTotal = total()
    cart = []
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}
