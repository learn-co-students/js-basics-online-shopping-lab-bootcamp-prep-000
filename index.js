var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var itemObject = {itemName: `${item}`, itemPrice: price}
  cart.push(itemObject)
  return itemObject.itemName + " has been added to your cart."
}

function viewCart() {
  var itemList = ""
  var i = 0
  var j = 0
  if (!cart.length){
    return `Your shopping cart is empty.`
  } else{
    do{
      j = i + 1
      itemList += cart[i].itemName + " at $" + cart[i].itemPrice
      i++
      if (j < cart.length){
        itemList += ", "
      }
      if (j == (cart.length - 1) && cart.length > 1){
        itemList += "and "
      }
    }while(i < cart.length)
    return `In your cart, you have ` + `${itemList}.`
  }
}

function total() {
  var totalCost = 0
  var i = 0
  if (!cart.length){
    return totalCost
  } else {
    do{
      totalCost += cart[i].itemPrice
      i++
    }while(i < cart.length)
    return totalCost
  }
}

function removeFromCart(item) {
  var i
  if (!cart.length){
    return `That item is not in your cart.`
  } else {
    for (i = 0; i < cart.length; i++){
      if (cart[i].itemName === item){
        cart.splice(i,1)
        return cart
      }
    }
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return `Sorry, we don\'t have a credit card on file for you.`
  } else {
    var totalCharge = total()
    cart = []
    return `Your total cost is $${totalCharge}, which will be charged to the card ${cardNumber}.`
  }
}
