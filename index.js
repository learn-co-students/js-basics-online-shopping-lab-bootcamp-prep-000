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
 let obj = {}
 obj.itemName=item
 obj.itemPrice=Math.floor(Math.random() * 101)
 cart.push(obj)
 return obj.itemName + ' has been added to your cart.'
}

function viewCart() {
  // write your code here
//   var newCart=[]
//   for (var i=0; i<cart.length; i++){
//     newCart.push(cart[i])
// }
if(cart.length === 1){
  return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + '.'
}else if(cart.length === 2){
  return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + ', and ' + cart[1].itemName +' at $' + cart[1].itemPrice + '.'
}
else if(cart.length === 3){[0]
  return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + ', ' + cart[1].itemName+  ' at $' +  cart[1].itemPrice + ', and '+ cart[2].itemName+ ' at $' + cart[2].itemPrice + '.'
}else{
  return 'Your shopping cart is empty.'
}
}

function total() {
  // write your code here
  var total=0
  for (var i=0; i<cart.length; i++){
    total += cart[i].itemPrice
  }
return total
}
total()

function removeFromCart(item) {
  // write your code here
  var newlist=[]
  for (var i=0; i<cart.length; i++){
 if(item === cart[i].itemName){
    cart.splice(i, 1)
  }else {
    newlist.push(cart[i])
  }
}if(newlist.length === cart.length){
  return 'That item is not in your cart.'
}else{
  return cart
}
}

function placeOrder(cardNumber) {
  // write your code here
  var final=total()
  if (cardNumber>0){
    for (var i=0; i<cart.length; i++){
      cart.splice(i, 1)
    }
    return 'Your total cost is $' + final +', which will be charged to the card ' + cardNumber + '.'

  }else{
  return "Sorry, we don't have a credit card on file for you."
}
}
