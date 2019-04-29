var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {};
  newItem.itemName = item;
  newItem.itemPrice = Math.floor(Math.random() * 100);

//add new item object to cart
  cart.push(newItem);

  return `${item} has been added to your cart.`;
}

function viewCart() {
  let statement = '';
  
  //if there's nothing in the cart return this statement
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }  
  
  //looks at each item and adds item and price to statement string
  for(let i=0; i<cart.length; i++) {
    //adds banana at $17 to the statement string
    statement += cart[i].itemName + " at $" + cart[i].itemPrice; 

    //if it's second to last, add Oxford comma
    if (i === cart.length - 2) {
      statement += ', and ';
      continue;
    }

    //if it's not the last item, add punctuation
    if (i!==cart.length-1) {
      statement += ', ';
    }
  }
    
  return `In your cart, you have ${statement}.`;
}

function total() {
  var sum = 0;
  
  //iterate over items in the cart, summing them up
  for (var i=0; i<cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  
  return sum;
}

function removeFromCart(item) {
  //create boolean to reflect presence/absence of specificied item
  var present = false;
  
  //loop over itemNames and check if item matches any itemName; delete from cart array if it matches
  for (var i=0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      present = true;
      cart.splice(i, 1);
    }
  }

  //if no match was found, return statement
  if (present === false) {
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber) {
  //return this statement if no cardNumber is given
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  
  //sum the price of each item
  var sum = 0;
  for (var i=0; i<cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  
  //empty cart
  cart = [];
  
  //return statement with price and card number
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
}