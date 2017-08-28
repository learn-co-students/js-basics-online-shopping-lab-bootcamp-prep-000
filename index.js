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
    var random = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + 1;
    var object = new Object({[item]: random});
    cart.push(object);
    console.log(item + " has been added to your cart.");
    return cart;
}


function viewCart() {
  // write your code here
  var message = "";
  var cart = getCart();
  
  if(cart.length == 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length == 1) {
    var item = cart[0];
    var itemName = Object.keys(item);
    console.log(`In your cart, you have ${[itemName]} at $${item[itemName]}.`);
  } else {
    for (var i = 0; i < cart.length; i++)
    {
      var item = cart[i];
      var itemName = Object.keys(item);
      if (i == 0) {
        if (cart.length == 2) {
        message += `In your cart, you have ${[itemName]} at $${item[itemName]}`;
      } else {
        message += `In your cart, you have ${[itemName]} at $${item[itemName]},`;
      }
      } else if (i == cart.length - 1) {
        message += ` and ${[itemName]} at $${item[itemName]}.`;
      }  else {
        message += ` ${[itemName]} at $${item[itemName]},`;
     }
   }
  }
  console.log(message);
}

function total() {
  // write your code here
 var cart = getCart();
 var total = 0;

 for (var i = 0; i < cart.length; i++)
 {
   var item = cart[i];
   var itemName = Object.keys(item);
   total += parseInt(item[itemName]);
 }
 return total;
}

function removeFromCart(item) {
  // write your code here
  var found = false;
  for (var i = 0; i < cart.length; i++)
  {
      var cartItem = cart[i];
      if(cartItem.hasOwnProperty(item)) {
      //remove item
      cart.splice(i, 1);
      found = true;
      }
   }
   if (!found) {
     console.log("That item is not in your cart.");
   }
   return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var cartTotal = total();
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
