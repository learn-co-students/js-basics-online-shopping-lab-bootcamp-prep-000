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
 var value = Math.random()*100;
 var newObj = {[item]: Math.floor(value)+1};
 cart.push(newObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var lencart = cart.length;
  // var keys = Object.keys(cart);
  console.log(`${lencart}`);
  if(lencart === 0) {
    console.log("Your shopping cart is empty.");
  } else if (lencart === 1) {
    // var obj = cart[0];
    var keys = Object.keys(cart[0]);
    console.log(`In your cart, you have ${keys[0]} at $${cart[0][keys[0]]}.`);
  } else if (lencart === 2){
    var key1 = Object.keys(cart[0]);
    var key2 = Object.keys(cart[1]);
    console.log(`In your cart, you have ${key1[0]} at $${cart[0][key1[0]]} and ${key2[0]} at $${cart[1][key2[0]]}.`);
  }
  else {
    var string = "In your cart, you have ";
    for (var i = 0; i < lencart -1; i++) {
      var key = Object.keys(cart[i]);
      string = string + `${key[0]} at $${cart[i][key[0]]}, `
      // console.log(string);
    }
    var finalkey = Object.keys(cart[lencart-1]);
    console.log(string + `and ${finalkey[0]} at $${cart[lencart-1][finalkey[0]]}.`)
  }
}

function total() {
  // write your code here
  let money = 0;
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i]);
    money = money + cart[i][key];
  }
  return money;
}

function removeFromCart(item) {
  // write your code here
  for(var i =0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      return cart.splice(i,1);
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  cart = [];
  return cart;
}
