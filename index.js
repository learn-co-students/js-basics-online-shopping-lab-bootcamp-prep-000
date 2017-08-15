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
 var randomNum = Math.floor(Math.random() * 100)
 var itemName = { [item]: randomNum }
 cart.push(itemName)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var output = 'In your cart, you have '
    if (cart.length === 0){
      output = 'Your shopping cart is empty.';
    }
    else if (cart.length === 1){
      output += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
    }
    else if (cart.length === 2){
      output += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
    }
    else{
      for(var i = 0; i < cart.length; i++){
       if (i < cart.length - 1) {
         output += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
       }
       else{
         output += `and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
       }

      }
    }
    console.log(output);
}

function total() {
  // write your code here
  var total = 0
  for(var i = 0; i < cart.length; i++){
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  var preChange = cart.length
 for(var i = 0; i < cart.length; i++){
  if (cart[i].hasOwnProperty(item)){
    cart.splice(i, 1)
  }
 }

 if (cart.length === preChange){
   console.log('That item is not in your cart.');
 }
}

function placeOrder(cardNumber) {
  var totalCost = total()
  if (cardNumber){
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
  }
  else{
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
  cart = []
}
