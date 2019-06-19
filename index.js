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
  let newItem = {itemName: item, itemPrice: Math.floor(Math.random() * 100) };
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`;
  } else {
    let str = "In your cart, you have "
    for (let i = 0; i < cart.length; i++) {
      if (i !== cart.length - 1) {
        str += `${cart[i].itemName} at \$${cart[i].itemPrice}, `;
      } else {
        str += `and ${cart[i].itemName} at \$${cart[i].itemPrice}.`;
      }
    }
    return str;
  }
}

function total() {
  // write your code here
  let total = 0;
  for (let item of cart) {
    total += item.itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  let str = `Your total cost is \$${total(cart)}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return str;
}
