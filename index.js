var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var items={
      itemName:item,itemPrice:Math.floor(Math.random() * 100) + 1
    }
    cart.push(items)
 return `${item} has been added to your cart.`
}

function viewCart() {
if (cart.length===0){
  return 'Your shopping cart is empty.'
} 
if (cart.length===1){
return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
}
var first='In your cart, you have'
var second='and'
for(let i=0;i<cart.length;i++){
  if (i===cart.length-1) {
    first+=` ${second} ${cart[i].itemName} at $${cart[i].itemPrice}`
  }else{ first+=` ${cart[i].itemName} at $${cart[i].itemPrice},`
  }
}
return first+='.'
}

function total() {
  var total=0
  var i=0
  while(i<cart.length) {
    total+=cart[i].itemPrice
    i+=1
  }
return total
}

function removeFromCart(item) {
var i=0
while(i<cart.length){
  if(cart[i].itemName===item){
    cart.splice(1,1)
  } i+=1
}
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if(cardNumber===undefined){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }else{ 
    var done=total()
    cart=[]
    return `Your total cost is $${done}, which will be charged to the card ${cardNumber}.`
  }
}
