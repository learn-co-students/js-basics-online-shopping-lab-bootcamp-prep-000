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
 let price = Math.floor(100*Math.random())
 var obj = {"itemName": item,
            "itemPrice": price}
            
 cart.push(obj)
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var string = "In your cart, you have "
  
  if (cart.length == 0){
    return "Your shopping cart is empty."
  }
  
  else{
    var i
    if (cart.length>1){
        for (i=0; i<cart.length-1;i++){
          string = string + `${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
        string = string + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        
      }
      else{
        string = string + `${cart[0].itemName} at $${cart[0].itemPrice}.`
      }
      
      return string

    }
  
}

function total() {
  // write your code her
  var i
  var total=0;        
  for (i=0; i<cart.length;i++){
    total=total+cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
    var i;
    var found = false
    for (i=0; i<cart.length;i++){
      if(cart[i].itemName==item){
        found=true
        cart.splice(i,1) 
      }
    }
    if (found == false){
      return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    var amount=total()
    cart.splice(0,cart.length)
    return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`
    
  }
}
