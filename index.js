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
 var newItem = {[item]: Math.floor((Math.random() * 100) + 1)}
 console.log(`${item} has been added to your cart.`)
 cart.push(newItem)
 return cart
}


function viewCart() {
  // write your code here
  var inCart = []
  
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
    
  } else if (cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
    
  }else if (cart.length === 2){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
    
  }else {
    for (var i=0;i<cart.length;i++){
      for (var item in cart[i]){
        inCart.push(` ${item} at $${cart[i][item]}`)
      }
    }
    inCart.splice(-1,1,` and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}`)
    console.log(`In your cart, you have${inCart}.`)
  }
  
}

function total() {
  // write your code here
  var total =0
  for (var i=0;i<cart.length;i++){
    total =total+ (cart[i] [Object.keys(cart[i])])
    
    //console.log(total)
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  
  for (var thing in cart){
    if (cart[thing].hasOwnProperty(item)){
      cart.splice(thing,1)
      return cart
    }
    
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {console.log('Sorry, we don\'t have a credit card on file for you.')}
  
}



addToCart("bananas");
addToCart("pancake batter");
addToCart("eggs");
addToCart("junk");
viewCart();
total();
removeFromCart('eggs');
placeOrder(1)