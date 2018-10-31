var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * Math.floor(100))
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  let cartDescription = [];
  let lastIndex = cart.length - 1;
  let finalItem;
  if(cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    for(let i = 0; i < (cart.length - 1); i++) {
      cartDescription.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    for(let i = lastIndex; i < cart.length; i++) {
      finalItem = `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
    return `In your cart, you have${cartDescription}${finalItem}.`;
  }
}

function total() {
  let total = 0;
  for(let i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  let itemFound = false;
  let deleteItemIndex;
  for(let i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      itemFound = true;
      deleteItemIndex = i;
      
      if(itemFound === true) {
        cart.splice(deleteItemIndex, 1);
        return cart;
      }
    }
  }
  if (itemFound === false) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    let finishPurchase = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return finishPurchase;
  }
}
