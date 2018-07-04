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
 var myString = '';
 cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)}); 
 myString = item + ' has been added to your cart.'
 return myString;
}

function viewCart() {
  // write your code here
  var string = 'initialisation';
  var i = 0;
  if (cart.length===0) { return 'Your shopping cart is empty.'}
  else {
    string = 'In your cart, you have '
    for (i=0; i<cart.length; i++) {
      if (i==cart.length-1) {
        if (i>0) {string = string + 'and ' 
        } 
       string = string + cart[i].itemName + ' at $' + cart[i].itemPrice + '.';
      } 
      else {
        string = string + cart[i].itemName + ' at $' + cart[i].itemPrice + ', ';
      }
    }
  return string;  
  }
}

function total() {
  // write your code here
  var total = 0;
  var     i = 0;
  for (i=0; i<cart.length; i++) {
      total = total + cart[i].itemPrice
  }
  return  total   
}

function removeFromCart(item) {
  // write your code here
  var i=0;
  var removed=false;
  for (i=0; i<cart.length; i++) {
    if (cart[i].itemName==item) {
      removed=true;
      cart.splice(i,1);
      console.log(removed);
    }
    else {
      console.log(i);
    }
  }
  if (removed===false) { 
    return 'That item is not in your cart.';
  } 
  else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var myString = '';
  if (cardNumber===undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else {
    myString = `Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`
    cart = [];
  }
  return myString
}
