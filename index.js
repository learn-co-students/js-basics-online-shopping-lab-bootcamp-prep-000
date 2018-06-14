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
 cart.push({ itemName:item, itemPrice: Math.floor(Math.random()*100+1) })
 return `${item} has been added to your cart.`
}

function viewCart() {
  if( cart.length === 0 )
    return "Your shopping cart is empty."
  // write your code here
  var str = "In your cart, you have";
  for( var idx = 0; idx<cart.length; idx++ ){
    if( idx !== 0 )
      str += ','
    if( idx  == cart.length-1 && cart.length>1)
      str += " and"
    var item = cart[idx];
    str += ` ${item.itemName} at $${item.itemPrice}`
  }
  str+='.'
  return str;
}

function total() {
  // write your code here
  var sum = 0;
  for( var idx in cart ){
    var item = cart[idx]
    sum+= item.itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  var idx = -1;
  for( var i in cart ){
    if( cart[i].itemName == item ){
      idx = i;
      break;
    }
      
  }
  if( idx >= 0 ){
    cart.splice(idx,1)
    return cart
  }
  else
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if( !cardNumber )
    return "Sorry, we don't have a credit card on file for you."
  else{
    var t = total();
    cart = []
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
  }
}
