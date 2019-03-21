var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let priceOfItem = (Math.floor(Math.random() * 100) + 1); 
  let fullItem = {itemName: item, itemPrice: priceOfItem};
  cart.push(fullItem);
  return (item + ' has been added to your cart.');
}

function viewCart() {
  let currentCart = [];
  if (cart.length === 0){
    return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
    return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + '.';
  } else if (cart.length === 2){
    return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + ', and ' + cart[1].itemName + ' at $' + cart[1].itemPrice + '.';
  } else if (cart.length > 2) {
    var i = 0;
    while (i < 2) {
      currentCart.push(' ' + cart[i].itemName + ' at $' + cart[i].itemPrice);
      i++;
    }
    for (i = 2; i < cart.length; i++) { 
      currentCart.push(' and '+ cart[i].itemName + ' at $' + cart[i].itemPrice);
    }
  }
  return 'In your cart, you have' + currentCart + '.';
}

function total() {
  let combined = 0;
  var i = 0;
  for (i = 0; i < cart.length; i++) {
    combined = combined + cart[i].itemPrice;
  }
  return combined;
}

function removeFromCart(item) {
  var i = 0;
  for (i = 0; i < cart.length; i++){
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    let totalCost = total();
    cart = [];
    return "Your total cost is $" + totalCost + ", which will be charged to the card " + cardNumber + '.';
  }
}
