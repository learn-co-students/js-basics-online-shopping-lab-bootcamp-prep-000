var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var temp = { itemName: item, itemPrice: price};
  cart.push(temp);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var items_count = cart.length;
  if (items_count === 0) { return "Your shopping cart is empty."}
  var resp = "In your cart, you have ";
  var sep = ', ', conj = '';
  var multiple_items = (items_count > 1);
  for (let i = 0; i < items_count; i++) {
    let item = cart[i];
    let last_item = (i == items_count - 1);
    if ( last_item ) { sep = '.'; }
    if (last_item && multiple_items) { conj = 'and '; }
    resp += `${conj}${item.itemName} at $${item.itemPrice}${sep}`;
  }
  return resp;
}

function total() {
  var cost = 0;
  var items_count = cart.length;
  for (let i = 0; i < items_count; i++) {
    cost += cart[i].itemPrice;
  }
  return cost;
}

function removeFromCart(item) {
  var items_count = cart.length;
  var item_index = null;
  for (let i = 0; i < items_count; i++) {
    if (cart[i].itemName == item){ item_index = i }
  }
  if (item_index === null) { 
    return "That item is not in your cart.";
  }
  cart.splice(item_index, 1);
  return cart;
}

function placeOrder(cardNumber='') {
  if (cardNumber==='') {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var cost = total();
  cart = [];
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
}
