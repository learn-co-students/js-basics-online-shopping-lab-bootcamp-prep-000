var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addToCart(item) {
 // write your code here
 var itemName = item
 var itemPrice = Math.floor((Math.random() * 100) + 1)
 item = new Object()
 item.itemName = itemName
 item.itemPrice = itemPrice
 cart.push(item)
 var message = item.itemName + ' has been added to your cart.'
 return cart, item, message
}

function viewCart() {
  // write your code here

  if (cart.length === 0){
    var empty = 'Your shopping cart is empty.'
    return empty
  } else if(cart.length === 1){
    var something = 'In your cart, you have '+cart[0].itemName+' at $'+cart[0].itemPrice+'.'
    return something
  } else {
    var i = 1
    var somethingelse = 'In your cart, you have '+cart[0].itemName+' at $'+cart[0].itemPrice
    var somethingtoo = ''
    while (cart.length > i ){
      if (cart.length - 1 === i){
        somethingtoo += ', and '+cart[i].itemName+' at $'+cart[i].itemPrice
         i++
      } else {
        somethingtoo += ', '+cart[i].itemName+' at $'+cart[i].itemPrice
        i++
      }

     }
    var alltogether = somethingelse + somethingtoo+'.'
    return alltogether
  }
}

function total() {
  // write your code here
  var i = 0, cost = 0
  while(cart.length > i){
    cost += cart[i].itemPrice
    i++
  }
  return cost
}

function removeFromCart(item) {
  // write your code here
  var tester = false
  for (var i = 0; cart.length >= i; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1);
      tester = true
    } else if (cart.length == i && tester == false){
      var nocart = 'That item is not in your cart.'
      return nocart
    }
  }

}


function placeOrder(cardNumber) {
  // write your code here
}
