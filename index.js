var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = (Math.floor(Math.random()*100)+1);
 var obj = { "itemName" : itemName, "itemPrice":itemPrice };
 cart.push(obj);
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var str = []
  if(cart.length===0){
    return "Your shopping cart is empty.";
  }
  else if(cart.length===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if(cart.length===2){
    for(let i=0; i<cart.length;i++){
      str.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    return "In your cart, you have " + str.join(", and ")+"."
  }
  else{
    for(let i = 0; i<cart.length-1; i++){
      str.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
      str.push(`and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`)
    return "In your cart, you have " + str.join(", ")+".";
  }
}

function total() {
  // write your code here
  var price = 0;
  for(let i=0;i<cart.length;i++){
    price += cart[i].itemPrice
  }
  return price
}

function removeFromCart(item) {
  // write your code here"
  for(let i = 0; i<cart.length;i++){
    if(cart[i].itemName ===item){
      cart.splice(i,1);
      return cart
    }
  }
  if(item != cart[item]){
    return "That item is not in your cart.";
  }
}



function placeOrder(cardNumber) {
  // write your code here
  var order = ""
  if(cardNumber){
    order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return order
    }
    else{
      return "Sorry, we don't have a credit card on file for you.";
    }
  }