var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item; 
 var itemPrice = Math.floor(Math.random() * 100) + 1
 var itemObj = {
   [itemName]: itemPrice
 };
 cart.push(itemObj)
 console.log(`${item} has been added to your cart.`)
 return cart; 
}

function viewCart() {
  if(!cart.length){
    console.log('Your shopping cart is empty.')
  }
  var result = `In your cart, you have `;
  
  for(var i =0; i<cart.length;i++){
    
    var currentKey = Object.keys(cart[i]);
    var currentPrice = cart[i][currentKey];
    
    result += `${currentKey} at $${currentPrice}`
    
    if(i === cart.length-1){
      result += '.'
    } else if(i===cart.length-2 && cart.length===2){
      result += ' and '
    } else if(i===cart.length-2 && cart.length>2){
      result += ', and '
    } else {
      result += ', '
    }
  }
  console.log(result);
}

function total() {
  var sum = 0;
  for(var i =0; i<cart.length;i++){
    var currentObj = cart[i];
    var currentKey = Object.keys(cart[i]);
    var currentPrice = currentObj[currentKey];
    
    sum+= currentPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for(var i =0; i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart;
    } 
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = [];
}
