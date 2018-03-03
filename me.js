var cart = [];

function addToCart(item) {
 // write your code here
 var obj = {[item]: Math.floor(Math.random() * 20)}
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

addToCart("banana");
addToCart("orange");
addToCart("apple");
console.log(cart)

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
    
    else{
      var len = cart.length;
      for(var i = 0; i < len; i++){
        if(i === 0){
          var itms = `In your cart, you have ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`
        }
        
        else if(i === len - 1){
          itms = `${itms} and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`
        }
        
        else{
          itms = `${itms}, ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`
        }
        
      }
    }
    console.log(itms)
  }
}

viewCart();
