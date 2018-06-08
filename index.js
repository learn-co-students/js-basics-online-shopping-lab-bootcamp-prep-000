var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length == 0)
    return 'Your shopping cart is empty.';

  return 'In your cart, you have ' + cart.map((item, index, array) => {
    var r = `${item.itemName} at $${item.itemPrice}`;

    if (index == array.length - 1) {
      r = `${r}.`;
      if (array.length > 1)
        r = `and ${r}`;
    }

    return r;
  }).join(', ');
}

function total() {
  // write your code here
  return cart.reduce((a, c) => a + c.itemPrice, 0);
}

function removeFromCart(item) {
  // write your code here
  if (cart.find(e => e.itemName == item))
    cart = cart.filter(e => e.itemName != item);
  else
    return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber)
    return 'Sorry, we don\'t have a credit card on file for you.';
  var t = total();
  cart = [];
  return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`;

}
