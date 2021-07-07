var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj ={ itemName: `${item}` , itemPrice:Math.floor(Math.random()*100)+1 }
 cart.push(obj)
 return `${obj.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length!==0){
    var str =`In your cart, you have`
    if(cart.length===1)
    return `${str} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  for(var i=0;i<cart.length;i++)
  {
    if(i<cart.length-1)
    str+=` ${cart[i].itemName} at $${cart[i].itemPrice},`
    else
    str+=` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
  }
  return str
  }
  else
  return `Your shopping cart is empty.`
}

function total() {
  // write your code here 
  var total=0
  for(var i=0;i<cart.length;i++)
  {
  total+=cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var count=0;
  for(var i=0;i<cart.length;i++){
    if(item===cart[i].itemName){
    cart.splice(i,1)
    count++;
    }
  }
  if(count===0)
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber===undefined)
  console.log(`Sorry, we don't have a credit card on file for you.`)
  else{
    var tot=total()
    cart.splice(0,cart.length)
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
    
  }      
}
