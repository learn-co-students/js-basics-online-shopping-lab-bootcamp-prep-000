var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const obj = {itemName: item, itemPrice: Math.floor(Math.random()*100+1)};
  cart.push(obj);
  return `${obj.itemName} has been added to your cart.`;
}

function viewCart() {
  if(!cart.length) { return 'Your shopping cart is empty.'; }
  var items = [];
  for(let i = 0; i < cart.length; i++) {
    items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if(items.length === 1) {
    return `In your cart, you have ${items[0]}.`;
  }
  else if(items.length === 2) {
    return `In your cart, you have ${items.join(', and ')}.`;
  }
  else {
    return `In your cart, you have ${items.slice(0, items.length - 2).join(' , ')}, ${items.slice(-2).join(', and ')}.`;
  }
}

function total() {
  var t = 0;
  for(let i = 0; i < cart.length; i++) {
    t = t + cart[i].itemPrice;
  }
  return t;
}

function removeFromCart(item) {
  var exist = false;
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item){
      exist = true;
      cart.splice(i, 1);
    }
  }
  if(!exist) {
    return 'That item is not in your cart.'
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber){
    var t = total();
    setCart([]);
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
  }
  return 'Sorry, we don\'t have a credit card on file for you.';
}
