var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100) + 1;
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  }
  else if(cart.length===1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  }
  else if(cart.length===2){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);
  }
  else{
    let cartList = "In your cart, you have";
    for(var i = 0; i<cart.length-1; i++){
      cartList += ` ${Object.keys(cart[[i]])} at $${cart[[i]][Object.keys(cart[[i]])]},`;
    }
    cartList += ` and ${Object.keys(cart[[i]])} at $${cart[[i]][Object.keys(cart[[i]])]}.`;
    console.log(cartList);
  }
}

function total() {
  var sumPrice = 0;
    for(let x=0; x<cart.length; x++){
      sumPrice += cart[[x]][Object.keys(cart[[x]])];
    }
  return sumPrice;
}

function removeFromCart(item) {
  for(let r = 0; r<cart.length; r++){
    if(cart[[r]].hasOwnProperty(item)===true){
      cart.splice(r,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don\'t have a credit card on file for you.");
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart=[];
  }
}
