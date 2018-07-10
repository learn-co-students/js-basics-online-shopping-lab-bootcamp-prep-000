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
 
 var price = Math.floor(Math.random() * 100) + 1  

cart.push({
  itemName:item,
  itemPrice:price})
return (`${item} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  var wholeList
 
  if(cart.length === 0){wholeList = "Your shopping cart is empty."}
 
  else if(cart.length ===1){
  wholeList = (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  }
  
  else if (cart.length ===2) {
      wholeList = (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  }
  
  else{
    wholeList = ("In your cart, you have ")
      for(var i = 0; i < cart.length-1; i++){
      wholeList += (`${cart[i].itemName} at $${cart[i].itemPrice}, `)}
    wholeList += (`and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`)
  }
  
  return wholeList
}

function total() {
  // write your code here
  var total = 0
  for(var i=0;i<cart.length;i++){
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  
var found = 0
var index
  
  for (var i = 0; i < cart.length; i++){
    
    if(cart[i].itemName === item){
     index = i
       found =1
    }
  }
    if(found===0){
      return ("That item is not in your cart.")
    }
    else{
          var newCart = cart.splice(index,1)
          return newCart}
}



function placeOrder(cardNumber) {
  // write your code here
  
  if(cardNumber === undefined) {
    return ("Sorry, we don't have a credit card on file for you.")
  }
  else{
  var message = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart.length = 0
  return message
  }
}