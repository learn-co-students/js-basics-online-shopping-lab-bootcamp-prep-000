var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)};
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0) return 'Your shopping cart is empty.';

  let snippets = []
  for(let i = 0; i < cart.length; i++) {
    snippets.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }

  if(snippets.length === 1) {
    return `In your cart, you have ${ snippets[0] }.`;
  } else if(snippets.length === 2) {
    return `In your cart, you have ${ snippets.join(', and ') }.`;
  } else {
    return `In your cart, you have ${ snippets.slice(0, -1).join(', ')}, and ${snippets.slice(-1) }.`;
  }
}

function total() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += parseInt(cart[i].itemPrice);
  }
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    } 
  }
  return "That item is not in your cart."; 
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    let totalCartValue = total();
    cart.length = 0; 
    return `Your total cost is $${totalCartValue}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}