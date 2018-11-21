var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(
    {
      'itemName': item,
      'itemPrice': Math.round(Math.random() * (100 - 1) + 1)
    })
  return `${item} has been added to your cart.`
}

function viewCart() {
  let cartMessage = '';
  let itemMessage = '';
  
  if (cart.length === 0){
    cartMessage += `Your shopping cart is empty.`;
  } else {
    cartMessage += `In your cart, you have `;
  }
  cart.map((elem, i) => {
    itemMessage = `${elem.itemName} at $${elem.itemPrice}`
    if (cart.length === 1) {
      cartMessage += `${itemMessage}.`
    } else if (i === cart.length-1) {
      cartMessage += `and ${itemMessage}.`
    } else {
      cartMessage += `${itemMessage}, `
    }
  })
  return cartMessage;
}

function total() {
  return cart.reduce((acc, elem) => {
    return acc += elem.itemPrice;
  }, 0)
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1)
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    let totalCost = total();
    cart.splice(0,cart.length);
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
