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
 var item = {};
 var itemPrice = Math.floor(Math.random() * (100))
 item[itemName] = itemPrice;
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}


function viewCart() {
  var itemKeys = [];
  var itemValues = [];
  var cartItems = [];
  for (let i=0; i<cart.length; i++){
    var itemKey = Object.keys(cart[i])
    var itemValue = cart[i][itemKey]
    var cartItem = `${itemKey} at $${itemValue}`
    itemKeys.push(itemKey);
    itemValues.push(itemValue);
    cartItems.push(cartItem);
  }
  if (cart.length < 1){
    console.log('Your shopping cart is empty.');
  } else if (cart.length===1){
      console.log(`In your cart, you have ${cartItems[0]}.`)
  } else if (cart.length===2){
    console.log(`In your cart, you have ${cartItems[0]} and ${cartItems[1]}.`)
  } else {
    for (let i=0; i<cartItems.length-1; i++){
      var theLastItem = cartItems.pop();
      var stringItems = cartItems.join(', ');
      console.log(`In your cart, you have ${stringItems}, and ${theLastItem}.`)
    }
  }
}



function total() {
  var itemValues = [];
  for (let i=0; i<cart.length; i++){
    var itemKey = Object.keys(cart[i]);
    var itemValue = cart[i][itemKey];
    itemValues.push(itemValue);
    var sum = itemValues.reduce(function (a,b){
      return a+b;
    });
  }
  return sum;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[];
  }
}
