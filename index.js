var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = (Math.floor(Math.random() * 100+1));
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var x = [];
  var y = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++){
    var itemName = Object.keys(cart[i]);
    var priceNum = cart[i][itemName];
        x.push(itemName +' at $'+ priceNum);
    }
  var middle = x.join(' and ');
  var beginning = x.slice(0, -1).join(', ');
  var end = x.slice(-1);

  if (cart.length === 0){console.log('Your shopping cart is empty.')}
  else if (cart.length === 1){console.log(`${y} ${x}.`)}
  else if (cart.length === 2){console.log(`${y} ${middle}.`)}
  else if (cart.length > 2){console.log(`${y} ${beginning}, and ${end}.`)}
  }

function total() {
  var x=0;
  for(let i=0; i<cart.length; i++){
    var y = Object.keys(cart[i]);
    var z = cart[i][y];
    x = x + z;
  }
  return x;
}

function removeFromCart(item) {
  var present = false;
   for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      present = true;
      cart.splice(i, 1);
  }}
    if (!present){console.log('That item is not in your cart.')}
  return cart;
}

function placeOrder(cardNumber) {
 if(!cardNumber){
   console.log("Sorry, we don't have a credit card on file for you.");
 }
 else{console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
 cart = [];
}}
