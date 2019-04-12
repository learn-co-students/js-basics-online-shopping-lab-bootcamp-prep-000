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
 var price = Math.random()*Math.floor(100);
 var newItem = {itemName: item, itemPrice: price}
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var output = "";
  var len = cart.length;
  if(len === 0){
    output = "Your shopping cart is empty."
  }
  else if(len === 1){
    output = "In your cart, you have ";
    output = output.concat(cart[0].itemName, " at $", cart[0].itemPrice, ".")
  }
  else{ //need to take care of oxford comma
    var remaining = len; //number of items remaining
    var index = 0;
    output = "In your cart, you have ";
    for(let i = 0; i < len - 1; i++){
      output = output.concat(cart[i].itemName, " at $", cart[i].itemPrice, ", ")
    }
    output = output.concat("and ", cart[len - 1].itemName, " at $", cart[len - 1].itemPrice, ".")
  }
  return output
}

function total() {
  // write your code here
  var total = 0;
  for(let i = 0; i < cart.length; i++){
    total +=  cart[i].itemPrice;
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  //var found = false;
  var cart2;
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart2 = [cart.splice(i,1)]
      return cart2
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code 
  var output;
  if(cardNumber){
    output = "Your total cost is $";
    output = output.concat(total(), ", which will be charged to the card ", cardNumber, ".");
    cart = [];
  }
  else{
    output = "Sorry, we don't have a credit card on file for you.";
  }
  return output; 
}
