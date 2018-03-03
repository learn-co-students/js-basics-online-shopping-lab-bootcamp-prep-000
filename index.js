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
 var obj = {[item]: Math.floor(Math.random() * 20)}
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here

  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  
  else {
    if(cart.length === 1){
      console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`)
    }
    
    else if(cart.length === 2){
      console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)
    }
    
    else{
      var len = cart.length;
      for(var i = 0; i < len; i++){
        if(i === 0){
          var itms = `In your cart, you have ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`
        }
        
        else if(i === len - 1){
          itms = `${itms}, and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`
        }
        
        else{
          itms = `${itms}, ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`
        }
        
      }
    }
    console.log(itms)
  }
}

function total() {
  // write your code here
  var total = 0;
  for(var i =0; i < cart.length; i++){
    total = total + cart[i][Object.keys(cart[i])[0]]
  }
  
  return total
}

function removeFromCart(item) {
  // write your code here
  var flag = 0;
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      flag = 1;
      cart.splice(i,1)
    }
  }
  if(flag === 0){
    console.log("That item is not in your cart.")
  }
  
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
