var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({'itemName': item, 'itemPrice': Math.floor(Math.random() * 100)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  let string = 'In your cart, you have';
  if (cart.length < 1) {
      return 'Your shopping cart is empty.';
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        string += ` ${cart[i].itemName} at \$${cart[i].itemPrice}.`;
      } else if (i === cart.length - 1) {
         string += ` and ${cart[i].itemName} at \$${cart[i].itemPrice}.`;
      } else {
         string += ` ${cart[i].itemName} at \$${cart[i].itemPrice},`;
      }
    }
    return string;
  }
}


function total() {
  let price = 0;
  for (let i = 0; i < cart.length; i++) {
    price += cart[i].itemPrice;
  }
  return price;
}


function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      return cart.splice(i, 1);
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    let cost = total();
    cart = [];
    return `Your total cost is \$${cost}, which will be charged to the card ${cardNumber}.`;
  }
}
