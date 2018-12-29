var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {}
 var price = Math.floor(Math.random() * 100)
 newItem.itemName = `${item}`
 newItem.itemPrice = price
 cart.push(newItem)
 return item + ' has been added to your cart.'
 return cart
}

function viewCart() {
  if(cart[0] === undefined){
    return 'Your shopping cart is empty.'
  }
  else if(cart.length === 1){
    return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + '.'
  }
  else if(cart.length === 2){
    return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + ', and ' + cart[1].itemName + ' at $' + cart[1].itemPrice + '.'
  }
  else {
    return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + ', ' + cart[1].itemName + ' at $' + cart[1].itemPrice + ', and ' + cart[2].itemName + ' at $' + cart[2].itemPrice + '.'
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++){
    var pricePerItem = cart[i].itemPrice
    total += pricePerItem
  }
  return total
}

function removeFromCart(item) {
for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1)
    }
  }
  if(cart.indexOf(item) === -1){
    return 'That item is not in your cart.'
  }
    return cart
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else{
  var totalCost = total()
  cart.splice(0, (cart.length))
    return 'Your total cost is $' + totalCost + ', which will be charged to the card ' + cardNumber + '.'
    }
  return cart
}
