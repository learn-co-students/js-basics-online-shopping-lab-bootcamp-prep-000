var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var newObj = {}
var price = Math.floor((Math.random()*100)+1)
newObj["itemName"] = item
newObj["itemPrice"] = price
cart.push(newObj)
return item+" has been added to your cart."
return cart
}



function viewCart() {
if(cart.length===0){
  return "Your shopping cart is empty."
}
else{ let printedCart = []
  for(let i=0;i<cart.length;i++){
    let cartItem = cart.itemName
    printedCart.push(cart[i].itemName + " at $" + cart[i].itemPrice)}
    
    if(printedCart.length===1){return "In your cart, you have "+ printedCart+"."}
    if (printedCart.length===2){return "In your cart, you have "+ printedCart[0]+", and "+printedCart[1]+"."}
    else{for(let i=0;i<printedCart.length;i++){
      return "In your cart, you have "+ printedCart[i]+", "+printedCart[i+1]+","+" and "+printedCart[i+2]+"."
    }}}}



function total() {
 var sum = 0
  for(let i=0;i<cart.length;i++){
   sum+=parseInt(cart[i].itemPrice)}
  return sum}


function removeFromCart(item) {
  for(let i=0;i<cart.length;i++){
  if (cart[i].itemName === item) 
  {var updatedCart = cart.splice(i,1)
    return updatedCart}
}return "That item is not in your cart."}


function placeOrder(cardNumber) {if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {var totalPrice = total()
  cart = []
    return 'Your total cost is $'+totalPrice+', which will be charged to the card '+cardNumber+'.'
    ;
  }}