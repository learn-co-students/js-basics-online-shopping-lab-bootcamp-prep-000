var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 var cartItem = {[item]: price};
 getCart().push(cartItem);
 console.log(item + " has been added to your cart.");
 return getCart();
}

function viewCart() {
  var string = `In your cart, you have `;
  if (getCart().length === 0) {
    console.log('Your shopping cart is empty.');
  }else
  if (getCart().length === 1) {
    console.log(`${string}${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}.`);
  } else
  if (getCart().length === 2) {
    console.log(`${string}${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]} and ${Object.keys(getCart()[1])[0]} at $${getCart()[1][Object.keys(getCart()[1])[0]]}.`);
  }else{
  for (var i = 0; i < getCart().length; i++) {
    string += `${Object.keys(getCart()[i])[0]} at $${getCart()[i][Object.keys(getCart()[i])[0]]}` ;
    if(i === getCart().length-2){
      string += ', and ';
    }  else if (i === getCart().length-1) {
        string += '.';
      }
    else {
      string += ', ';
    }

  }
  console.log(string);
}
}

function total() {
  // write your code here
  var sum = 0;
  for (var i = 0; i < getCart().length; i++) {
    sum += getCart()[i][Object.keys(getCart()[i])[0]];
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var removed = false;
  for (var i = 0; i < getCart().length; i++) {
    if(getCart()[i].hasOwnProperty(item)){
      getCart().splice(i,1);
      removed= true;
    }
  }
if (removed) {
  return cart;
}else {
  console.log ('That item is not in your cart.');
}}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }else {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }
  setCart([]);
}
addToCart('abbbb');
addToCart('bbbbbbaaaa');
viewCart();
placeOrder(2);
