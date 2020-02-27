var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function generateprice(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function addToCart(item) {
  var items = {}
  items['itemName']=item
  var price = generateprice(1,101)
  items['itemPrice'] =price
  cart.push(items)
  return(`${item} has been added to your cart.`)



 // write your code here
}

function viewCart() {
  var cart1 = getCart()

  if (cart1.length<1){
    return('Your shopping cart is empty.')
  }
  if (cart1.length===1){
    return(`In your cart, you have ${cart1[0].itemName} at $${total()}.` )
  }
  if (cart1.length===2){
    return(`In your cart, you have ${cart1[0].itemName} at $${cart1[0].itemPrice}, and ${cart1[1].itemName} at $${cart1[1].itemPrice}.` )
  }
  if (cart1.length===3){
    return(`In your cart, you have ${cart1[0].itemName} at $${cart1[0].itemPrice}, ${cart1[1].itemName} at $${cart1[1].itemPrice}, and ${cart1[2].itemName} at $${cart1[2].itemPrice}.` )

  // write your code here
}
}

function total() {
  var sum = 0
  var cart2 = getCart()
  for (var i = 0; i <cart2.length; i++) {

    sum += cart2[i].itemPrice

  }
  return(sum)
  // write your code here
}

function removeFromCart(item) {
  var sum1 = []
  var cart3 = getCart()
  for (var i = 0; i <cart3.length; i++) {
    sum1.push(cart3[i].itemName)
  // write your code here
}

 if (sum1.indexOf(item)>-1) {
    var index = sum1.indexOf(item)
    cart3.splice(index,1)
    return(cart3)
  }
  else if(sum1.indexOf(item)===-1){
    return('That item is not in your cart.')
  }
}


function placeOrder(cardNumber) {
  var cart5= getCart()
  if(cardNumber===undefined){
    return('Sorry, we don\'t have a credit card on file for you.')

  }
  else if(cardNumber>10){
    var statement= (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart5.length = 0
    return(statement)
  }
  // write your code here
}
