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
 var price = Math.floor(Math.random() * 100);
 var newObj = {[item]: price};
 cart.push(newObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var itemsAndPrices = [];
  var intro = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
        itemsAndPrices.push(item +' at $'+ price)
  }


  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  }else if (cart.length === 1){
    console.log(`${intro} ${itemsAndPrices}.`)
  }else if (cart.length === 2){
    var twoItems = itemsAndPrices.join(' and ');
    console.log(`${intro} ${twoItems}.`)
  }else if (cart.length > 2){
    var multiItems = itemsAndPrices.slice(0, -1).join(', ');
    var end = itemsAndPrices.slice(-1);
    console.log(`${intro} ${multiItems}, and ${end}.`)
  }
}

function total() {
  // write your code here
  var total = 0;
  for(var i in cart){
    var item = Object.keys(cart[i]);
    total = total + cart[i][item];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i in cart){
    if(cart[i].hasOwnProperty(item) === true){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }else{
    console.log(`Sorry, we don\'t have a credit card on file for you.`);
  }
}
