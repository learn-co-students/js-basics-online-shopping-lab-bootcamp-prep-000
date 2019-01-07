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


var getCart = () =>{
    return cart;
}

var addToCart = (item) =>{
  var price = Math.floor(Math.random()*100);
  var object = {}
  object[item] = price
  cart.push(object);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

var viewCart = () =>{
  var str = "";
  if(cart.length === 0)
    str += "Your shopping cart is empty."
  else{
    str += "In your cart, you have "
    for(var i = 0; i < cart.length; i++){
      var key = Object.keys(cart[i]);
      str += `${key} at $${cart[i][key]}`;
      str += i === cart.length - 1 ? "." : ", "
    }

  }
    console.log(str)
}

var removeFromCart = (item) =>{
  var cartCopy = cart
  var counter = 0;
  for(var i = 0; i < cartCopy.length; i++){
    var key = Object.keys(cartCopy[i]) // this is still in object form
    if(key[0] === item){
      cart = [...cart.slice(0, i),...cart.slice(i+1)]
    }else{
      counter++;
    }
  }

  console.log(counter === cartCopy.length ? "That item is not in your cart." : "")
  return cart
}


var placeOrder = (cardNumber) => {
  if(cardNumber === '' || cardNumber === undefined)
    console.log("We don\'t have a credit card on file for you to place your order.")
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([]); // emputy the cart
  }
}
