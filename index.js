var cart = [];

function getCart() {
  return cart;}
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var price = Math.floor(Math.random() * 100) + 1;
  var item = {itemName: name, itemPrice: price};
  cart.push(item);
  return `${name} has been added to your cart.`
}

function viewCart(){
  if(cart.length<1){
    return "Your shopping cart is empty." }
  else {
    var str = "In your cart, you have "
    for(let i=0; i<cart.length; i++) {
      if(i===cart.length-1 && i>0){
        str += `and ${cart[i].itemName} at \$${cart[i].itemPrice}`;}
      else {
        str += `${cart[i].itemName} at \$${cart[i].itemPrice}`; 
        if(cart.length>1) {
          str+= ", "; }}
    }
    return str + ".";
  }
    
}

function total() {
  var val=0;
  for(let i=0; i<cart.length; i++) {
    val += cart[i].itemPrice; }
  return val;
}

function removeFromCart(name){
  for(let i=0; i<cart.length; i++) {
    if(cart[i].itemName === name) {
      cart.splice(i, 1);
      return cart; }
  }
  return "That item is not in your cart.";
}

function placeOrder(num) {
  if(num===undefined) {
    return "Sorry, we don't have a credit card on file for you." }
  else {
    var tot = total();
    cart = [];
    return `Your total cost is \$${tot}, which will be charged to the card ${num}.` }
}
