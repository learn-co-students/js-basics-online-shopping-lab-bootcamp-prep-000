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
}

function viewCart() {
  // write your code here
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  var statement = 'In your cart, you have';
  for(var i=0; i<cart.length; i++){
    for(var item in cart[i]){
      statement += ` ${item} at $${cart[i][item]}${i === cart.length-1 ? '.' : ','}`
    }
  }
  cart.length > 0 ? console.log(statement) : console.log('Your shopping cart is empty.');
}


function removeFromCart(item){
  var count = 0;
  for(var i=0; i<cart.length; i++){
      if(cart[i].hasOwnProperty(item) == true){
        cart.splice(i, 1)
        count += 1;
      }
  }
  if(count === 0){
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber){
  if(cardNumber > 0){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  } else {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  cart = [];
}
