var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const cart = getCart();
  cart.push({
      itemName: item,
      itemPrice: Math.floor(Math.random() * (100 - 1) + 1)
    });
  
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let cartContent = 'In your cart, you have ';
  const cart = getCart();
  
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    if (cart.length === 1) {
      return cartContent += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }
    
    for (let i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        cartContent += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else {
        cartContent += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    return cartContent;
  }
}

function total() {
  const cart = getCart();
  let total = 0;
  
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  const cart = getCart();
  const cartLength = cart.length;
  
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  
  if (cartLength === cart.length) {
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber) {
  const cart = getCart();
  const totalAmt = total();
  
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart.splice(0);
    return `Your total cost is $${totalAmt}, which will be charged to the card ${cardNumber}.`;
  }
}
