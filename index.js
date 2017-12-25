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
 var min = 1 ;
 var max = 100 ;
 var price = Math.floor( Math.random() * (max + 1 - min) ) + min ;
 var obj = {[item]: price};
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
 
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    
    var str='In your cart, you have ';
    for (var i = 0; i < cart.length; i++) {
      var keyNames = Object.keys(cart[i]);
      var keyName = keyNames[0];
      var price = cart[i][keyName];
      str += `${keyName} at $${price}`;
      if (i + 1 === cart.length) {
        str+='.';
      } else if (cart.length === 2 && i+1 === cart.length - 1) {
        str +=' and ';
      } else if (cart.length > 2 && i+1 === cart.length - 1) {
        str += ', and ';
      } else {
        str+=', ';
      }
    }
    console.log(str);

  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
      var keyNames = Object.keys(cart[i]);
      var keyName = keyNames[0];
      var price = cart[i][keyName];
      total += price;
      
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var totalPrice = total();
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
    cart= [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
    
  }
}


