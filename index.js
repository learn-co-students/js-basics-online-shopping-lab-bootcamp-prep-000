var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var groceriesObject = {itemName: item, itemPrice: price}
  cart.push(groceriesObject);
  return (`${item} has been added to your cart.`)
}

function viewCart() {
  var newArray = []
 if(cart.length===0){
     return "Your shopping cart is empty."
   }else if(cart.length===1){
     newArray.push(`${cart[0].itemName} at $${cart[0].itemPrice}.` )
   }else if(cart.length===2){
     console.log(cart[0].itemPrice)
     newArray.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
     newArray.push(`and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
   }else {
    for(var i=0; cart.length>i; i++){
   if(i+1===cart.length){
      newArray.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
   }else{
   newArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
   }}}
   console.log(newArray)
return "In your cart, you have "+newArray.join(", ")
}

function total() {
 var sum = 0;
 for (var i=0; i<cart.length; i++) {
        sum += cart[i].itemPrice;
    }return sum
}

function removeFromCart(item){
   for(var i=0; i<cart.length; i++){
     if(item===cart[i].itemName) {
     cart.splice(i,1)
     return cart
       }
   }
     return("That item is not in your cart.")

}
  
function placeOrder(cardNumber) {
 if (cardNumber===undefined){
   return "Sorry, we don't have a credit card on file for you."
 }else{ 
   for(var i=0; i<cart.length; i++){
    var total = 0
     total += cart[i].itemPrice;
    cart.splice(0)
 return `Your total cost is $`+ total+ `, which will be charged to the card ` + cardNumber + `.`
 }}
}