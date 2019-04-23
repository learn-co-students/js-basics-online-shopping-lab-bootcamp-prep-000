var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

 var price = Math.floor(Math.random()*(100-1 +1))+1
 var obj = Object.assign({},{itemName:item,itemPrice:price});
 cart.push(obj)
 return `${obj.itemName} has been added to your cart.` 
}

function viewCart() {
  var str = ""
 
  if (cart === undefined || cart.length === 0){
    str +="Your shopping cart is empty."
  } else {
    str += "In your cart, you have "
    for (var i = 0; i <cart.length-1; i++){
      str += `${cart[i].itemName} at $${cart[i].itemPrice}` 
       if (i === cart.length - 1)
         str += "."
       else if (i > 1 && i !==cart.length-1)
          str += ", "
       else if (cart.length === i+1){
          str += ", and "
          str += `${cart[cart.length].itemName} at $${cart[cart.length].itemPrice}.`
       }
    }
  }
  return str
}

function total() {
 
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
