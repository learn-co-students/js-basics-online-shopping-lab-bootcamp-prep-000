var cart = []
var itemName
var itemPrice
var itemList
var item

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
 itemList = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
 Object.assign({}, itemList, {[itemName]: item}, {[itemPrice]: Math.floor(Math.random()*100)})
 cart.push(itemList)
 
 return `${item} has been added to your cart.`
}

function viewCart(){
  
  if(cart.length === 0){
    return `Your shopping cart is empty.`
  }
  else{
    for(var i = 0; i < cart.length; i++){
      var itemsAndPrices
      
      if(i === 0){
        itemsAndPrices = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else if(i != cart.length -1){
         itemsAndPrices += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else{
        itemsAndPrices += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
    return itemsAndPrices + `.`
  }
}

function total() {
  var totalPrice = 0
  for(var i = 0; i < cart.length; i++){
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  var noItem = 0
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName == item){
      cart.splice(i, 1)
      noItem = 1
      break;
    }
  }
  if(noItem === 0){
    return `That item is not in your cart.`
  }
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  }
  else{
    var charged = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return charged
  }
}