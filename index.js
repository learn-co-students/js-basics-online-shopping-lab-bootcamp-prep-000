var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100);
  var object = {
    itemName: item,
    itemPrice: price
  }
  cart.push(object);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var array = [];
    for (let i = 0; i < cart.length; i++) {
      array.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)}
    if (cart.length === 1) {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
    } else if (cart.length >= 2) {
      return `In your cart, you have${array.slice(0, -1)}, and${array.slice(-1)}.`;
    }
    if (cart.length === 0) {
      return 'Your shopping cart is empty.';
    }
}

function total() {
  var money = [];
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    money.push(parseInt(`${getCart()[i].itemPrice}`));
  }
  for (let n = 0; n < money.length; n++) {
    sum += money[n];
  }
  return sum;
}

function removeFromCart(item) {
  for (let r = 0; r < cart.length; r++) {
    if (`${getCart()[r].itemName}` === item) {
      getCart().splice(r, 1)
    }
  }
    return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  let card = total();
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    cart.splice(0)
    return `Your total cost is $${card}, which will be charged to the card ${cardNumber}.`
    
  }
}
