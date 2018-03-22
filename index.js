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
 var price = Math.floor(Math.random() * 10) + 1;
 var addedItem = {itemName: item, itemPrice: price};
 cart.push(addedItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var list;
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } 
  
  for (var i=0; i<cart.length; i++) {
    if (i===0) {
      list = `${cart[i].itemName} at $${cart[i].itemPrice}`;
    } else if (i === cart.length - 1){
      list += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
    } else {
      list += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
  }
  return `In your cart, you have ${list}.`;
}

function total() {
  // write your code here
  var total = 0;
  for(var i=0; i < cart.length; i++) {
  	total += parseInt(cart[i].itemPrice);
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var exist = -1;
  
  for(var i = 0; i < cart.length; i++) {
    console.log(item.toLowerCase());
    console.log(cart[i].itemName.toLowerCase());
    if (item.toLowerCase() === cart[i].itemName.toLowerCase()) {
      exist = [i];
    }
  }
  
  if (exist === -1) {
    return "That item is not in your cart.";
  } else {
    cart.splice(exist, 1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var tmp;
  if (cardNumber === '' || cardNumber === null || cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    tmp = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return tmp
  }
}

addToCart('Apple');
addToCart('Orange');
addToCart('Kiwi');
addToCart('Banana');
console.log(cart);
console.log(removeFromCart('Kiwi'));
console.log(placeOrder(1234567));