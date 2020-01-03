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
 cart.push({'itemName': item, 'itemPrice':getRandomInt(100)});
 return `${item} has been added to your cart.`;
 }

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  } else {
    return `In your cart, you have ${cart.map(function (x,i){return `${(i === cart.length-1 && cart.length != 1)? ' and ':(i === 0? '':' ')}${x.itemName} at \$${x.itemPrice}`}).join()}.`
  }
}
function total() {
  // write your code here
  var total = 0
  cart.forEach(function (x){
    total = total + x.itemPrice      
  })
  return total
}

function removeFromCart(item) {
  // write your code here
  var  index = -1
  cart.forEach(function (x,i){
    if (x.itemName === item) {
      index = i 
    }   
  })
  if (index === -1){
    return `That item is not in your cart.`;
  }else{
    return cart.splice(index, 1)
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (typeof(cardNumber) === "undefined"){
    return "Sorry, we don't have a credit card on file for you."
  }
  const totalCart = total()
  cart.splice(0)
  return `Your total cost is \$${totalCart}, which will be charged to the card ${cardNumber}.`
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}