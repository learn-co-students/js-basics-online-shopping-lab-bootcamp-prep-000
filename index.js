var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};
  var itemName;
  var itemPrice;
  
  // itemPrice = price is a random integer from 0 to 100
  var price = Math.floor(Math.random() * 100) + 1;
  
  // cart has 2 key-value pairs: {itemName: "value", itemPrice: "value"}
  obj.itemName = item;
  obj.itemPrice = price;
  
  // Adds new item to cart
  cart.push(obj);
  return `${item} has been added to your cart.`
}

function viewCart() {
  var ans = `In your cart, you have `;
  
  // cart has 0 items
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } 
  
  // cart has 1 item
  else if (cart.length === 1) {
    return ans.concat(`${cart[0].itemName} at $${cart[0].itemPrice}.`);
  }
  
  // cart has more than 1 item
  for (var i = 0; i < cart.length; i++) {
    
    // When index is at the second to last item, append "and" to the statement
    if (i === cart.length - 1) {
      ans = ans.concat(`and `);
    }
    
    // Loop body
    ans = ans.concat(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    
    // When index is less than the second to last item, append a comma "," to the statement
    if (i < cart.length - 1) {
      ans = ans.concat(`, `);
    }
    
    // When index is at the last item, append a period "." to the statement
    if (i === cart.length - 1) {
      ans = ans.concat(`.`);
    }
  }
  
  return ans;
}

function total() {
  var ans = 0;
  
  for (var i = 0; i < cart.length; i++) {
    ans += cart[i].itemPrice;
  }
  
  return ans;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return getCart();
    }
  }
  
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  var ans;
  
  // If no argument is received, let customer know that there is no credit card on file
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  
  ans = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  
  // Reassigns cart to empty
  cart = [];
  
  return ans;
}
