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
 var object = new Object();
 object["itemName"]=item
 object["itemPrice"]=Math.floor(Math.random() * 100);
 cart.push(object)
 return item + " has been added to your cart."
}

function viewCart() {
  // write your code here
  var name = ""
  if (cart.length<1){return "Your shopping cart is empty."}
  for (var i= 0; i< cart.length;i++){
    
   var itemName = cart[i].itemName
   var itemPrice = cart[i].itemPrice
    
    if (i===cart.length-1){

      if (cart.length===1){
         name =name +  " " + itemName + " at $" + itemPrice + "."
      }else{
         name =name +  " and " + itemName + " at $" + itemPrice + "."
      }
    }else{
      name =name + " " + itemName + " at $" + itemPrice + ","
    }
  }
  name = "In your cart, you have" + name
  return name
}

function total() {
  // write your code here
  var totalPrice = 0
  for (var i = 0; i<cart.length;i++){
    var itemPrice = cart[i].itemPrice
     totalPrice = parseInt(itemPrice) + totalPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  var found = 0
  for (var i = 0 ; i < cart.length; i++){
    var itemName = cart[i].itemName
    if (itemName===item){
      cart.splice(i,1)
      found = 1
    }
  }
  if (found === 0){ return "That item is not in your cart."}
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined ){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var totalPrice = total()
    cart =[]
    
    return "Your total cost is $"+ totalPrice  +", which will be charged to the card "+ cardNumber +"."
  }
}
