var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = {itemName: item};
 item.itemPrice = Math.floor(Math.random()*100);
 cart.push(item);
 return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  if(cart.length < 1) {
    return "Your shopping cart is empty.";
  } else {
  let itemNum = [];
  for (let i = 0; i < cart.length; i++) {
    itemNum.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if(cart.length === 1) {
    return `In your cart, you have ${itemNum.join(', ')}.`
  } else {
   let last = itemNum.pop();
   return `In your cart, you have ${itemNum.join(', ')}, and ${last}.`
  }
  }
}

function total() {
  let i = 0;
  let total = 0;
  while(i < cart.length) {
    total += cart[i].itemPrice;
    i++;
  }
  return total;
}

function removeFromCart(item) {
  let foundItem = false;
  console.log(item);
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i,1);
      foundItem = true;
    }
  }
  if(foundItem === false) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  let total = 0;
  let i = 0;
  if(typeof cardNumber === 'number') {
    while(i < cart.length) {
      total += cart[i].itemPrice;
      i++;
    }
    i = 0;
    while(i < cart.length) {
      cart.splice(i, 1);
    }
      
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
  return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`;
}
