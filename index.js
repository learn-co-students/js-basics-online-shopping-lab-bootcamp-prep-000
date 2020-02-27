var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
 var itemObj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
 cart.push(itemObj);
 return `${item} has been added to your cart.`;
}



function viewCart() {
  var cartContents = '';
  for (let i = 0; i < cart.length; i++) {
    cartContents = cartContents + `${cart[i].itemName} at \$${cart[i].itemPrice}`
    if (cart.length > 1 && i < cart.length -1) {
      cartContents = cartContents + ', ';
    }
    if (cart.length > 1 && i === cart.length - 2) {
      cartContents = cartContents + 'and ';
    }
  }
  if (!cart.length) {
    return `Your shopping cart is empty.`
  } else {
    return `In your cart, you have ${cartContents}.`
  }
}



function total() {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice;
  }
  return totalPrice;
}



function removeFromCart(item) {
  let checkRemove = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      checkRemove = 1;
    }
  }
  if (checkRemove === 0) {
    return 'That item is not in your cart.';
  } else {
    return cart;
  }
}



function placeOrder(cardNumber) {
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    let totalCost = total();
    cart = [];
    return `Your total cost is \$${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}


