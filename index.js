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
 var itemPrice = Math.floor(Math.random() * 100);
 var obj = {} 
 obj[item] = itemPrice;
 console.log(`${item} has been added to your cart.`)
 cart.push(obj);
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else if(cart.length == 1) {
    const arr = cart[0];
    const firstObj = Object.keys(arr)[0];
    const a = arr[firstObj]
    console.log(`In your cart, you have ${firstObj} at $${a}.`);
  } else if(cart.length === 2){
    const arr = cart[0];
    const firstObj = Object.keys(arr)[0];
    const arr2 = cart[1];
    const secondObj = Object.keys(arr2)[0];
    console.log(`In your cart, you have ${firstObj} at $${arr[firstObj]} and ${secondObj} at $${arr2[secondObj]}.`);
  } else if(cart.length >= 3){
    const arr = cart[0];
    const firstObj = Object.keys(arr)[0];
    const arr2 = cart[1];
    const secondObj = Object.keys(arr2)[0];
    var result = `In your cart, you have ${firstObj} at $${arr[firstObj]}, ${secondObj} at $${arr2[secondObj]},`;
    var eachItem = ""
    for(var i = 2; i<cart.length - 1; i++){
      var arr3 = cart[i];
      var obj = Object.keys(arr3)[0];
      eachItem += ` ${obj} at $${arr3[obj]},`
    }
      var arr4 = cart[cart.length - 1];
      var lastObj = Object.keys(arr4)[0];
      eachItem += ` and ${lastObj} at $${arr4[lastObj]}.`;
      console.log(result + eachItem);
  }
}

function total() {
  // write your code here
  //total price
  var totalPrice = 0;
  for(var i = 0; i<cart.length;i++){
    var arr = cart[i];
    var key = Object.keys(arr)[0];
    var value = arr[key];
    totalPrice += value;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  var result = false;
  for(var i = 0 ; i<cart.length;i++){
    var arr = cart[i]
    if(arr.hasOwnProperty(item)){
      cart.splice(i,1)
      result = true;
    }
  }
  if(result === false){
     console.log("That item is not in your cart.")
  }
  return cart;  
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == null){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  return cart.splice(0);
}
