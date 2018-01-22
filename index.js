var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var itemObj = { [item]: price }
  cart.push(itemObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

/*function viewCart() {
  var message = "";
  var keys = [];
  var values = [];
  for(var obj in cart){
    keys.push(Object.keys(cart[obj]));
    values.push(cart[obj]);
    }
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }else if(cart.length === 1){
    console.log(`In your cart, you have ${keys[0]} at $${values[0]}.`)
  }else{
    for(let i=0;i<cart.length-1;i++){
      message = message + `${keys[i]} at $${values[i]}, `
    }
    message = message + `and ${keys[cart.length-1]} at $${values[cart.length-1]}.`
    console.log(`In your cart, you have ${message}.`)
  }
}*/

function viewCart(){
  var message = "";
  var keys = [];
  var values = [];
  for(var obj in cart){
    keys.push(Object.keys(cart[obj]));
    values.push(cart[obj]);
  }
  if(cart.length > 1){
    for(let i=0;i<cart.length;i++){
      message += `${keys[i]} at $${values[i]}, `;
    }
    message += `and ${keys[(cart.length)-1]} at $${values[(cart.length)-1]}.`
    console.log(`In your cart, you have ${message}`)
  }else if(cart.length === 1){
    console.log(`In your cart, you have ${keys[0]} at $${values[0]}.`)
  }else{
    console.log("Your shopping cart is empty.")
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
