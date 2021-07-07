var cart = [];
var sum = 0;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = {[item] : Math.floor(Math.random() * 100)};
    cart.push(item);
    console.log(`${Object.keys(item)} has been added to your cart.`);
    return cart;
}


function viewCart() {
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  }

  if(cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
  }

  if(cart.length === 2){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
  }

  if(cart.length > 2){
    var str = `In your cart, you have`;
    for (var i = 0; i < cart.length-1 ; i++) {
      str+= ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`}

    var lastItem = cart.slice(-1);
    str = str.slice(0,-1)  + `, and ${Object.keys(lastItem[0])} at $${Object.values(lastItem[0])}.`;
      console.log(str);
  }

}
function total() {
    sum =0;
  for(var i = 0; i < cart.length; i++){
    sum+=Number(Object.values(cart[i]));

  }
      return sum;
}

function removeFromCart(item) {
  var notFound = false;
  for(var i = 0; i< cart.length; i++){
  if(cart[i].hasOwnProperty(item)){
    cart.splice(i,1);
    console.log(cart);
    notFound = true;
  }
}
if(notFound === false){
  console.log('That item is not in your cart.')
}
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don\'t have a credit card on file for you.");
  } else{
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }

}