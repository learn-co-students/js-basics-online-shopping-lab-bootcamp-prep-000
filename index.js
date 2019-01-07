var cart = [];
var cartCount = 0;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100 + 1);
 cart.push({[item]:price});
 /*cart[cartCount][item] = price;*/
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var currentString = "In your cart, you have ";
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
  }else if(cart.length === 1){
    currentString = currentString + `${Object.getOwnPropertyNames(cart[0])} at $${cart[0][Object.getOwnPropertyNames(cart[0])]}.`
  }else if(cart.length === 2){
    currentString = currentString + `${Object.getOwnPropertyNames(cart[0])} at $${cart[0][Object.getOwnPropertyNames(cart[0])]} and ${Object.getOwnPropertyNames(cart[1])} at $${cart[1][Object.getOwnPropertyNames(cart[1])]}.`
  }else{
    for(var i=0;i<cart.length;i++){
      var currentItem = Object.getOwnPropertyNames(cart[i]);
      var currentPrice = cart[i][currentItem];
      if(i != cart.length-1){
        currentString = currentString + `${currentItem} at $${currentPrice}, `
      }else {
        currentString = currentString + `and ${currentItem} at $${currentPrice}.`
      }
    }
  }
  console.log(currentString)
}


function total() {
  var totalPrice = 0;
  for(var i=0;i<cart.length;i++){
    var currentItem = Object.getOwnPropertyNames(cart[i]);
    var currentPrice = cart[i][currentItem];
    totalPrice = totalPrice + cart[i][currentItem];
  }
  return totalPrice;
}

function removeFromCart(item) {
  for(var i=0;i<cart.length;i++){
    var currentItem = Object.getOwnPropertyNames(cart[i]);
    var currentPrice = cart[i][currentItem];
    console.log(currentItem)
    if(currentItem == item){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if(arguments.length === 0){
    console.log("Sorry, we don't have a credit card on file for you.");
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
    cartCount = 0;
  }
}


addToCart('bananas');
addToCart('yams');
addToCart('potatoes');
viewCart();
removeFromCart('yams')
placeOrder(63973348)
