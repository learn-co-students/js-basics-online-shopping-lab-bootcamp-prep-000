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
    var obj = {}
    for (var i = 0; i < cart.length; i++){
       obj.i = cart[i]
    }
    str +="In your cart, you have "
    // for (var item in obj){
      // const values = Object.values(item)
      // const keys = Object.keys(item)
    //const entries = Object.entries(obj)
        
    
      // for (const [item, count] of entries){
      // str += `${item} at $${count}.`
      for (const key of obj){
        let value = obj[key];
        str += `${key} at $${value}.`
      }
    }
  // }
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
