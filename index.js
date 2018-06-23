var cart = [];

function getCart() {
return cart;
}

function setCart(c){
  cart = c;
  return cart;
}

function addToCart(name){
  var newObj = {itemName: name, 
                    itemPrice: Math.floor(Math.random()*100)};
  cart.push(newObj);
  return `${name} has been added to your cart.`
}

function viewCart(){
  var theString = 'In your cart, you have ';
  if(cart.length===0){
    return "Your shopping cart is empty.";
  }
  if(cart.length == 1){
    return `${theString}${cart[0].itemName} at $${cart[0].itemPrice}.` 
  }
  
  else if(cart.length == 2){
    return `${theString}${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  
  else {
    for(var i=0; i<cart.length; i++){
      if(i===cart.length-1){
        theString += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
      else{
        theString += `${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
      }
      return theString;
    }
}

function total(){
  var total = 0;
  for(var i=0; i<cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(name){
  for(var i=0; i<cart.length; i++){
    if(cart[i].itemName === name){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(card){
  if(typeof card === 'undefined'){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    var amount = total();
    cart = [];
    return `Your total cost is $${amount}, which will be charged to the card ${card}.`
  }
}




























// var cart = [];

// function getCart() {
// return cart;
// }

// function setCart(c) {
//   cart = c;
//   return cart;
// }

// function addToCart(item) {
// var newObj = {'itemName': item, 'itemPrice': Math.floor(Math.random()*100+1)}
// cart.push(newObj);
// return `${item} has been added to your cart.`
// }

// function viewCart() {
//   if(cart.length===0){
//     return 'Your shopping cart is empty.'
//   }
//   if(cart.length===1){
//     return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
//   }else if(cart.length===2){
//     return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
//   }
//   else {
//     var returned = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, `
  
//   for(var i=2; i<cart.length; i++){
//     if(i===cart.length-1){
//     returned += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
//   }
//   else {
//     returned += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
//     }
//   }
// }
// return returned;
// }
// function total() {
//   var total = 0;
//   for(var i=0; i<cart.length; i++){
//     total += cart[i].itemPrice;
//   }
//   return total;
// }

// function removeFromCart(item) {
//   for(var i=0; i<cart.length; i++){
//     if(cart[i].itemName===item){
//     cart.splice(i, 1);
//     return cart;
//     }
    
//   }
//   return "That item is not in your cart."
// }

// function placeOrder(cardNumber) {
//   if(typeof cardNumber==='undefined'){
//     return "Sorry, we don't have a credit card on file for you."
//   }
//   var totalCost = total();
//   cart = [];
//   return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
// }
