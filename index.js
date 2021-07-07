var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function generatePrice(){
  return Math.floor(Math.random() * 100) + 1  
}

function addToCart(item) {
 // write your code here
 cart.push({"itemName":item,"itemPrice":generatePrice()})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var empty = ["In your cart, you have "];
  if(cart.length===0){
    return "Your shopping cart is empty."
  }
  if(cart.length === 1){
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
  }
  for(var i =0;i<cart.length;i++){
    if(i===cart.length-1){
      empty.push(`and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`)
    }else{
      empty.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}, `)
    }
  }
  return empty.join("");
}

function total() {
  // write your code here
  var value = 0;
  for(var i =0;i<cart.length;i++){
    value += cart[i]["itemPrice"];
  }
  return value;
}

function removeFromCart(item) {
  // write your code here
  var found = 0;
  var i = 0;
  while(found === 0 && i<cart.length){
    if(cart[i]["itemName"] === item){
      cart.splice(i,1);
      found = 1;
    }
    i+=1;
  }
  if(found === 0){
    return "That item is not in your cart.";
  }else{
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var totalcost =total();
    for (var i = 0;i<cart.length;i++){
      removeFromCart(cart[i]["itemName"]);
    }
    return `Your total cost is $${totalcost}, which will be charged to the card ${cardNumber}.`;
  }
}
