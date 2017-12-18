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
 var price = Math.floor(Math.random() *100 + 1);
 var obj = {[item]: price};
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var prices = [], items = [];
  if (cart.length > 0){
  for (var a = 0; a < cart.length; a ++){
  prices.push(Object.values(cart[a]));
  items.push(Object.keys(cart[a]));
  }
  } else {
    console.log(`Your shopping cart is empty.`);
  }
  if (cart.length === 1){
    console.log(`In your cart, you have ${items[0]} at $${prices[0]}.`);
    } else if (cart.length === 2){
        console.log(`In your cart, you have ${items[0]} at $${prices[0]} and ${items[1]} at $${prices[1]}.`);
    } else {
    var daCart = `In your cart, you have `;
    for (var i = 0; i < cart.length - 1; i ++){
      daCart = daCart + `${items[i]} at $${prices[i]}, `;
    }
    daCart = `${daCart}and ${items[cart.length - 1]} at $${prices[cart.length - 1]}.`;
    console.log(daCart);
  }
  return cart;
}

function total() {
  // write your code here
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++){
    totalPrice = totalPrice + parseInt(Object.values(cart[i]));
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  var gone;
  for (var i = 0; i < cart.length; i++){
  if (cart[i].hasOwnProperty(item)){
  gone = cart.splice(i, 1);
  } 
  }
  if (gone === undefined){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber > 0) {
    var totalPrice = total();
    cart = [];
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
  } else {
    cart = [];
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }
  cart = [];
  return cart;
}
