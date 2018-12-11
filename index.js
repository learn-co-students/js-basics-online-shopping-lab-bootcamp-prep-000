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
  let value = Math.floor(Math.random() * 100)
  let obj = {'itemName': item, 'itemPrice': value}
  cart.push(obj)
  return `${obj['itemName']} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }else if(cart.length === 1){
    let names = []
    let prices = []
    let str = '';
    for(var i = 0; i < cart.length; i++){
      names.push(cart[i]["itemName"])
      prices.push(cart[i]["itemPrice"])
    }
    for(var j = 0; j<names.length; j++){
       str +=`${names[j]} at $${prices[j]}. `
    }
    return "In your cart, you have " + str  
  
  }else{
    let names = []
    let prices = []
    let str = '';
    for(var l = 0; l < cart.length; l++){
      names.push(cart[l]["itemName"])
      prices.push(cart[l]["itemPrice"])
    }
    for(var k = 0; k<names.length; k++){
       str +=`${names[k]} at $${prices[k]}, `
    }
    return "In your cart, you have " + str  
  }
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
