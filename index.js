var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {
   itemName: item,
   itemPrice: Math.round(Math.random() * 100)
 };
 
 cart.push(obj);
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (!cart.length) {
    return 'Your shopping cart is empty.'
  }
  
  let items = '';
  
  cart.forEach((item, index) => {
    items += `${item.itemName} at $${item.itemPrice}`;
    
    if (index === cart.length - 2) {
      items += ', and ';
    } else if (index < cart.length - 2) {
      items += ', ';
    }
  });
  
  return 'In your cart, you have ' + items + '.';
}

function total() {
  return cart.reduce((result, item) => {
    result += item.itemPrice;
    return result
  }, 0);
}

function removeFromCart(item) {
  const indexToRemove = cart.reduce((result, data, index) => {
    if (data.itemName === item) {
      result = index;
    }
    
    return result;
  }, -1);
  
  if (indexToRemove === -1) {
    return 'That item is not in your cart.';
  }
  
  cart.splice(indexToRemove, 1);
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  
  const totalCost = total();
  cart = [];
  
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
}
