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
 var object = {};
 object["itemName"] = item;
 object["itemPrice"] = Math.floor(Math.random() * 100) + 1;
 cart.push(object);
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var newArr = [];
  if (!cart.length) {
    return 'Your shopping cart is empty.';
  }
  
  for (var i = 0; i < cart.length; i++) {
    var ele = cart[i];
    var item = ele["itemName"];
    var price = ele["itemPrice"];
    if (cart.length === 1) {
      newArr.push(`${item} at $${price}`)
    } else if (i === cart.length - 1) {
      newArr.push(`and ${item} at $${price}`);
    } else {
      newArr.push(`${item} at $${price}`);
      }
  }
  var str = newArr.join(", ");
  
  return `In your cart, you have ${str}.`;
}

function total() {
  // write your code here
  var total = 0;
  
  for (var i = 0; i < cart.length; i++) {
    var ele = cart[i]
    var price = ele["itemPrice"];
    total += price;
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    var ele = cart[i];
    var itemname = ele["itemName"];
    if (item === itemname) {
      cart.splice(i,1);
    } 
  }
  
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var price = total();
    cart = [];
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
  }
}

