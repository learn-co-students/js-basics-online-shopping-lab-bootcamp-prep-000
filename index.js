var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};
  obj[item] = Math.floor((Math.random() * 100) + 1);
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart
}


function viewCart() {}
  if (cart.length===0){
    console.log('Your shopping cart is empty.')
}
  else if(cart.length===1){
    var intro = `In your cart, you have ${Object.entries(cart[0])[0][0]} at $${Object.entries(cart[0])[0][1]}.`
}
  else if(cart.length===2){
    var intro = `In your cart, you have ${Object.entries(cart[0])[0][0]} at $${Object.entries(cart[0])[0][1]} and ${Object.entries(cart[1])[0][0]} at $${Object.entries(cart[1])[0][1]}.`
}
  else{
    var intro = `In your cart, you have ${Object.entries(cart[0])[0][0]} at $${Object.entries(cart[0])[0][1]}, ${Object.entries(cart[1])[0][0]} at $${Object.entries(cart[1])[0][1]}`
  }
    for(var i = 2; i < cart.length; i++){
      if(cart[i+1]){
        intro +=
        `, ${Object.entries(cart[i])[0][0]} at $${Object.entries(cart[i])[0][1]}`;
}
    else {
        intro +=
        `, and ${Object.entries(cart[i])[0][0]} at $${Object.entries(cart[i])[0][1]}.`;
  }
}
    console.log(intro)
}


function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total += Object.entries(cart[i])[0][1]
  };
  return total
}

function removeFromCart(item) {
  var pairs = Object.values(cart);
  for(var i = 0; i < cart.length; i++){
   if(Object.keys(pairs[i])[0]===item){
     cart.splice(i,1);
     var deleted = 1;
     }
}
  if(deleted !== 1){
    console.log('That item is not in your cart.')
}}


function placeOrder(cardNumber) {
  if(cardNumber){
  var cartTotal = total();
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
    cart = [];
}
  else{
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
