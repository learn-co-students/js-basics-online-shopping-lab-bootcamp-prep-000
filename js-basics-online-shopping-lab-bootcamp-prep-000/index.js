var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code hereaaa

 cart.push({itemName: itemName, itemPrice:Math.floor((Math.random() *100) +1)})
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var st;
  var backUp = cart;
  if(cart.length>0){
    for(var i = 0; i<cart.length; i++) {
      if(i===0 && cart.length===1){
        st = `In your cart, you have ${backUp.shift().itemName} at ${backUp.shift().itemPrice}.`
      }
      else if(i===0 && cart.length>1){
        st = `In your cart, you have ${backUp.shift().itemName} at ${backUp.shift().itemPrice}, `
      }
      else if(i===cart.length - 1){
        st = `${st}${backUp.shift().itemName} at ${backUp.shift().itemPrice}.`
      }
      else{
        st = `${st}${backUp.shift().itemName} at ${backUp.shift().itemPrice}, `
      }
    }
    return st;
  }
  else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
  var backUp = cart;
  var add=0;
  for(var i=0; i>cart.length; i++){
      add = add + backUp.shift().parseInt(itemPrice);
  }
  return add;
}

function removeFromCart(item) {
  // write your code here

}

function placeOrder(cardNumber) {
  // write your code here
}
