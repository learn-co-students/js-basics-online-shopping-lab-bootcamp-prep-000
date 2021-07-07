 var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
var obj={};
var price=Math.floor(Math.random() * 100) + 1;
obj['itemName']=item
obj['itemPrice']=price
cart.push(obj);
 return `${item} has been added to your cart.`
}
function viewCart() {
  if (cart.length===0) {
    return `Your shopping cart is empty.`    
  } else if(cart.length===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if(cart.length===2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var array=[];
    for(var i=0; i<cart.length; i++) {
      array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    var joined=array.slice(0, -1).join(', ') + ', and ' + array.slice(-1)
    return `In your cart, you have ${joined}.`
  }
}
function total() {
  let sum = 0
  for (let i=0; i<cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  let cart=getCart()
  for (var i=0; i<cart.length; i++){
  if(cart[i].itemName===item) {
   cart.splice(i, 1)
   return cart
   }
}
   return "That item is not in your cart."
}
function placeOrder(cardNumber) {
  if (cardNumber=== undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var price=total();
    cart=[];
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
}
}