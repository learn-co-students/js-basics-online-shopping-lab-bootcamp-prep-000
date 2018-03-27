var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100)
  });
  
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length !== 0) {
    let message = 'In your cart, you have';
    for(let i = 0; i < cart.length; i++) {
      message += `${cart.length > 1 && i === cart.length - 1 ? ' and ' : ' '}${cart[i].itemName} at $${cart[i].itemPrice}${i === cart.length - 1 ? '.' : ','}`;
    }
    return message;
  } else {
    return 'Your shopping cart is empty.';
  }
}

function total() {
  let total = 0;
  cart.forEach(function(element) {
    total += element.itemPrice;
  });
  return total;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) return cart.splice(i, 1);
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(arguments.length === 0) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    let message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart.length = 0;
    return message;
  }
}
