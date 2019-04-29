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
  //make array of itemNames in the cart
  var cartItems = Object.keys
}

function placeOrder(cardNumber) {
  // write your code here
}
