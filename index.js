var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {};
  newItem.itemName = item;
  newItem.itemPrice = Math.floor(Math.random() * 100);
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length > 0){
    let cartView = [];
    for(let i = 0; i < cart.length; i++) {
      cartView.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    switch(cartView.length){
      case 1:
        return `In your cart, you have ${cartView[0]}.`;
      case 2:
        return `In your cart, you have ${cartView[0]}, and ${cartView[1]}.`;
      default:
      return `In your cart, you have ${cartView.slice(0, cart.length - 1).join(", ")}, and ${cartView[cartView.length - 1]}.`;
    }
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  let total = 0;
  for(let i = 0; i < cart.length; i++){
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length;){
    if(cart[i].itemName == item) {
      return cart.splice(i, 1);
    } i++;
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var sentance = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return sentance;
  }
}
