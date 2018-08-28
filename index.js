var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  let out = "In your cart, you have";
  if (cart.length === 0) {
    out = "Your shopping cart is empty.";
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (i !== 0 && i === cart.length - 1) {
        out += ` and ${cart[i].itemName} at $${cart[i].itemPrice}`
      } else if (i === 0 && i === cart.length - 1) {
        out += ` ${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
      else {
        out += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
    }
    out += "."
  }
  return out;
}

function total() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  const itemIndex = cart.findIndex(a => a.itemName === item);
  
  if (itemIndex > -1) {
    cart.splice(itemIndex, 1);
    return cart;
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    const cost = total();
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
