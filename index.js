var cart;

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t;
}

function addToCart(itemOfInterest) {
  cart.push({[itemOfInterest]: Math.floor(100*Math.random())});
  console.log(`${itemOfInterest} has been added to your cart.`)
  return cart;
}
///*
function viewCart() {
  if (cart.length===0){
    console.log("Your shopping cart is empty.");
  }else{
    var str = "";
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        str= str + `${item} at $${cart[i][item]}, `;
      }
    }
    str=str.slice(0, -2);
    console.log(`In your cart, you have ${str}.`);
  }
}

function removeFromCart(itemToRemove) {
  for (var i = 0; i < cart.length; i++) {
    for(var item in cart[i]){ //cart[i]={key:value}
      if (item==itemToRemove){
        cart.splice(i,1);
        return cart;
      }
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(ccNum) {
  if (ccNum===undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`)
  }
  cart.length=0;
  return cart;
}
