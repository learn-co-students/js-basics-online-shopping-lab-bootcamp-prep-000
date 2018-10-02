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
 var new_item = {};
 new_item["itemName"] = item;
 new_item["itemPrice"] = Math.random()* 100;
 
 getCart().push(new_item);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var our_cart = getCart();
  var first_part = 'In your cart, you have ';
  if (our_cart.length === 1){
    return first_part + `${our_cart[0].itemName} at $${our_cart[0].itemPrice}.`;
  }
  
  else if (our_cart.length > 1){
  for (var x = 0; x < our_cart.length-1; x++){
    var middle_part = `${our_cart[x].itemName} at $${our_cart[x].itemPrice}, `;
    first_part = first_part + middle_part;
  }
  var end_part = `and ${our_cart[our_cart.length-1].itemName} at $${our_cart[our_cart.length-1].itemPrice}.`;
  return first_part + end_part;
  }else{
    return "Your shopping cart is empty.";
  }
}

function total() {
  // write your code here
  var our_cart = getCart();
  var total_value = 0;
  for (var x = 0; x < our_cart.length; x++){
    total_value = total_value + our_cart[x].itemPrice;
  }
  return total_value;
}

function removeFromCart(item) {
  // write your code here
  var our_cart = getCart();
  for (var x = 0; x < our_cart.length; x++){
    if (our_cart[x].itemName == item){
      our_cart.pop(our_cart[x]);
      return our_cart;
    }else{
      return "That item is not in your cart.";
    }
    
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
}















