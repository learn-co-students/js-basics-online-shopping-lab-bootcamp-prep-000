var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var item = {};
 var itemPrice = Math.floor(Math.random() * 100);
 item[itemName] = itemPrice;
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1){
      var item = Object.keys(cart[0])[0];
      var price = cart[0][item];
      console.log(`In your cart, you have ${item} at $${price}.`);
  } else if (cart.length === 2) {
      let items = cart.map((item) => {
        return Object.keys(item)[0];
      });
      
      console.log(`In your cart, you have ${items[0]} at $${cart[0][items[0]]} and ${items[1]} at $${cart[1][items[1]]}.`);
  } else if (cart.length > 2) {
      var threeItemsOrMore = 'In your cart, you have ';
      for (var i = 0; i < cart.length; i++){
        if (i === cart.length - 1){
          var lastItem = `and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`
          threeItemsOrMore += lastItem;
        } else {
          var item = `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`;
          threeItemsOrMore += `${item}, `;
        }
      }
      console.log(threeItemsOrMore);
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++){
    var price = cart[i][Object.keys(cart[i])[0]];
    total += price;
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code here
  var items = cart.map((item) => {
    return Object.keys(item)[0];
  });
  
  if (items.indexOf(item) === -1){
    console.log(`That item is not in your cart.`);
  } else { 
    var toRemoveIdx = items.indexOf(item);
    cart = cart.slice(0, toRemoveIdx).concat(cart.slice(toRemoveIdx+1));
  }
  
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === (null || undefined)){
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  
  cart = [];
}
