var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) +1;
  const itemInfo = { itemName: `${item}`, itemPrice: price };
  cart.push(itemInfo);
 
 return(`${item} has been added to your cart.`);
 
}

function viewCart() {
  if(cart.length === 0) {
    return('Your shopping cart is empty.');
  }
  else {
    const itemList = []
    for(let i = 0; i < cart.length; i++) {
      itemList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    if(cart.length === 1) {
      return(`In your cart, you have ${itemList}.`);
    }
    else {
    return(`In your cart, you have ${itemList.slice(0, -1).join(', ')}` + ', and ' + itemList.slice(-1) + '.');
  }
 }
}
      
  function total() {
  var itemTotal = 0;
  for(let i = 0; i < cart.length; i++) {
    itemTotal += getCart()[i].itemPrice;
  }
  return itemTotal;
    }
  

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      
      return cart;
    }
  }
  return('That item is not in your cart.');
}


function placeOrder(cardNumber) {
  for( let i = 0; i < cardNumber; i++) {
    const cartTotal = total();
    cart.splice(0, cart.length);
    return(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  }
    return("Sorry, we don't have a credit card on file for you.");
}
