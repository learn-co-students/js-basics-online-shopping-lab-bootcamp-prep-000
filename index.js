var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 101);
  var itemNameAndPrice = { itemName: item, itemPrice: price, };
  cart.push(itemNameAndPrice);
  return `${item} has been added to your cart.`;
}


function viewCart() {
  if(cart.length > 0) {
  var itemNameAndPrice = [];
  for(var i = 0; i < cart.length; i++) {
    itemNameAndPrice.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    if(cart.length > 1 && i === cart.length - 1) {
      itemNameAndPrice.splice(i, 1, ` and ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
  }
  return `In your cart, you have${itemNameAndPrice}.`;
} else {
  return 'Your shopping cart is empty.'
  }
}

function total() {
  var totalValue = 0;
  var i = 0;
  while(i < cart.length) {
    totalValue = totalValue + parseInt(cart[i].itemPrice);
    i++;
  }
  return totalValue;
}

function removeFromCart(item) {
  var itemIsInCart = false;
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      itemIsInCart = true;
      cart.splice(i, 1);
      }
    }
    if(itemIsInCart) {
      return cart;
    } else {
      return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  var totalValue = total();
  if(cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    cart = [];
    return `Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`
  }
}